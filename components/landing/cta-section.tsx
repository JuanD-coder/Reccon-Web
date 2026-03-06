"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MessageCircle, ShieldCheck, Zap } from "lucide-react"

import GooglePlayIcon from "../../public/images/icons/ic-google-play.png"
import CtaScreenshot from "../../public/images/background/cta-screenshot.png"

export function CTASection() {
  return (
    <section
      id="descarga"
      className="relative overflow-hidden py-24 lg:py-32"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, hsl(142 30% 98%) 50%, #ffffff 100%)"
      }}
    >
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div
          className="relative overflow-hidden rounded-[3rem] bg-slate-950 border border-white/5 shadow-[0_32px_80px_-20px_rgba(76,175,80,0.2)] lg:p-20 p-10 group"
          style={{
            background: "linear-gradient(145deg, #0f1c12 0%, #050a06 100%)"
          }}
        >
          {/* Orbs de fondo Antigravity */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/20 rounded-full blur-[140px] -mr-80 -mt-80 opacity-60" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#facc15]/10 rounded-full blur-[100px] -ml-40 -mb-40 opacity-40" />

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">

            {/* Contenido de Texto */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-brand text-xs font-black uppercase tracking-widest mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
                </span>
                Disponible ahora en Google Play
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-7xl font-sans font-black text-white leading-[1.05] mb-8 tracking-tighter">
                Transforma tu <br />
                <span className="text-brand italic">finca hoy.</span>
              </h2>

              <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-lg">
                Únete a la nueva generación de caficultores digitales. <strong className="text-white">Gratis, 100% offline</strong> y diseñada para el corazón del campo.
              </p>

              <div className="flex flex-wrap gap-5">
                <motion.a
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://play.google.com/store/apps/details?id=com.rojasdev.apprecconproject&hl=es_NI"
                  target="_blank"
                  className="bg-brand hover:bg-[#43a047] text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center gap-3 shadow-2xl shadow-brand/30 transition-all duration-300"
                >
                  <Image
                    src={GooglePlayIcon}
                    alt="Google Play Store"
                    width={24}
                    height={24}
                  />
                  <span>Descargar App</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contacto"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/10 backdrop-blur-xl px-10 py-5 rounded-2xl font-black text-lg flex items-center gap-3 transition-all duration-300"
                >
                  <MessageCircle size={24} />
                  <span>Soporte</span>
                </motion.a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 flex flex-wrap gap-8 items-center border-t border-white/10 pt-10">
                <div className="flex items-center gap-3 text-white/60 font-bold text-sm">
                  <ShieldCheck className="text-brand" size={20} />
                  <span>Datos 100% Privados</span>
                </div>
                <div className="flex items-center gap-3 text-white/60 font-bold text-sm">
                  <Zap className="text-[#facc15]" size={20} />
                  <span>Uso Ultra Veloz</span>
                </div>
              </div>
            </motion.div>

            {/* Visual: Premium Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
              className="relative lg:block hidden"
            >
              <div className="relative mx-auto w-[320px] h-[640px] bg-slate-900 rounded-[3.5rem] border-[10px] border-slate-800 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-8 bg-slate-800 rounded-b-3xl z-20" /> {/* Notch */}
                <Image
                  src={CtaScreenshot}
                  alt="App Interface"
                  fill
                  className="object-cover opacity-80 group-hover:scale-110 transition-transform duration-1000"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
