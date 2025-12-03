"use client"

import { Sparkles, Instagram, ShoppingBag, Star } from "lucide-react"

export function CrossSellPage() {
  const handleInstagram = () => {
    window.open("https://instagram.com/debbymodas.ofc", "_blank")
  }

  return (
    <div className="min-h-screen flex flex-col px-6 py-8">
      <div className="w-full max-w-2xl mx-auto space-y-6">
        {/* Header com Celebração */}
        <div className="text-center space-y-4 pb-4">
          <div className="flex justify-center gap-2">
            <Sparkles className="w-10 h-10 text-[#D4AF37] animate-pulse" />
            <Star className="w-12 h-12 text-[#D4AF37]" />
            <Sparkles className="w-10 h-10 text-[#D4AF37] animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37]">
            Bem-vindo(a) à Debby Piercing!
          </h2>
          <p className="text-gray-300 text-lg">
            Você agora faz parte da nossa família ✨
          </p>
        </div>

        {/* Mensagem Principal */}
        <div className="bg-gradient-to-br from-[#D4AF37]/20 to-[#F4D03F]/10 border-2 border-[#D4AF37]/50 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <ShoppingBag className="w-8 h-8 text-[#D4AF37]" />
            <h3 className="text-2xl font-bold text-white">Conheça a Debby Modas!</h3>
          </div>
          
          <p className="text-gray-200 text-center leading-relaxed">
            Clientes da Debby Piercing têm vantagens exclusivas na nossa loja de moda. 
            Conheça nossas coleções <span className="text-[#D4AF37] font-semibold">Plus</span> e{" "}
            <span className="text-[#D4AF37] font-semibold">Slim</span> com preços especiais!
          </p>

          <div className="bg-black/30 rounded-xl p-4 space-y-2">
            <p className="text-white font-semibold text-center">✨ Benefícios Exclusivos ✨</p>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
                Descontos especiais para clientes da Debby Piercing
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
                Coleções Plus e Slim com modelagem exclusiva
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
                Lançamentos e promoções em primeira mão
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
                Atendimento personalizado e consultoria de estilo
              </li>
            </ul>
          </div>
        </div>

        {/* Galeria de Destaques */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-black/40 border border-[#D4AF37]/30 rounded-xl p-4 text-center space-y-2">
            <div className="text-3xl">👗</div>
            <p className="text-white font-semibold">Moda Plus</p>
            <p className="text-gray-400 text-xs">Tamanhos especiais</p>
          </div>
          <div className="bg-black/40 border border-[#D4AF37]/30 rounded-xl p-4 text-center space-y-2">
            <div className="text-3xl">✨</div>
            <p className="text-white font-semibold">Moda Slim</p>
            <p className="text-gray-400 text-xs">Modelagem exclusiva</p>
          </div>
          <div className="bg-black/40 border border-[#D4AF37]/30 rounded-xl p-4 text-center space-y-2">
            <div className="text-3xl">💎</div>
            <p className="text-white font-semibold">Qualidade</p>
            <p className="text-gray-400 text-xs">Tecidos premium</p>
          </div>
          <div className="bg-black/40 border border-[#D4AF37]/30 rounded-xl p-4 text-center space-y-2">
            <div className="text-3xl">🎁</div>
            <p className="text-white font-semibold">Promoções</p>
            <p className="text-gray-400 text-xs">Ofertas exclusivas</p>
          </div>
        </div>

        {/* Botão Instagram */}
        <div className="pt-4 space-y-4">
          <button
            onClick={handleInstagram}
            className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black font-bold text-lg py-4 px-8 rounded-xl shadow-2xl hover:shadow-[#D4AF37]/50 hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center gap-3"
          >
            <Instagram className="w-6 h-6" />
            Seguir @debbymodas.ofc
          </button>

          {/* Informações Finais */}
          <div className="bg-black/30 border border-[#D4AF37]/20 rounded-xl p-5 space-y-3">
            <p className="text-center text-white font-semibold">
              💛 Obrigado por escolher a Debby Piercing!
            </p>
            <p className="text-center text-gray-300 text-sm">
              Siga nossos cuidados e aproveite seu novo piercing com segurança.
              Qualquer dúvida, estamos à disposição no WhatsApp!
            </p>
            <div className="text-center pt-2">
              <p className="text-[#D4AF37] font-semibold">📍 Campinas/SP</p>
              <p className="text-gray-400 text-sm">📱 (19) 98964-4538</p>
            </div>
          </div>
        </div>

        {/* Rodapé */}
        <div className="text-center pt-6 pb-4">
          <p className="text-gray-500 text-xs">
            Termo Digital © 2024 Debby Piercing - Todos os direitos reservados
          </p>
        </div>
      </div>
    </div>
  )
}
