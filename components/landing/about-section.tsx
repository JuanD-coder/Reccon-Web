"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"
import { FallingBeans, CoffeeLeaf } from "./coffee-elements"

export function AboutSection() {
  return (
    <section
      id="acerca"
      className="relative overflow-hidden py-20 lg:py-28"
      style={{
        background:
          "linear-gradient(160deg, hsl(100 30% 97%) 0%, hsl(142 35% 95%) 50%, hsl(100 28% 97%) 100%)",
      }}
    >
      {/* Background decorations */}
      <CoffeeLeaf className="absolute right-12 top-16 h-20 w-14 opacity-20" />
      <div
        className="absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full opacity-10 blur-3xl"
        style={{ background: "hsl(142 52% 40%)" }}
      />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Acerca de
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">Conoce RECCON</span>
          </h2>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="mb-6 font-serif text-2xl font-bold text-foreground lg:text-3xl">
              La herramienta digital para el caficultor colombiano
            </h3>
            <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
              <p>
                RECCON nacio de la necesidad real de los caficultores colombianos
                que cada dia luchan con el control manual de sus cosechas. Apuntes
                en papel, calculos a mano y la falta de un historial confiable
                generan perdidas y confusion.
              </p>
              <p>
                Nuestra aplicacion permite registrar recolectores, controlar kilos
                diarios, calcular pagos automaticamente y generar informes
                profesionales en Excel. Todo desde tu celular y sin necesidad de
                conexion a internet.
              </p>
              <p>
                Disenada especialmente para zonas rurales cafeteras, RECCON es
                facil de usar, confiable y ayuda a que cada cosecha sea mas
                organizada y rentable.
              </p>
            </div>

            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 12px 30px -8px hsl(142 52% 32% / 0.3)" }}
              whileTap={{ scale: 0.97 }}
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-lg transition-shadow"
            >
              Descargar ahora
            </motion.a>
          </motion.div>

          {/* Right: Video placeholder + falling beans animation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            {/* Falling beans "GIF" decoration next to video */}
            <FallingBeans className="absolute -left-12 top-1/2 hidden h-32 w-20 -translate-y-1/2 lg:block" />

            <div className="relative aspect-video overflow-hidden rounded-2xl shadow-xl">
              {/* Gradient background for video placeholder */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(142 52% 32% / 0.1) 0%, hsl(100 30% 90% / 0.6) 50%, hsl(45 92% 55% / 0.08) 100%)",
                }}
              />

              {/* Dot pattern */}
              <div className="absolute inset-0 opacity-[0.04]">
                <svg width="100%" height="100%" aria-hidden="true">
                  <defs>
                    <pattern id="about-dots" width="32" height="32" patternUnits="userSpaceOnUse">
                      <circle cx="16" cy="16" r="1.2" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#about-dots)" />
                </svg>
              </div>

              {/* Play button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-18 w-18 items-center justify-center rounded-full bg-primary shadow-xl ring-4 ring-primary/20 transition-shadow hover:ring-primary/35"
                  style={{ height: "72px", width: "72px" }}
                  aria-label="Reproducir video"
                >
                  <Play className="ml-1 h-8 w-8 text-primary-foreground" />
                </motion.button>
                <p className="text-sm font-medium text-muted-foreground">
                  Ver video de RECCON
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
