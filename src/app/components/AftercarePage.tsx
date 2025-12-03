"use client"

import { Heart, Droplet, Ban, Clock, CheckCircle2, Sparkles, Instagram, MessageCircle, Gift, RefreshCw, Star, Zap, TrendingUp } from "lucide-react"
import { FormData } from "../page"

type AftercarePageProps = {
  formData: FormData
  onNext: () => void
}

export function AftercarePage({ formData, onNext }: AftercarePageProps) {
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
    const message = `Olá! Sou ${formData.fullName}, tenho ${age} anos e acabei de assinar o termo de responsabilidade da Debby Piercing! 💛`
    window.open(`https://wa.me/5519988404390?text=${encodeURIComponent(message)}`, "_blank")
  }

  const handleDebbyModasWhatsApp = () => {
    window.open("https://wa.me/5519989644538?text=Olá! Vim da Debby Piercing e quero conhecer a Debby Modas! 💛", "_blank")
  }

  const handleDebbyModasInstagram = () => {
    window.open("https://instagram.com/debbymodas.ofc", "_blank")
  }

  const handleDebbyPiercingInstagram = () => {
    window.open("https://instagram.com/debbypiercing", "_blank")
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
      </div>

      <div className="w-full max-w-2xl mx-auto space-y-6 relative z-10">
        {/* Header com animação */}
        <div className="text-center space-y-2 pb-4 animate-fade-in">
          <Heart className="w-12 h-12 text-[#D4AF37] mx-auto animate-bounce" />
          <h2 className="text-3xl font-bold text-[#D4AF37] animate-pulse">Cuidados Obrigatórios</h2>
          <p className="text-gray-300">Siga rigorosamente para uma cicatrização perfeita</p>
        </div>

        {/* Mensagem de Sucesso com animação */}
        <div className="bg-gradient-to-r from-[#D4AF37]/20 to-[#F4D03F]/20 border border-[#D4AF37]/50 rounded-xl p-5 text-center animate-slide-up shadow-2xl hover:shadow-[#D4AF37]/30 transition-all duration-300">
          <CheckCircle2 className="w-10 h-10 text-[#D4AF37] mx-auto mb-3 animate-bounce" />
          <p className="text-white font-semibold text-lg">
            Termo assinado com sucesso!
          </p>
          <p className="text-gray-300 text-sm mt-2">
            Agora veja os cuidados essenciais para seu piercing
          </p>
        </div>

        {/* GANCHO EMOCIONAL FORTE - CUIDADOS com animação */}
        <div className="bg-gradient-to-br from-[#D4AF37]/30 via-[#F4D03F]/20 to-[#D4AF37]/30 border-2 border-[#D4AF37]/60 rounded-2xl p-6 text-center space-y-3 animate-slide-up shadow-2xl hover:scale-105 transition-all duration-500">
          <Sparkles className="w-10 h-10 text-[#D4AF37] mx-auto animate-spin-slow" />
          <h3 className="text-2xl font-bold text-white">
            Seu piercing merece todo o cuidado! 💛
          </h3>
          <p className="text-gray-200 leading-relaxed">
            Fizemos com carinho, agora é sua vez de cuidar! Siga cada passo abaixo e garanta uma cicatrização perfeita. 
            <span className="text-[#D4AF37] font-semibold"> Seu novo visual depende disso! ✨</span>
          </p>
        </div>

        {/* Cuidados com animações */}
        <div className="space-y-4">
          {/* Limpeza */}
          <div className="bg-black/40 border border-[#D4AF37]/30 rounded-xl p-5 space-y-3 hover:border-[#D4AF37]/60 hover:shadow-lg hover:shadow-[#D4AF37]/20 transition-all duration-300 animate-slide-up">
            <div className="flex items-start gap-3">
              <Droplet className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1 animate-pulse" />
              <div>
                <h3 className="text-white font-bold text-lg mb-2">Limpeza Diária</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Lave as mãos antes de tocar no piercing</li>
                  <li>• Limpe 2-3 vezes ao dia com soro fisiológico</li>
                  <li>• Use sabonete neutro durante o banho</li>
                  <li>• Seque delicadamente com papel toalha limpo</li>
                  <li>• Nunca use álcool, água oxigenada ou pomadas</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Restrições */}
          <div className="bg-black/40 border border-[#D4AF37]/30 rounded-xl p-5 space-y-3 hover:border-[#D4AF37]/60 hover:shadow-lg hover:shadow-[#D4AF37]/20 transition-all duration-300 animate-slide-up delay-100">
            <div className="flex items-start gap-3">
              <Ban className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1 animate-pulse" />
              <div>
                <h3 className="text-white font-bold text-lg mb-2">Evite por 1 Mês</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Piscina, praia, sauna e banheira</li>
                  <li>• Bebidas alcoólicas e cigarro</li>
                  <li>• Alimentos gordurosos e apimentados</li>
                  <li>• Chocolate, refrigerante e café em excesso</li>
                  <li>• Dormir em cima do piercing</li>
                  <li>• Trocar a joia antes do tempo</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tempo de Cicatrização - LADO A LADO */}
          <div className="bg-black/40 border border-[#D4AF37]/30 rounded-xl p-5 space-y-3 hover:border-[#D4AF37]/60 hover:shadow-lg hover:shadow-[#D4AF37]/20 transition-all duration-300 animate-slide-up delay-200">
            <div className="flex items-start gap-3">
              <Clock className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1 animate-pulse" />
              <div className="w-full">
                <h3 className="text-white font-bold text-lg mb-3">Tempo de Cicatrização</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-lg p-3 hover:bg-[#D4AF37]/20 hover:scale-105 transition-all duration-300">
                    <p className="text-white font-semibold text-center">1 mês</p>
                    <p className="text-gray-300 text-xs text-center mt-1">Restrição alimentar</p>
                  </div>
                  <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-lg p-3 hover:bg-[#D4AF37]/20 hover:scale-105 transition-all duration-300">
                    <p className="text-white font-semibold text-center">1 ano</p>
                    <p className="text-gray-300 text-xs text-center mt-1">Cicatrização completa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sinais de Alerta com animação */}
          <div className="bg-red-900/20 border border-red-500/40 rounded-xl p-5 hover:border-red-500/60 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 animate-slide-up delay-300">
            <h3 className="text-red-400 font-bold text-lg mb-3">⚠️ Procure Ajuda Se Notar:</h3>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li>• Vermelhidão intensa que não diminui</li>
              <li>• Inchaço excessivo após 48h</li>
              <li>• Dor pulsante ou latejante</li>
              <li>• Secreção amarelada ou esverdeada</li>
              <li>• Febre ou mal-estar geral</li>
              <li>• Sangramento que não para</li>
            </ul>
          </div>
        </div>

        {/* Contato Debby Piercing */}
        <div className="flex items-center justify-center gap-3 mt-6 animate-slide-up delay-400">
          <p className="text-center text-gray-400 text-sm">
            📱 (19) 98840-4390
          </p>
          <button
            onClick={handleDebbyPiercingInstagram}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold text-sm py-2 px-4 rounded-lg shadow-lg hover:shadow-pink-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <Instagram className="w-4 h-4" />
            @debbypiercing
          </button>
        </div>

        {/* SEÇÃO VOCÊ SABIA - ANIMADA E CHAMATIVA */}
        <div className="bg-gradient-to-br from-[#D4AF37]/30 via-[#F4D03F]/20 to-[#D4AF37]/30 border-2 border-[#D4AF37]/60 rounded-2xl p-8 space-y-5 mt-10 animate-slide-up delay-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#D4AF37]/40 transition-all duration-500">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Star className="w-10 h-10 text-[#D4AF37] animate-spin-slow" />
              <Gift className="w-14 h-14 text-[#D4AF37] animate-bounce" />
              <Star className="w-10 h-10 text-[#D4AF37] animate-spin-slow" />
            </div>
            <h3 className="text-3xl font-bold text-[#D4AF37] animate-pulse">Você Sabia? 🎁</h3>
            
            <div className="bg-gradient-to-r from-[#D4AF37]/20 to-[#F4D03F]/20 border-2 border-[#D4AF37]/40 rounded-xl p-6 space-y-4 hover:scale-105 transition-all duration-300">
              <p className="text-white text-lg leading-relaxed font-semibold">
                <Zap className="w-6 h-6 text-[#D4AF37] inline animate-pulse" />
                <span className="text-[#D4AF37]"> Clientes da Debby Piercing têm desconto especial</span> na Debby Modas! 
              </p>
              <p className="text-gray-200 text-base leading-relaxed">
                Somos uma <span className="text-white font-bold">família</span>! 💛 A Debby Modas oferece coleções exclusivas 
                <span className="text-[#D4AF37] font-semibold"> Plus</span> e{" "}
                <span className="text-[#D4AF37] font-semibold">Slim</span> com peças que vão valorizar ainda mais seu estilo único!
              </p>
              <div className="bg-black/30 rounded-lg p-4 border border-[#D4AF37]/30">
                <p className="text-white font-bold text-base mb-2">✨ Por que você vai amar:</p>
                <ul className="text-gray-200 text-sm space-y-2">
                  <li>• 🎯 Peças exclusivas e modernas</li>
                  <li>• 💎 Qualidade premium em cada detalhe</li>
                  <li>• 👗 Tamanhos Plus e Slim pensados para você</li>
                  <li>• 🔥 Desconto especial para clientes Debby Piercing</li>
                </ul>
              </div>
              <p className="text-[#D4AF37] font-bold text-lg flex items-center justify-center gap-2 animate-pulse">
                <TrendingUp className="w-6 h-6 animate-bounce" />
                Complete seu look com a gente! 💎✨
              </p>
            </div>
          </div>

          {/* Botões Debby Modas - MAIS CHAMATIVOS */}
          <div className="space-y-4 pt-3">
            <button
              onClick={handleDebbyModasWhatsApp}
              className="w-full bg-gradient-to-r from-green-500 via-green-600 to-green-500 text-white font-bold text-lg py-4 px-6 rounded-xl shadow-2xl hover:shadow-green-500/60 hover:scale-110 transition-all duration-300 flex items-center justify-center gap-3 animate-pulse-slow border-2 border-green-400/50"
            >
              <MessageCircle className="w-6 h-6 animate-bounce" />
              Falar no WhatsApp
            </button>
            <p className="text-center text-gray-300 text-sm font-semibold">📱 (19) 98964-4538</p>

            <button
              onClick={handleDebbyModasInstagram}
              className="w-full bg-gradient-to-r from-pink-500 via-purple-600 to-pink-500 text-white font-bold text-lg py-4 px-6 rounded-xl shadow-2xl hover:shadow-pink-500/60 hover:scale-110 transition-all duration-300 flex items-center justify-center gap-3 animate-pulse-slow border-2 border-pink-400/50"
            >
              <Instagram className="w-6 h-6 animate-spin-slow" />
              Seguir @debbymodas.ofc
            </button>
          </div>
        </div>

        {/* Botão para próxima página */}
        <div className="pt-6 animate-slide-up delay-600">
          <button
            onClick={onNext}
            className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black font-bold text-lg py-4 px-8 rounded-xl shadow-2xl hover:shadow-[#D4AF37]/50 hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center gap-3"
          >
            Continuar
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { 
            opacity: 0;
            transform: translateY(20px);
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
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-600 {
          animation-delay: 0.6s;
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
