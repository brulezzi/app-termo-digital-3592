"use client"

import { useRef, useState, useEffect } from "react"
import { FormData } from "../page"
import { PenTool, Eraser, Check } from "lucide-react"

type SignaturePageProps = {
  formData: FormData
  saveFormData: (data: Partial<FormData>) => void
  onNext: () => void
  loading?: boolean
}

export function SignaturePage({ formData, saveFormData, onNext, loading }: SignaturePageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [hasSignature, setHasSignature] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Configurar canvas responsivo
    const resizeCanvas = () => {
      const container = canvas.parentElement
      if (!container) return
      
      canvas.width = container.clientWidth
      canvas.height = 300
      
      ctx.strokeStyle = "#D4AF37"
      ctx.lineWidth = 2
      ctx.lineCap = "round"
      ctx.lineJoin = "round"
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    return () => window.removeEventListener("resize", resizeCanvas)
  }, [])

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    setIsDrawing(true)
    
    const rect = canvas.getBoundingClientRect()
    const x = "touches" in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left
    const y = "touches" in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top

    ctx.beginPath()
    ctx.moveTo(x, y)
  }

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const rect = canvas.getBoundingClientRect()
    const x = "touches" in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left
    const y = "touches" in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top

    ctx.lineTo(x, y)
    ctx.stroke()
    setHasSignature(true)
  }

  const stopDrawing = () => {
    setIsDrawing(false)
  }

  const clearSignature = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    setHasSignature(false)
  }

  const saveSignature = () => {
    const canvas = canvasRef.current
    if (!canvas || !hasSignature) return

    const signatureData = canvas.toDataURL("image/png")
    saveFormData({ signature: signatureData })
  }

  return (
    <div className="min-h-screen flex flex-col px-6 py-8">
      <div className="w-full max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2 pb-4">
          <PenTool className="w-12 h-12 text-[#D4AF37] mx-auto" />
          <h2 className="text-3xl font-bold text-[#D4AF37]">Assinatura Digital</h2>
          <p className="text-gray-300">Assine com o dedo ou mouse na área abaixo</p>
        </div>

        {/* Informações do Cliente */}
        <div className="bg-black/40 border border-[#D4AF37]/30 rounded-xl p-5 space-y-2">
          <p className="text-white">
            <span className="text-[#D4AF37] font-semibold">Nome:</span> {formData.fullName}
          </p>
          <p className="text-white">
            <span className="text-[#D4AF37] font-semibold">Documento:</span> {formData.document}
          </p>
          <p className="text-white">
            <span className="text-[#D4AF37] font-semibold">Data:</span>{" "}
            {new Date().toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>

        {/* Área de Assinatura */}
        <div className="space-y-3">
          <div className="bg-black/40 border-2 border-[#D4AF37]/40 rounded-xl p-2">
            <canvas
              ref={canvasRef}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
              className="w-full bg-white/5 rounded-lg cursor-crosshair touch-none"
              style={{ height: "300px" }}
            />
          </div>

          {/* Botões de Controle */}
          <div className="flex gap-3">
            <button
              onClick={clearSignature}
              disabled={loading}
              className="flex-1 bg-black/50 border border-[#D4AF37]/30 text-white font-semibold py-3 px-6 rounded-lg hover:bg-black/70 hover:border-[#D4AF37]/50 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Eraser className="w-5 h-5" />
              Limpar
            </button>
          </div>
        </div>

        {/* Aviso */}
        {!hasSignature && (
          <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-lg p-4">
            <p className="text-gray-300 text-sm text-center">
              Desenhe sua assinatura na área dourada acima
            </p>
          </div>
        )}

        {/* Botão Finalizar */}
        <div className="pt-2">
          <button
            onClick={saveSignature}
            disabled={!hasSignature || loading}
            className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black font-bold text-lg py-4 px-8 rounded-xl shadow-2xl hover:shadow-[#D4AF37]/50 hover:scale-105 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
          >
            <Check className="w-5 h-5" />
            {loading ? "Salvando..." : hasSignature ? "Finalizar Termo" : "Assine para continuar"}
          </button>
        </div>
      </div>
    </div>
  )
}
