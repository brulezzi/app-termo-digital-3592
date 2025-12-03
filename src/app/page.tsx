"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { WelcomePage } from "./components/WelcomePage"
import { PersonalDataForm } from "./components/PersonalDataForm"
import { TermsPage } from "./components/TermsPage"
import { SignaturePage } from "./components/SignaturePage"
import { AftercarePage } from "./components/AftercarePage"
import { ThankYouPage } from "./components/ThankYouPage"

export type FormData = {
  fullName: string
  whatsapp: string
  birthDate: string
  document: string
  isMinor: boolean
  guardianName?: string
  guardianDocument?: string
  authorizedPiercings?: string[]
  authorizedPiercing?: string
  termsAccepted: boolean
  signature?: string
  timestamp?: string
}

function formatarDataParaISO(data: string): string | null {
  // espera algo como "31/12/2025"
  if (!data) return null;
  const partes = data.split("/");
  if (partes.length !== 3) return null;

  const [dia, mes, ano] = partes;
  if (!dia || !mes || !ano) return null;

  // retorna no formato "2025-12-31"
  return `${ano}-${mes}-${dia}`;
}

async function salvarTermoNoSupabase(formData: FormData) {
  const dataISO = formatarDataParaISO(formData.birthDate);

  if (!dataISO) {
    throw new Error("Data de nascimento em formato inválido.");
  }

  const { error } = await supabase.from("termos_piercing").insert([
    {
      nome_completo: formData.fullName,
      whatsapp: formData.whatsapp,
      data_nascimento: dataISO,
      documento: formData.document,
      menor_idade: formData.isMinor,
      nome_responsavel: formData.isMinor ? formData.guardianName : null,
      documento_responsavel: formData.isMinor ? formData.guardianDocument : null,
      perfuracao_autorizada: formData.authorizedPiercing ?? "",
    },
  ]);

  if (error) {
    console.error("Erro ao salvar termo no Supabase:", error);
    throw error;
  }
}

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [perfuracoesSelecionadas, setPerfuracoesSelecionadas] = useState<string[]>([])
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    whatsapp: "",
    birthDate: "",
    document: "",
    isMinor: false,
    termsAccepted: false,
    authorizedPiercings: [],
  })

  const nextStep = () => setCurrentStep(prev => prev + 1)
  
  const alternarPerfuração = (nomePerfuração: string) => {
    setPerfuracoesSelecionadas((anteriores) => {
      if (anteriores.includes(nomePerfuração)) {
        // se já estiver selecionada, remove
        return anteriores.filter((item) => item !== nomePerfuração);
      }
      // se não estiver, adiciona
      return [...anteriores, nomePerfuração];
    });
  };
  
  const updateFormData = (data: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...data }))
  }

  const saveFormDataAndGoToSupabase = async (data: Partial<FormData>) => {
    try {
      setLoading(true);
      
      const updatedData = { ...formData, ...data, timestamp: new Date().toISOString() }
      setFormData(updatedData)
      
      // Salvar no localStorage para consulta posterior
      const savedForms = JSON.parse(localStorage.getItem("debby-piercing-forms") || "[]")
      savedForms.push(updatedData)
      localStorage.setItem("debby-piercing-forms", JSON.stringify(savedForms))

      // Validar se tem perfurações selecionadas
      if (!updatedData.authorizedPiercings || updatedData.authorizedPiercings.length === 0) {
        alert("Selecione pelo menos uma perfuração.");
        setLoading(false);
        return;
      }

      // Salvar no Supabase
      await salvarTermoNoSupabase({
        ...updatedData,
        authorizedPiercing: updatedData.authorizedPiercings.join(", ")
      });

      // Avançar para próxima etapa
      nextStep();
    } catch (error) {
      console.error("Erro ao salvar:", error);
      alert("Erro ao salvar seus dados. Avise o atendente, por favor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      {currentStep === 1 && <WelcomePage onNext={nextStep} />}
      {currentStep === 2 && (
        <PersonalDataForm
          formData={formData}
          updateFormData={updateFormData}
          onNext={nextStep}
          perfuracoesSelecionadas={perfuracoesSelecionadas}
          alternarPerfuração={alternarPerfuração}
        />
      )}
      {currentStep === 3 && (
        <TermsPage
          formData={formData}
          updateFormData={updateFormData}
          onNext={nextStep}
        />
      )}
      {currentStep === 4 && (
        <SignaturePage
          formData={formData}
          saveFormData={saveFormDataAndGoToSupabase}
          onNext={nextStep}
          loading={loading}
        />
      )}
      {currentStep === 5 && (
        <AftercarePage
          formData={formData}
          onNext={nextStep}
        />
      )}
      {currentStep === 6 && (
        <ThankYouPage
          formData={formData}
        />
      )}
    </div>
  )
}
