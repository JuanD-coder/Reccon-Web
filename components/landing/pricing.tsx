"use client"

import { Check } from "lucide-react"
import { motion } from "framer-motion"

const plans = [
  {
    name: "RECCON Free",
    tagline: "Ideal para fincas pequenas",
    featured: false,
    features: [
      "Uso offline completo",
      "Registro basico de recolectores",
      "Generacion de informes Excel",
      "Control de productividad",
      "Historial de cosechas",
    ],
    cta: "Obtener version gratuita",
    href: "https://play.google.com/store",
  },
  {
    name: "RECCON Pro",
    tagline: "Para fincas grandes y administradores",
    featured: true,
    features: [
      "Todo lo de la version Free",
      "Almacenamiento en la nube",
      "Acceso desde cualquier dispositivo",
      "Control remoto de recolecciones",
      "Informes detallados avanzados",
      "Soporte prioritario",
    ],
    cta: "Actualizar a Pro",
    href: "https://play.google.com/store",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.15, ease: "easeOut" },
  }),
}

export function Pricing() {
  return (
    <section
      id="versiones"
      className="relative overflow-hidden py-20 lg:py-28"
      style={{
        background:
          "linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(100 30% 97%) 50%, hsl(0 0% 100%) 100%)",
      }}
    >
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Versiones
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">
              Elige el plan que mejor se adapte a tu finca
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            Comienza gratis y actualiza cuando tu operacion crezca. Sin
            compromisos, sin sorpresas.
          </p>
        </motion.div>

        <div className="grid items-center gap-8 md:grid-cols-2">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className={`relative overflow-hidden rounded-3xl border-2 p-8 transition-shadow lg:p-10 ${
                plan.featured
                  ? "border-accent bg-foreground shadow-2xl md:scale-105"
                  : "border-border bg-card shadow-lg hover:shadow-xl"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2">
                  <div
                    className="rounded-b-xl px-6 py-2 text-xs font-bold"
                    style={{
                      background: "hsl(var(--accent))",
                      color: "hsl(var(--accent-foreground))",
                    }}
                  >
                    Mas Popular
                  </div>
                </div>
              )}

              <div className="mb-1 mt-4 flex items-center gap-3">
                <div className={`h-3 w-3 rounded-full ${plan.featured ? "bg-accent" : "bg-primary"}`} />
                <h3 className={`text-2xl font-bold ${plan.featured ? "text-background" : "text-foreground"}`}>
                  {plan.name}
                </h3>
              </div>
              <p className={`mt-2 text-sm ${plan.featured ? "text-background/60" : "text-muted-foreground"}`}>
                {plan.tagline}
              </p>

              <div className={`my-8 h-px ${plan.featured ? "bg-background/15" : "bg-border"}`} />

              <ul className="mb-10 flex flex-col gap-4">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${
                        plan.featured ? "bg-primary" : "bg-primary/10"
                      }`}
                    >
                      <Check
                        className={`h-3 w-3 ${plan.featured ? "text-primary-foreground" : "text-primary"}`}
                      />
                    </div>
                    <span className={`text-sm ${plan.featured ? "text-background/85" : "text-foreground"}`}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <motion.a
                whileHover={{ scale: 1.02, boxShadow: "0 8px 24px -6px rgba(0,0,0,0.15)" }}
                whileTap={{ scale: 0.98 }}
                href={plan.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full rounded-xl py-4 text-center text-base font-bold transition-shadow ${
                  plan.featured
                    ? "bg-accent text-accent-foreground shadow-lg"
                    : "bg-primary text-primary-foreground shadow-md"
                }`}
              >
                {plan.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
