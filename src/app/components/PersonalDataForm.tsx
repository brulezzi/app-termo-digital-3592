"use client"

import { useState } from "react"
import { FormData } from "../page"
import { User, Phone, Calendar, FileText, Shield, Scissors } from "lucide-react"

type PersonalDataFormProps = {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
  onNext: () => void
  perfuracoesSelecionadas: string[]
  alternarPerfuração: (nomePerfuração: string) => void
}

const piercingOptions = [
  "Nostril",
  "Umbigo",
  "Lóbulo (1º furo)",
  "Lóbulo (2º furo)",
  "Lóbulo (3º furo)",
  "Daith",
  "Conch",
  "Minions",
  "Australianos",
  "Helix",
  "Upper Helix",
  "Midhelix",
  "Antihelix",
  "Flat",
  "Tragus",
  "Californiano",
  "Rock",
  "Mamilo",
  "Microdermal",
  "Surface 90 graus",
  "Íntimo (testa ou clitóris)",
  "Língua",
  "Sobrancelha",
  "Bridget",
  "Labret Vertical",
  "Labret Lateral",
  "Septo",
  "Smile",
  "Medusa"
]

export function PersonalDataForm({ formData, updateFormData, onNext, perfuracoesSelecionadas, alternarPerfuração }: PersonalDataFormProps) {
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) newErrors.fullName = "Nome completo é obrigatório"
    if (!formData.whatsapp.trim()) newErrors.whatsapp = "WhatsApp é obrigatório"
    if (formData.whatsapp && !/^\d{10,11}$/.test(formData.whatsapp.replace(/\D/g, ""))) {
      newErrors.whatsapp = "WhatsApp inválido (ex: 19989644538)"
    }
    if (!formData.birthDate) newErrors.birthDate = "Data de nascimento é obrigatória"
    
    // Validar formato da data (DD/MM/AAAA)
    if (formData.birthDate && !/^\d{2}\/\d{2}\/\d{4}$/.test(formData.birthDate)) {
      newErrors.birthDate = "Use o formato DD/MM/AAAA"
    }
    
    if (!formData.document.trim()) newErrors.document = "Documento é obrigatório"
    
    // CAMPO OBRIGATÓRIO - PELO MENOS UMA PERFURAÇÃO
    if (perfuracoesSelecionadas.length === 0) {
      newErrors.piercings = "Selecione pelo menos uma perfuração"
    }

    if (formData.isMinor) {
      if (!formData.guardianName?.trim()) newErrors.guardianName = "Nome do responsável é obrigatório"
      if (!formData.guardianDocument?.trim()) newErrors.guardianDocument = "Documento do responsável é obrigatório"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      updateFormData({ authorizedPiercings: perfuracoesSelecionadas })
      onNext()
    }
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "")
    
    // Formatar automaticamente DD/MM/AAAA
    if (value.length >= 2) {
      value = value.slice(0, 2) + "/" + value.slice(2)
    }
    if (value.length >= 5) {
      value = value.slice(0, 5) + "/" + value.slice(5, 9)
    }
    
    updateFormData({ birthDate: value })
  }

  return (
    <div className="min-h-screen flex flex-col px-6 py-8">
      <div className="w-full max-w-md mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2 pb-4">
          <h2 className="text-3xl font-bold text-[#D4AF37]">Seus Dados</h2>
          <p className="text-gray-300">Preencha suas informações pessoais</p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Nome Completo */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-white font-medium">
              <User className="w-4 h-4 text-[#D4AF37]" />
              Nome Completo
            </label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => updateFormData({ fullName: e.target.value })}
              className="w-full bg-black/50 border border-[#D4AF37]/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
              placeholder="Digite seu nome completo"
            />
            {errors.fullName && <p className="text-red-400 text-sm">{errors.fullName}</p>}
          </div>

          {/* WhatsApp */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-white font-medium">
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              WhatsApp
            </label>
            <input
              type="tel"
              value={formData.whatsapp}
              onChange={(e) => updateFormData({ whatsapp: e.target.value })}
              className="w-full bg-black/50 border border-[#D4AF37]/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
              placeholder="(19) 98964-4538"
            />
            {errors.whatsapp && <p className="text-red-400 text-sm">{errors.whatsapp}</p>}
          </div>

          {/* Data de Nascimento - APENAS TEXTO */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-white font-medium">
              <Calendar className="w-4 h-4 text-[#D4AF37]" />
              Data de Nascimento
            </label>
            <input
              type="text"
              value={formData.birthDate}
              onChange={handleDateChange}
              maxLength={10}
              className="w-full bg-black/50 border border-[#D4AF37]/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
              placeholder="DD/MM/AAAA"
            />
            {errors.birthDate && <p className="text-red-400 text-sm">{errors.birthDate}</p>}
          </div>

          {/* Documento */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-white font-medium">
              <FileText className="w-4 h-4 text-[#D4AF37]" />
              Documento (RG ou CPF)
            </label>
            <input
              type="text"
              value={formData.document}
              onChange={(e) => updateFormData({ document: e.target.value })}
              className="w-full bg-black/50 border border-[#D4AF37]/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
              placeholder="Digite seu RG ou CPF"
            />
            {errors.document && <p className="text-red-400 text-sm">{errors.document}</p>}
          </div>

          {/* CAMPO DE PERFURAÇÕES - MÚLTIPLAS ESCOLHAS */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-white font-medium">
              <Scissors className="w-4 h-4 text-[#D4AF37]" />
              Quais perfurações você vai fazer? *
            </label>
            <p className="text-sm text-gray-400">Selecione todas as perfurações desejadas (1 a 8)</p>
            
            <div className="bg-black/30 border border-[#D4AF37]/20 rounded-lg p-4 max-h-64 overflow-y-auto space-y-2">
              {piercingOptions.map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#D4AF37]/10 cursor-pointer transition-all"
                >
                  <input
                    type="checkbox"
                    checked={perfuracoesSelecionadas.includes(option)}
                    onChange={() => alternarPerfuração(option)}
                    className="w-5 h-5 rounded border-[#D4AF37] text-[#D4AF37] focus:ring-[#D4AF37] focus:ring-offset-black"
                  />
                  <span className="text-white">{option}</span>
                </label>
              ))}
            </div>
            
            {perfuracoesSelecionadas.length > 0 && (
              <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-lg p-3">
                <p className="text-sm text-[#D4AF37] font-medium">
                  Selecionadas ({perfuracoesSelecionadas.length}): {perfuracoesSelecionadas.join(", ")}
                </p>
              </div>
            )}
            
            {errors.piercings && <p className="text-red-400 text-sm">{errors.piercings}</p>}
          </div>

          {/* Menor de Idade */}
          <div className="bg-black/30 border border-[#D4AF37]/20 rounded-lg p-4 space-y-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.isMinor}
                onChange={(e) => updateFormData({ isMinor: e.target.checked })}
                className="w-5 h-5 rounded border-[#D4AF37] text-[#D4AF37] focus:ring-[#D4AF37] focus:ring-offset-black"
              />
              <span className="text-white font-medium">Sou menor de idade</span>
            </label>

            {formData.isMinor && (
              <div className="space-y-4 pt-2 border-t border-[#D4AF37]/20">
                {/* Nome do Responsável */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-white font-medium">
                    <Shield className="w-4 h-4 text-[#D4AF37]" />
                    Nome do Responsável
                  </label>
                  <input
                    type="text"
                    value={formData.guardianName || ""}
                    onChange={(e) => updateFormData({ guardianName: e.target.value })}
                    className="w-full bg-black/50 border border-[#D4AF37]/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                    placeholder="Nome do pai/mãe/responsável"
                  />
                  {errors.guardianName && <p className="text-red-400 text-sm">{errors.guardianName}</p>}
                </div>

                {/* Documento do Responsável */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-white font-medium">
                    <FileText className="w-4 h-4 text-[#D4AF37]" />
                    Documento do Responsável
                  </label>
                  <input
                    type="text"
                    value={formData.guardianDocument || ""}
                    onChange={(e) => updateFormData({ guardianDocument: e.target.value })}
                    className="w-full bg-black/50 border border-[#D4AF37]/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                    placeholder="RG ou CPF do responsável"
                  />
                  {errors.guardianDocument && <p className="text-red-400 text-sm">{errors.guardianDocument}</p>}
                </div>
              </div>
            )}
          </div>

          {/* Botão Continuar */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black font-bold text-lg py-4 px-8 rounded-xl shadow-2xl hover:shadow-[#D4AF37]/50 hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Continuar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
