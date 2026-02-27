"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import PaperImg from "../../public/images/background/problem-paper.png"
import CalcImg from "../../public/images/background/problem-calc.png"
import HistoryImg from "../../public/images/background/problem-history.png"
import LossesImg from "../../public/images/background/problem-losses.png"

const problems = [
  {
    emoji: "📒",
    image: PaperImg,
    title: "Registros en papel",
    desc: "Apuntes que se pierden, se mojan o se dañan con el tiempo, dejando información incompleta.",
    accent: "hsl(30 85% 55%)",
    accentBg: "hsl(30 85% 55% / 0.08)",
  },
  {
    emoji: "🧮",
    image: CalcImg,
    title: "Cálculos manuales",
    desc: "Sumas hechas a mano que pueden generar errores en los pagos a recolectores.",
    accent: "hsl(0 72% 52%)",
    accentBg: "hsl(0 72% 52% / 0.07)",
  },
  {
    emoji: "📉",
    image: HistoryImg,
    title: "Falta de historial",
    desc: "Sin un registro organizado, es difícil comparar temporadas o analizar productividad.",
    accent: "hsl(220 70% 52%)",
    accentBg: "hsl(220 70% 52% / 0.07)",
  },
  {
    emoji: "💸",
    image: LossesImg,
    title: "Pérdidas silenciosas",
    desc: "Pequeños errores diarios que terminan afectando las ganancias de toda la cosecha.",
    accent: "hsl(0 72% 45%)",
    accentBg: "hsl(0 72% 45% / 0.08)",
  },
]


export function ProblemSection() {
  return (
    <section
      id="problema"
      className="relative overflow-hidden py-8 lg:py-8"
      style={{
        background:
          "linear-gradient(170deg, hsl(0 0% 100%) 0%, hsl(30 40% 97%) 40%, hsl(0 30% 97%) 70%, hsl(0 0% 100%) 100%)",
      }}
    >
      {/* Subtle background blobs */}
      <div
        className="pointer-events-none absolute -top-20 -right-20 h-[380px] w-[380px] rounded-full opacity-[0.07] blur-3xl"
        style={{ background: "hsl(0 72% 50%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-16 h-[280px] w-[280px] rounded-full opacity-[0.06] blur-3xl"
        style={{ background: "hsl(30 85% 55%)" }}
      />

      {/* Faint grid pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
        <svg width="100%" height="100%" aria-hidden="true">
          <defs>
            <pattern id="problem-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#problem-grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="mb-8 text-center"
        >
          <h2 className="mt-4 font-sans text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">
              En la cosecha, cada kilo cuenta.{" "}
              <span
                className="relative inline-block"
                style={{ color: "hsl(0 72% 44%)" }}
              >
                Cada error también.
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                  className="absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full"
                  style={{ background: "hsl(0 72% 44% / 0.35)" }}
                />
              </span>
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            Así trabaja hoy la mayoría de caficultores. Cada uno de estos problemas
            tiene un costo real al final de la temporada.
          </p>
        </motion.div>

        {/* Unified problem panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl"
          style={{
            background: "linear-gradient(135deg, hsl(0 60% 97%) 0%, hsl(30 50% 96%) 50%, hsl(0 50% 97%) 100%)",
            border: "1px solid hsl(0 72% 52% / 0.12)",
            boxShadow: "0 4px 32px hsl(0 72% 52% / 0.06), 0 1px 4px hsl(0 0% 0% / 0.04)",
          }}
        >
          {/* Subtle top stripe */}
          <div
            className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl"
            style={{ background: "linear-gradient(90deg, hsl(30 85% 55%), hsl(0 72% 52%), hsl(30 85% 55%))" }}
          />


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map((problem, i) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
                className="group relative flex flex-col overflow-hidden"
                style={{
                  borderRight: i < problems.length - 1 ? "1px solid hsl(0 72% 52% / 0.1)" : undefined,
                }}
              >
                {/* Image header with integrated title */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={problem.image}
                    alt={problem.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Blurred text protection layer */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-[2px]" />

                  {/* Emoji & Title Overlay */}
                  <div className="absolute bottom-5 left-6 flex items-center gap-2">
                    <motion.span
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.2, rotate: -8 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="text-3xl select-none drop-shadow-md"
                      aria-hidden="true"
                    >
                      {problem.emoji}
                    </motion.span>
                    <h3 className="text-lg font-bold leading-tight text-white drop-shadow-md">
                      {problem.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="relative flex flex-col gap-4 px-7 py-4">
                  {/* Hover background fill */}
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: problem.accentBg }}
                  />

                  {/* Accent line */}
                  <motion.div
                    className="relative h-[2px] w-10 rounded-full origin-left"
                    initial={{ scaleX: 1 }}
                    whileHover={{ scaleX: 2 }}
                    transition={{ duration: 0.3 }}
                    style={{ background: problem.accent }}
                  />

                  {/* Description */}
                  <p className="relative text-sm leading-relaxed text-muted-foreground">
                    {problem.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* Closing phrase */}

        {/* Quote pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mx-auto mt-12 flex w-fit items-center justify-center gap-3 rounded-full px-8 py-3 backdrop-blur-sm"
          style={{
            background: "hsl(0 0% 100% / 0.12)",
            border: "1px solid hsl(1 0% 0% / 1)",
          }}
        >
          <span className="text-lg">🌿</span>
          <p className="text-center text-sm font-medium text-foreground lg:text-base">
            El campo ya trabaja duro.{" "}
            <span className="font-bold" style={{ color: "hsl(35 92% 70%)" }}>
              El control no debería complicarlo.
            </span>
          </p>
          <span className="text-lg">🌿</span>
        </motion.div>

      </div>
    </section>
  )
}
