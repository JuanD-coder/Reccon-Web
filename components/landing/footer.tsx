"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Logo from "../../public/images/reccon_LOGO_Icon.svg"

// Reutilizamos los iconos de redes sociales de la sección Acerca de
import IconFb from "../../public/images/icons/about/ic-facebook.png"
import IconTik from "../../public/images/icons/about/ic.tik.png"
import IconWa from "../../public/images/icons/about/ic-whatssapp.png"

const socialLinks = [
  { name: "Facebook", icon: IconFb, href: "https://www.facebook.com/profile.php?id=61550862172662&mibextid=ZbWKwL" },
  { name: "TikTok", icon: IconTik, href: "https://www.tiktok.com/@reccon242?_t=8mvIlQREAPF&_r=1" },
  { name: "WhatsApp", icon: IconWa, href: "https://wa.me/573170157414" },
]

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden pt-12 pb-10"
      style={{
        background: "linear-gradient(160deg, hsl(100 40% 96%) 0%, hsl(142 40% 92%) 40%, hsl(100 35% 94%) 70%, hsl(140 30% 96%) 100%)"
      }}
    >
      {/* Elementos decorativos de fondo estilo Hero */}
      <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "hsl(142 52% 50%)" }} />
      <div className="absolute -bottom-20 right-10 h-[400px] w-[400px] rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "hsl(45 92% 60%)" }} />
      <div className="absolute top-1/3 right-1/4 h-[250px] w-[250px] rounded-full opacity-10 blur-2xl pointer-events-none"
        style={{ background: "hsl(0 72% 55%)" }} />

      <div className="mx-auto max-w-6xl px-6 relative z-10">

        {/* Main Footer Content: Identidad + Redes */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 mb-12">

          {/* Brand & Mission Text */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg">
            <a href="#hero" className="flex items-center gap-3 mb-5 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
                className="h-12 w-12 flex items-center justify-center bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-2.5 border border-slate-100"
              >
                <Image src={Logo} alt="RECCON" className="w-full h-full object-contain" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-[0.05em] text-slate-950 leading-none">RECCON</span>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-600">Recoleccion y Contabilidad</span>
              </div>
            </a>
            <p className="text-black text-base leading-relaxed">
              Transformamos la recolección y contabilidad de tu finca con tecnología sencilla y robusta,
              diseñada para que el campo colombiano nunca deje de crecer.
            </p>
          </div>

          {/* Social Icons List */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="h-11 w-11 rounded-xl bg-brand border border-slate-200 flex items-center justify-center shadow-lg shadow-slate-200/30 hover:border-brand/30 transition-all"
              >
                <div className="relative h-5 w-5">
                  <Image
                    src={social.icon}
                    alt={social.name}
                    fill
                    className="object-contain"
                    sizes="20px"
                  />
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Status */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row-reverse items-center justify-between gap-6">
          <div className="text-center md:text-right">
            <p className="text-slate-900 font-bold text-sm tracking-tight">
              &copy; {new Date().getFullYear()} RECCON. Todos los derechos reservados.
            </p>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 mt-1">
              Hecho con <span className="text-red-500">❤</span> en el Eje Cafetero
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
