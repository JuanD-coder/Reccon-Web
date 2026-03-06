"use client"

import { Smartphone, WifiOff, BarChart3, FileSpreadsheet } from "lucide-react"
import { motion } from "framer-motion"
import { CoffeeBean, CoffeeLeaf, CoffeeCherries, CoffeeBasket } from "./coffee-elements"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Smartphone,
    title: "Registros Digitales",
    desc: "Anota tus recolecciones en segundos directamente desde el celular. Olvida los cuadernos perdidos y la letra ilegible.",
    Decoration: CoffeeBean,
    color: "emerald",
    highlight: "Sencillo y rápido"
  },
  {
    icon: WifiOff,
    title: "Funciona sin Internet",
    desc: "En el campo la señal falla, pero RECCON no. Registra todo offline y la app sincroniza cuando vuelvas a tener señal.",
    Decoration: CoffeeLeaf,
    color: "amber",
    highlight: "Para el campo"
  },
  {
    icon: BarChart3,
    title: "Cuentas Claras",
    desc: "El sistema suma los kilos y calcula los pagos de cada recolector automáticamente. Sin calculadoras, sin errores.",
    Decoration: CoffeeCherries,
    color: "red",
    highlight: "Cero errores"
  },
  {
    icon: FileSpreadsheet,
    title: "Reportes en Excel",
    desc: "Exporta bitácoras profesionales con un toque. Ideal para compartir con socios o llevar tu propia administración.",
    Decoration: CoffeeBasket,
    color: "primary",
    highlight: "Profesional"
  },
]

export function Features() {
  return (
    <section
      id="funciones"
      className="relative overflow-hidden pt-12 pb-24 lg:pb-32 bg-white"
    >
      {/* Esferas de color extremadamente sutiles para dar continuidad cromática sin quitar el protagonismo al blanco */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Derecha Arriba */}
        <div
          className="absolute -top-[10%] -right-[5%] h-[500px] w-[500px] rounded-full opacity-[0.04] blur-[120px]"
          style={{ background: "hsl(142 52% 40%)" }}
        />
        {/* Izquierda Medio */}
        <div
          className="absolute top-[40%] -left-[10%] h-[400px] w-[400px] rounded-full opacity-[0.03] blur-[100px]"
          style={{ background: "hsl(45 92% 55%)" }}
        />
        {/* Derecha Abajo */}
        <div
          className="absolute -bottom-[10%] right-[10%] h-[450px] w-[450px] rounded-full opacity-[0.02] blur-[110px]"
          style={{ background: "hsl(0 72% 50%)" }}
        />
      </div>

      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-1 w-8 rounded-full bg-emerald-600" />
            <span className="text-sm font-black tracking-[0.2em] text-emerald-800 uppercase">
              Funcionalidades
            </span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-sans text-4xl font-black tracking-tight text-black md:text-5xl lg:text-6xl max-w-2xl"
            >
              Tecnología diseñada <br className="hidden sm:block" />
              <span className="text-brand italic">para el caficultor.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-slate-600 max-w-md leading-relaxed"
            >
              No necesitas ser un experto en tecnología. RECCON es tan intuitivo como usar WhatsApp, pero creado para el éxito de tu finca.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature, index }: { feature: any, index: number }) {
  const Icon = feature.icon
  const Deco = feature.Decoration

  const colorStyles: Record<string, { bg: string, icon: string, border: string, light: string }> = {
    emerald: {
      bg: "bg-emerald-50",
      icon: "text-emerald-600",
      border: "border-emerald-100",
      light: "bg-emerald-400/10"
    },
    amber: {
      bg: "bg-amber-50",
      icon: "text-amber-600",
      border: "border-amber-100",
      light: "bg-amber-400/10"
    },
    red: {
      bg: "bg-red-50",
      icon: "text-red-600",
      border: "border-red-100",
      light: "bg-red-400/10"
    },
    primary: {
      bg: "bg-green-50",
      icon: "text-primary",
      border: "border-green-100",
      light: "bg-primary/10"
    },
  }

  const styles = colorStyles[feature.color] || colorStyles.primary

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative bg-white rounded-[2.5rem] p-8 lg:p-10 border border-slate-200/60 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 hover:border-emerald-200/50"
    >
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start justify-between mb-8">
          <div className={cn(
            "h-20 w-20 rounded-3xl flex items-center justify-center border transition-all duration-700 group-hover:scale-110 group-hover:rotate-6",
            styles.bg, styles.border
          )}>
            <div className={cn("p-4 rounded-2xl", styles.light)}>
              <Icon className={cn("h-8 w-8", styles.icon)} />
            </div>
          </div>

          <span className="px-5 py-2 rounded-xl bg-slate-50 text-[11px] font-black uppercase tracking-[0.15em] text-slate-500 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors border border-slate-100">
            {feature.highlight}
          </span>
        </div>

        <h3 className="text-3xl font-bold text-slate-900 mb-4 font-sans tracking-tight">
          {feature.title}
        </h3>

        <p className="text-slate-600 leading-relaxed text-lg mb-8 max-w-[320px]">
          {feature.desc}
        </p>

        <div className="mt-auto flex items-center gap-2 text-sm font-bold text-emerald-700 group-hover:translate-x-1 transition-transform">
          <div className="h-2 w-2 rounded-full bg-emerald-600" />
          <span>Ver detalle</span>
        </div>
      </div>

      {/* Decoración ambiental sutil */}
      <div className="absolute top-10 right-10 pointer-events-none opacity-[0.04] transition-all duration-1000 group-hover:opacity-10 group-hover:scale-125 group-hover:rotate-12 translate-x-4">
        <Deco className="w-32 h-32" />
      </div>
    </motion.div>
  )
}
