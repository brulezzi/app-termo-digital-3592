"use client"

import { useState } from "react"
import { FormData } from "../page"
import { FileText, CheckCircle2 } from "lucide-react"

type TermsPageProps = {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
  onNext: () => void
}

export function TermsPage({ formData, updateFormData, onNext }: TermsPageProps) {
  const [error, setError] = useState("")

  const handleSubmit = () => {
    if (!formData.termsAccepted) {
      setError("Você precisa aceitar os termos para continuar")
      return
    }
    onNext()
  }

  return (
    <div className="min-h-screen flex flex-col px-6 py-8">
      <div className="w-full max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2 pb-4">
          <FileText className="w-12 h-12 text-[#D4AF37] mx-auto" />
          <h2 className="text-3xl font-bold text-[#D4AF37]">Termo de Responsabilidade</h2>
          <p className="text-gray-300">Leia atentamente antes de assinar</p>
        </div>

        {/* Conteúdo do Termo */}
        <div className="bg-black/40 border border-[#D4AF37]/30 rounded-xl p-6 space-y-6 max-h-[60vh] overflow-y-auto">
          <section className="space-y-3">
            <h3 className="text-xl font-bold text-[#D4AF37]">1. Descrição do Procedimento</h3>
            <p className="text-gray-300 leading-relaxed">
              O procedimento de perfuração corporal (piercing) consiste na abertura de um orifício na pele 
              utilizando material esterilizado e técnicas profissionais. O cliente está ciente de que este 
              é um procedimento invasivo que requer cuidados específicos.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-bold text-[#D4AF37]">2. Riscos Naturais</h3>
            <p className="text-gray-300 leading-relaxed">
              Todo procedimento de perfuração envolve riscos naturais, incluindo mas não limitado a: 
              vermelhidão temporária, inchaço, sensibilidade local, possibilidade de infecção (se não 
              seguir os cuidados), rejeição do organismo, queloides em pessoas predispostas, e reações 
              alérgicas a materiais específicos.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-bold text-[#D4AF37]">3. Responsabilidade do Cliente</h3>
            <p className="text-gray-300 leading-relaxed">
              O cliente declara estar ciente de que a cicatrização completa e adequada depende 
              exclusivamente dos cuidados diários realizados por ele. A Debby Piercing fornece todas 
              as orientações necessárias, mas não se responsabiliza por complicações decorrentes da 
              falta de higienização, uso de produtos inadequados, ou negligência nos cuidados.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-bold text-[#D4AF37]">4. Rejeição e Inflamação</h3>
            <p className="text-gray-300 leading-relaxed">
              Em casos raros, o organismo pode rejeitar o piercing. Sinais de inflamação grave 
              (pus, dor intensa, febre) devem ser comunicados imediatamente e podem requerer 
              acompanhamento médico. A Debby Piercing está disponível para orientações, mas não 
              substitui atendimento médico especializado.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-bold text-[#D4AF37]">5. Política de Retorno e Revisão</h3>
            <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-lg p-4 space-y-2">
              <p className="text-white font-semibold">Revisões e análises da joia são gratuitas em qualquer horário de funcionamento.</p>
              <p className="text-gray-300">
                Caso seja necessário atendimento extra, intervenção ou procedimento adicional, será 
                cobrado um valor informado na hora.
              </p>
              <p className="text-gray-300">
                Trocas de joia são permitidas apenas após 1 mês corrido da data da perfuração.
              </p>
              <p className="text-gray-300">
                A responsabilidade pela cicatrização total é do cliente e depende exclusivamente dos 
                cuidados diários.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-bold text-[#D4AF37]">6. Conferência da Joia</h3>
            <p className="text-gray-300 leading-relaxed">
              O cliente declara ter conferido a joia escolhida antes do procedimento e estar de acordo 
              com o material, tamanho e modelo selecionado.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-bold text-[#D4AF37]">7. Autorização para Menores</h3>
            <p className="text-gray-300 leading-relaxed">
              Para clientes menores de 18 anos, o responsável legal autoriza expressamente a realização 
              do procedimento e se compromete a auxiliar nos cuidados necessários durante todo o período 
              de cicatrização.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-bold text-[#D4AF37]">8. Declaração Final</h3>
            <p className="text-gray-300 leading-relaxed">
              Declaro que fui informado(a) sobre todos os riscos, cuidados e responsabilidades envolvidos 
              no procedimento. Estou ciente de que a Debby Piercing utiliza materiais esterilizados e 
              técnicas profissionais, e que seguirei rigorosamente todas as orientações de cuidados 
              fornecidas.
            </p>
          </section>
        </div>

        {/* Checkbox de Aceitação */}
        <div className="bg-black/30 border border-[#D4AF37]/20 rounded-lg p-5">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.termsAccepted}
              onChange={(e) => {
                updateFormData({ termsAccepted: e.target.checked })
                setError("")
              }}
              className="w-5 h-5 mt-1 rounded border-[#D4AF37] text-[#D4AF37] focus:ring-[#D4AF37] focus:ring-offset-black"
            />
            <span className="text-white leading-relaxed">
              Declaro que li, entendi e aceito todos os termos acima. Estou ciente dos riscos e 
              responsabilidades envolvidos no procedimento de piercing.
            </span>
          </label>
          {error && (
            <p className="text-red-400 text-sm mt-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
              {error}
            </p>
          )}
        </div>

        {/* Botão */}
        <div className="pt-2">
          <button
            onClick={handleSubmit}
            disabled={!formData.termsAccepted}
            className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black font-bold text-lg py-4 px-8 rounded-xl shadow-2xl hover:shadow-[#D4AF37]/50 hover:scale-105 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {formData.termsAccepted ? (
              <span className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Assinar Termo
              </span>
            ) : (
              "Aceite os termos para continuar"
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
