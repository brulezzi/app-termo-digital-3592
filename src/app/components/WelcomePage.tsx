"use client"

import { Sparkles } from "lucide-react"

type WelcomePageProps = {
  onNext: () => void
}

export function WelcomePage({ onNext }: WelcomePageProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-md space-y-8 text-center">
        {/* Logo/Nome */}
        <div className="space-y-4">
          <div className="flex justify-center">
            <Sparkles className="w-16 h-16 text-[#D4AF37]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37] tracking-tight">
            Debby Piercing
          </h1>
        </div>

        {/* Título e Subtítulo */}
        <div className="space-y-3 pt-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Termo de Responsabilidade
          </h2>
          <p className="text-gray-300 text-lg">
            Preencha este termo obrigatório antes da sua perfuração.
          </p>
        </div>

        {/* Botão */}
        <div className="pt-8">
          <button
            onClick={onNext}
            className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black font-bold text-lg py-4 px-8 rounded-xl shadow-2xl hover:shadow-[#D4AF37]/50 hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Iniciar
          </button>
        </div>

        {/* Informação adicional */}
        <div className="pt-6">
          <p className="text-sm text-gray-400">
            Campinas/SP • Atendimento profissional
          </p>
        </div>
      </div>
    </div>
  )
}
