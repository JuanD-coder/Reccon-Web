"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CoffeeCherries, CoffeeLeaf } from "./coffee-elements"

export function CTASection() {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      style={{
        background:
          "linear-gradient(160deg, hsl(142 52% 30%) 0%, hsl(142 48% 26%) 50%, hsl(150 40% 22%) 100%)",
      }}
    >
      {/* Background decorations */}
      <div
        className="absolute -right-20 -top-20 h-[350px] w-[350px] rounded-full opacity-10 blur-3xl"
        style={{ background: "hsl(45 92% 55%)" }}
      />
      <div
        className="absolute -left-16 bottom-0 h-[250px] w-[250px] rounded-full opacity-10 blur-3xl"
        style={{ background: "hsl(142 52% 60%)" }}
      />
      <CoffeeLeaf className="absolute right-10 top-10 h-24 w-16 opacity-10" />
      <CoffeeCherries className="absolute bottom-12 left-10 h-16 w-16 opacity-10" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-12 px-6 lg:flex-row lg:gap-16">
        {/* Phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative flex-shrink-0"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-64 w-32 overflow-hidden rounded-3xl border-4 border-primary-foreground/20 shadow-2xl sm:h-80 sm:w-40"
          >
            <Image
              src="/images/phone-mockup.jpg"
              alt="RECCON app en el celular"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-center lg:text-left"
        >
          <h2 className="mb-6 font-serif text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">
              Empieza a controlar tu cosecha hoy mismo
            </span>
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-base leading-relaxed text-primary-foreground/75 lg:mx-0 lg:text-lg">
            Unete a los caficultores que ya estan usando RECCON para
            organizar sus cosechas, calcular pagos y generar reportes.
            Descarga gratis ahora.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 12px 30px -8px hsl(45 92% 55% / 0.4)" }}
              whileTap={{ scale: 0.97 }}
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl px-8 py-4 text-base font-bold shadow-lg transition-shadow"
              style={{
                background: "hsl(var(--yellow))",
                color: "hsl(var(--yellow-foreground))",
              }}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333L13.5 12.707zM5.864 2.658L16.8 8.99l-2.302 2.302L6.863 2.658zM18.008 9.89l2.992 1.736-2.992 1.735L15.214 12l2.794-2.11z" />
              </svg>
              Descargar en Google Play
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-primary-foreground/30 px-8 py-4 text-base font-bold text-primary-foreground transition-colors hover:border-primary-foreground/60"
            >
              Contactanos
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
