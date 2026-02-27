"use client"

import Image from "next/image"
import GooglePlayIcon from "../../public/images/icons/ic-google-play.png"
import HeroBanner from "../../public/images/background/hero-banner.png"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { WaveAnimation } from "./wave-animation"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden mb-0"
      style={{
        background:
          "linear-gradient(160deg, hsl(100 40% 96%) 0%, hsl(142 40% 92%) 40%, hsl(100 35% 94%) 70%, hsl(140 30% 96%) 100%)",
      }}
    >
      {/* Large soft background circles */}
      <div
        className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl"
        style={{ background: "hsl(142 52% 50%)" }}
      />
      <div
        className="absolute -bottom-20 right-10 h-[400px] w-[400px] rounded-full opacity-20 blur-3xl"
        style={{ background: "hsl(45 92% 60%)" }}
      />
      <div
        className="absolute top-1/3 right-1/4 h-[250px] w-[250px] rounded-full opacity-15 blur-2xl"
        style={{ background: "hsl(0 72% 55%)" }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-12 px-6 pt-28 pb-10 lg:flex-row lg:gap-20 lg:pt-32 lg:pb-16">
        {/* Left: Hero image */}
        <motion.div
          initial={{ opacity: 0, x: -50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative flex flex-1 justify-center lg:justify-start"
        >
          <div className="relative">
            <Image
              src={HeroBanner}
              alt="App Interface"
              width={650}
              height={640}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-auto w-full rounded-2xl object-cover"
              priority
            />

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6, ease: "backOut" }}
              className="absolute -bottom-2 -right-6 rounded-2xl border border-border bg-background/95 px-5 py-3 shadow-xl backdrop-blur-sm"
            >
              <p className="text-xs font-medium text-muted-foreground">Funciona</p>
              <p className="text-base font-bold text-primary">100% Offline</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Text content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >

          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            - Tecnología para el campo -
          </span>

          <h1 className="mb-6 font-sans text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance">
              Controla tu{" "}
              <span className="relative inline-block">
                cosecha
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.3, duration: 0.6, ease: "easeOut" }}
                  className="absolute -bottom-1 left-0 h-3 w-full origin-left rounded-sm opacity-25"
                  style={{ background: "hsl(var(--yellow))" }}
                />
              </span>{" "}
              de café con precisión.
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground lg:mx-0">
            Registro digital de tus recolecciones de café de manera rapida y a mantener una contabilidad
            precisa de tus gastos de una manera sencilla, al alcanze de un dispositivo que te ayuda a
            llevar un historia de tus recolecciones. Todo en una sola app.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 12px 30px -8px hsl(142 52% 32% / 0.35)" }}
              whileTap={{ scale: 0.97 }}
              href="https://play.google.com/store/apps/details?id=com.rojasdev.apprecconproject&hl=es_NI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl bg-[#4caf50] hover:bg-[#388e3c] px-8 py-4 text-base font-bold text-primary-foreground shadow-lg transition-shadow"
            >
              <Image
                src={GooglePlayIcon}
                alt="Google Play Store"
                width={24}
                height={24}
              />
              <div>
                <div className="text-xs text-left">
                  Get It On
                </div>
                <b> Google Play </b>
              </div>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 12px 30px -8px hsl(0 72% 44% / 0.3)" }}
              whileTap={{ scale: 0.97 }}
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-xl bg-[#e53935] hover:bg-[#c62828] px-8 py-4 text-base font-bold text-accent-foreground shadow-lg transition-shadow"
            >
              Registrarse
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        href="#funciones"
        className="absolute bottom-32 left-1/2 z-10 -translate-x-1/2 animate-bounce text-primary/50 transition-colors hover:text-primary"
        aria-label="Desplazar hacia abajo"
      >
        <ArrowDown className="h-6 w-6" />
      </motion.a>

      <WaveAnimation />
    </section>
  )
}
