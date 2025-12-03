"use client"

import { Heart, MessageCircle, RefreshCw, Sparkles, Star } from "lucide-react"
import { FormData } from "../page"

type ThankYouPageProps = {
  formData: FormData
}

export function ThankYouPage({ formData }: ThankYouPageProps) {
  // Calcular idade a partir da data de nascimento
  const calculateAge = (birthDate: string) => {
    const [day, month, year] = birthDate.split("/")
    const birth = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
    const today = new Date()
    let age = today.getFullYear() - birth.getFullYear()
    const monthDiff = today.getMonth() - birth.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--
    }
    return age
  }

  const handleWhatsAppConfirmation = () => {
    const age = calculateAge(formData.birthDate)
    
    // Formatar perfurações selecionadas
    const perfuracoesTexto = formData.authorizedPiercings && formData.authorizedPiercings.length > 0
      ? `\n\n💎 Perfurações escolhidas:\n${formData.authorizedPiercings.map(p => `• ${p}`).join('\n')}`
      : ''
    
    const message = `Olá! Sou ${formData.fullName}, tenho ${age} anos e acabei de assinar o termo de responsabilidade da Debby Piercing! 💛${perfuracoesTexto}`
    
    window.open(`https://wa.me/5519988404390?text=${encodeURIComponent(message)}`, "_blank")
  }

  const handleNewTerm = () => {
    window.location.reload()
  }

  return (
    <div className="min-h-screen flex flex-col px-6 py-8 relative overflow-hidden">
      {/* Animações de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-40 h-40 bg-[#F4D03F]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-[#D4AF37]/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-36 h-36 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="w-full max-w-2xl mx-auto space-y-8 relative z-10 flex flex-col items-center justify-center min-h-[80vh]">
        {/* PÁGINA DE OBRIGADO COM GATILHO EMOCIONAL FORTE */}
        <div className="bg-gradient-to-br from-black/60 via-[#D4AF37]/20 to-black/60 border-2 border-[#D4AF37]/50 rounded-3xl p-10 text-center space-y-6 animate-slide-up shadow-2xl hover:scale-105 hover:shadow-[#D4AF37]/40 transition-all duration-500 w-full">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Star className="w-12 h-12 text-[#D4AF37] animate-spin-slow" />
            <Heart className="w-20 h-20 text-[#D4AF37] animate-pulse" />
            <Star className="w-12 h-12 text-[#D4AF37] animate-spin-slow" />
          </div>
          
          <Sparkles className="w-16 h-16 text-[#F4D03F] mx-auto animate-bounce" />
          
          <h1 className="text-4xl md:text-5xl font-bold text-white animate-pulse">
            Obrigada por confiar em nós! 💛
          </h1>
          
          <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-2xl p-6 space-y-4">
            <p className="text-gray-100 text-lg leading-relaxed">
              Seu piercing foi feito com todo o <span className="text-[#D4AF37] font-bold text-xl">amor e dedicação</span> que você merece. 
            </p>
            <p className="text-white font-semibold text-xl">
              🎉 Agora você faz parte da nossa família! ✨
            </p>
            <p className="text-gray-200 text-base leading-relaxed">
              Siga os cuidados com carinho e aproveite sua nova joia! Estamos sempre aqui para você.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#D4AF37]/20 to-[#F4D03F]/20 border border-[#D4AF37]/40 rounded-xl p-5">
            <p className="text-[#D4AF37] font-bold text-xl animate-pulse">
              💫 Qualquer dúvida, é só chamar! 🫶
            </p>
            <p className="text-gray-300 text-sm mt-2">
              Estamos prontos para te ajudar no que precisar
            </p>
          </div>
        </div>

        {/* BOTÃO WHATSAPP - CONFIRMAR NO WHATSAPP */}
        <div className="w-full space-y-4 animate-slide-up delay-300">
          <button
            onClick={handleWhatsAppConfirmation}
            className="w-full bg-gradient-to-r from-green-500 via-green-600 to-green-500 text-white font-bold text-xl py-5 px-8 rounded-2xl shadow-2xl hover:shadow-green-500/60 hover:scale-110 transition-all duration-300 ease-in-out flex items-center justify-center gap-4 animate-pulse-slow border-2 border-green-400/50"
          >
            <MessageCircle className="w-7 h-7 animate-bounce" />
            Confirmar no WhatsApp
          </button>
          <p className="text-center text-gray-400 text-sm">
            📱 Envie uma mensagem confirmando seu termo
          </p>
        </div>

        {/* BOTÃO PREENCHER NOVO TERMO */}
        <div className="w-full pt-6 animate-slide-up delay-500">
          <button
            onClick={handleNewTerm}
            className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black font-bold text-lg py-4 px-8 rounded-xl shadow-2xl hover:shadow-[#D4AF37]/50 hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center gap-3"
          >
            <RefreshCw className="w-6 h-6" />
            Preencher Novo Termo
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-700 {
          animation-delay: 0.7s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  )
}
