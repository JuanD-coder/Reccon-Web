"use client"

import { Check, Star, Zap } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Logo from "../../public/images/reccon_LOGO_Icon.svg"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "RECCON Free",
    tagline: "Esencial para el control diario",
    price: "Libre",
    featured: false,
    features: [
      "Funciona sin internet",
      "Planilla de recolección diaria",
      "Registro de kilos por persona",
      "Exportación básica a Excel",
      "Soporte por comunidad",
    ],
    cta: "Empezar Gratis",
    theme: {
      bg: "bg-emerald-50/40",
      border: "border-[#4caf50]",
      accent: "text-[#4caf50]",
      button: "border-2 border-[#4caf50] text-[#4caf50] hover:bg-[#4caf50] hover:text-white bg-transparent transition-all duration-300",
      iconBg: "bg-emerald-100 text-emerald-600",
      glow: "from-emerald-200/20 to-transparent"
    }
  },
  {
    name: "RECCON Pro",
    tagline: "Potencia para exportadoras y grandes fincas",
    price: "Premium",
    featured: true,
    features: [
      "Todo lo de la versión Finca",
      "Copia de seguridad en la nube",
      "Acceso desde múltiples celulares",
      "Liquidaciones y nómina avanzada",
      "Gráficas de cultivo y rentabilidad",
      "Atención preferencial 24/7",
    ],
    cta: "Obtener versión Pro",
    theme: {
      bg: "bg-amber-50/50",
      border: "border-amber-200",
      accent: "text-amber-700",
      button: "border-2 border-[#facc15] text-[#eab308] hover:bg-[#facc15] hover:text-emerald-950 bg-transparent shadow-none hover:shadow-lg hover:shadow-amber-200/20",
      iconBg: "bg-amber-100 text-amber-600",
      glow: "from-amber-300/30 to-transparent"
    }
  },
]

const CoffeeCherry = ({ size = 14, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Cuerpo de la cereza */}
    <ellipse cx="12" cy="12" rx="9" ry="10" fill="#ff0000" />
    {/* Brillo de luz de la cereza */}
    <ellipse cx="15" cy="8" rx="3" ry="4" fill="white" fillOpacity="0.3" />
    {/* Punto de la base */}
    <circle cx="12" cy="19" r="1.5" fill="#7f1d1d" />
  </svg>
)

export function Pricing() {
  return (
    <section id="versiones" className="relative overflow-hidden py-24 lg:py-32 bg-white">
      {/* Esferas ambientales sutiles (Sunlight style) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div
          className="absolute top-[10%] right-[10%] h-[500px] w-[500px] rounded-full opacity-[0.06] blur-[140px]"
          style={{ background: "radial-gradient(circle, #fcd34d 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[20%] left-[5%] h-[600px] w-[600px] rounded-full opacity-[0.04] blur-[150px]"
          style={{ background: "radial-gradient(circle, #34d399 0%, transparent 70%)" }}
        />
      </div>

      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-emerald-100"
          >
            <span>Escoge tu variedad</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-sans font-black text-slate-950 tracking-tighter leading-[0.9]">
            Diseñada para <br className="hidden md:block" />
            <span className="text-[#4caf50]">dar frutos</span>
          </h2>
          <p className="mt-6 text-slate-500 text-lg max-w-xl mx-auto font-medium">
            Elige el plan que mejor se adapte al tamaño de tu cosecha y empieza a digitalizar tu finca hoy mismo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative p-8 md:p-12 rounded-[2.8rem] border backdrop-blur-sm transition-all duration-500 group ${plan.theme.bg} ${plan.theme.border} ${plan.featured ? "shadow-2xl shadow-amber-200/20 ring-1 ring-amber-200/50" : "shadow-sm"
                }`}
            >
              {plan.featured && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-amber-400 text-emerald-950 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg flex items-center gap-2 border-2 border-white z-20 whitespace-nowrap">
                  <CoffeeCherry size={16} />
                  <span>Cosecha Recomendada</span>
                </div>
              )}

              {/* Contenedor interno con overflow-hidden para los brillos */}
              <div className="absolute inset-0 rounded-[2.8rem] overflow-hidden pointer-events-none">
                <div className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${plan.theme.glow} blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700`} />
              </div>

              <div className="mb-8">
                <h3 className="text-3xl font-sans font-black text-slate-950 mb-2 leading-none">
                  {plan.name}
                </h3>
                <p className="text-sm text-zinc-800 font-medium">
                  {plan.tagline}
                </p>
              </div>

              <div className="flex items-center justify-left gap-4 mb-10">
                {/* Logo icon styled like features */}
                <div className="h-20 w-20 flex-shrink-0 rounded-3xl flex items-center justify-center border border-red-100 bg-red-50 shadow-sm transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105">
                  <Image src={Logo} alt="RECCON Logo" width={52} height={52} />
                </div>

                <div>
                  <div className={`text-5xl font-sans font-black tracking-tighter ${plan.theme.accent}`}>
                    {plan.price}
                  </div>
                  <div className="text-[10px] font-black text-zinc-800 uppercase tracking-widest mt-2 leading-tight">
                    {plan.featured ? "Inversión para el crecimiento" : "Acceso de por vida"}
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-12">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-4">
                    <div className={`flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center ${plan.theme.iconBg}`}>
                      <Check size={14} strokeWidth={4} />
                    </div>
                    <span className="text-sm font-bold text-slate-700">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-5 rounded-2xl font-sans font-black text-lg transition-all shadow-xl shadow-transparent hover:shadow-current/20 ${plan.theme.button}`}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm font-medium">
            ¿Buscas una solución para tu asociación?
            <span className="text-[#4caf50] font-black ml-2 cursor-pointer hover:underline underline-offset-4">
              Hablemos de RECCON Enterprise
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
