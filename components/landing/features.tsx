"use client"

import { Smartphone, WifiOff, BarChart3, FileSpreadsheet } from "lucide-react"
import { motion } from "framer-motion"
import { CoffeeBean, CoffeeLeaf, CoffeeCherries, CoffeeBasket } from "./coffee-elements"

const features = [
  {
    icon: Smartphone,
    title: "Registros digitales seguros",
    desc: "Anota cada recolección en segundos y evita perder información con el tiempo.",
    Decoration: CoffeeBean,
    gradient: "from-primary/8 to-primary/3",
  },
  {
    icon: WifiOff,
    title: "Diseñada para trabajar en campo",
    desc: "Registra datos aunque no haya señal. Todo se guarda en tu dispositivo.",
    Decoration: CoffeeLeaf,
    gradient: "from-primary/6 to-transparent",
  },
  {
    icon: BarChart3,
    title: "Cálculos automáticos al instante",
    desc: "Pagos precisos sin sumar a mano. Evita errores diarios.",
    Decoration: CoffeeCherries,
    gradient: "from-accent/5 to-transparent",
  },
  {
    icon: FileSpreadsheet,
    title: "Historial claro de producción",
    desc: "Genera reportes profesionales en Excel listos para compartir con socios o administradores.  -Consulta temporadas, compara resultados y toma decisiones con datos reales.",
    Decoration: CoffeeBasket,
    gradient: "from-primary/5 to-primary/2",
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
}

export function Features() {
  return (
    <section
      id="funciones"
      className="relative overflow-hidden py-8 lg:py-8"
      style={{
        background:
          "linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(100 30% 97%) 50%, hsl(0 0% 100%) 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mt-4 font-sans text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">
              Todo lo que necesitas para manejar tu cosecha
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            RECCON incluye todas las herramientas que un caficultor necesita
            para llevar el control de manera profesional.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {features.map((feature) => {
            const Icon = feature.icon
            const Deco = feature.Decoration
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.015,
                  transition: { duration: 0.3 },
                }}
                className={`group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${feature.gradient} bg-background p-8 shadow-md transition-shadow hover:shadow-xl lg:p-10`}
              >
                {/* Animated coffee decoration */}
                <Deco className="absolute right-5 top-5 h-10 w-10 opacity-30 transition-opacity duration-300 group-hover:opacity-55" />

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-md">
                  <Icon className="h-7 w-7 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-foreground lg:text-xl">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground lg:text-base">
                  {feature.desc}
                </p>

                {/* Bottom accent line on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-primary"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
