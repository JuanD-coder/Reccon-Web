"use client"

import { motion } from "framer-motion"
import { Share2, Heart, Shield, ChevronLeft, ChevronRight, Trophy, GraduationCap, Lightbulb, Award } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

import IconFb from "../../public/images/icons/about/ic-facebook.png"
import IconTik from "../../public/images/icons/about/ic.tik.png"
import IconWa from "../../public/images/icons/about/ic-whatssapp.png"

const milestones = [
  {
    id: 1,
    title: "Génesis de la Idea",
    description: "Todo comenzó con una visión: digitalizar el campo colombiano para empoderar al caficultor.",
    icon: Lightbulb,
    color: "from-amber-400 to-orange-500",
    label: "El Comienzo",
    image: "https://images.unsplash.com/photo-1500353391678-d7b57979d6d2?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Semillero de Innovación",
    description: "Entramos a un semillero de investigación donde validamos la estructura técnica de RECCON.",
    icon: GraduationCap,
    color: "from-blue-400 to-indigo-600",
    label: "Crecimiento",
    image: "https://images.unsplash.com/photo-1523050853023-8c2d27443ef8?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Clasificación Internacional",
    description: "Participamos en el XXV Encuentro Nacional y XIX Internacional de Semilleros de Investigación (RedCOLSI), logrando la clasificación a nivel internacional.",
    icon: Trophy,
    color: "from-yellow-400 to-amber-600",
    label: "RedCOLSI",
    image: "https://images.unsplash.com/photo-1578571060002-3f898305608b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Orgullo Huilense",
    description: "Obtuvimos el 2do lugar en Emprenfest, la feria de emprendimiento de la Gobernación del Huila, consolidándonos como un motor regional.",
    icon: Award,
    color: "from-emerald-400 to-teal-600",
    label: "Emprenfest",
    image: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=1000&auto=format&fit=crop"
  }
];

export function AboutSection() {
  const [activeStep, setActiveStep] = useState(0)

  const nextStep = () => setActiveStep((prev) => (prev + 1) % milestones.length)
  const prevStep = () => setActiveStep((prev) => (prev - 1 + milestones.length) % milestones.length)

  const socialLinks = [
    {
      name: "Facebook",
      icon: IconFb,
      color: "bg-[#1877F2]",
      hover: "hover:bg-[#1877F2]/90",
      href: "https://www.facebook.com/profile.php?id=61550862172662&mibextid=ZbWKwL",
    },
    {
      name: "Tik Tok",
      icon: IconTik,
      color: "bg-[#000000]",
      hover: "hover:bg-slate-900",
      href: "https://www.tiktok.com/@reccon242?_t=8mvIlQREAPF&_r=1",
    },
    {
      name: "WhatsApp",
      icon: IconWa,
      color: "bg-[#25D366]",
      hover: "hover:bg-[#25D366]/90",
      href: "https://wa.me/573170157414?text=Hola%20quiero%20m%C3%A1s%20informaci%C3%B3n",
    }
  ]

  return (
    <section
      id="acerca"
      className="relative overflow-hidden py-24 lg:py-32"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, hsl(142 30% 96%) 50%, #ffffff 100%)"
      }}
    >
      {/* Background Orbs con suavidad Antigravity */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div
          className="absolute -top-[10%] -right-[5%] h-[600px] w-[600px] rounded-full opacity-[0.05] blur-[120px]"
          style={{ background: "hsl(var(--brand))" }}
        />
        <div
          className="absolute top-[40%] -left-[10%] h-[500px] w-[500px] rounded-full opacity-[0.04] blur-[100px]"
          style={{ background: "#facc15" }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">

          {/* Columna Izquierda: Trayectoria Carrusel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-square max-w-[500px] mx-auto rounded-[3rem] shadow-2xl shadow-brand/10 border border-white/50 bg-white p-4 group">

              <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] bg-slate-950 flex flex-col items-center justify-center p-8 text-center">

                {/* Imagen de Fondo del Carrusel con transiciones */}
                <motion.div
                  key={`bg-${activeStep}`}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 0.4, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${milestones[activeStep].image}')` }}
                />

                {/* Overlays de legibilidad */}
                <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/40 to-slate-950" />

                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "backOut" }}
                  className="relative z-10 flex flex-col items-center"
                >
                  <div className={`mb-6 h-20 w-20 rounded-3xl bg-gradient-to-br ${milestones[activeStep].color} flex items-center justify-center text-white shadow-2xl shadow-current/20`}>
                    {(() => {
                      const Icon = milestones[activeStep].icon
                      return <Icon size={40} strokeWidth={1.5} />
                    })()}
                  </div>

                  <span className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-brand">
                    {milestones[activeStep].label}
                  </span>

                  <h4 className="mb-4 text-2xl font-black text-white leading-tight">
                    {milestones[activeStep].title}
                  </h4>

                  <p className="text-slate-400 text-base leading-relaxed max-w-[320px]">
                    {milestones[activeStep].description}
                  </p>
                </motion.div>

                {/* Navigation Controls */}
                <div className="absolute bottom-6 left-0 right-0 px-8 flex items-center justify-between z-20">
                  <button
                    onClick={prevStep}
                    className="h-10 w-10 rounded-xl bg-white/10 text-white backdrop-blur-md flex items-center justify-center hover:bg-brand transition-all border border-white/10"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <div className="flex gap-2">
                    {milestones.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 rounded-full transition-all duration-300 ${i === activeStep ? 'w-6 bg-brand' : 'w-1.5 bg-white/20'}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextStep}
                    className="h-10 w-10 rounded-xl bg-white/10 text-white backdrop-blur-md flex items-center justify-center hover:bg-brand transition-all border border-white/10"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              {/* Floating Success Badge */}
              <motion.div
                animate={{ rotate: [12, 15, 12], y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -top-6 -right-6 h-20 w-25 bg-brand rounded-3xl shadow-xl flex flex-col items-center justify-center text-white p-2"
              >
                <Trophy size={28} />
                <span className="text-[10px] font-black uppercase mt-1 text-center leading-none">Trayectoria</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Columna Derecha: Contenido & Redes */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="h-1 w-12 rounded-full bg-brand" />
              <span className="text-sm font-black tracking-[0.2em] text-brand uppercase">
                Nuestra Historia
              </span>
            </div>

            <h2 className="mb-8 font-sans text-4xl font-black text-black md:text-5xl lg:text-6xl leading-[1.1] tracking-tighter">
              Raíces Colombianas, <br />
              <span className="text-brand italic">Futuro Digital.</span>
            </h2>

            <div className="space-y-6 text-lg text-slate-600 leading-relaxed max-w-xl">
              <p>
                RECCON no es solo una app; es el resultado de caminar los cafetales y entender que el sudor del caficultor merece la máxima <strong className="font-bold text-slate-900">precisión financiera</strong>.
              </p>
              <p>
                Nacimos en el corazón del campo para eliminar la incertidumbre del papel y las calculadoras. Nuestra misión es empoderar a cada finca con tecnología que habla su mismo idioma: <strong className="font-bold text-slate-900">sencilla, robusta y eficiente.</strong>
              </p>
            </div>

            {/* Social Media Buttons Section */}
            <div className="mt-12">
              <p className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Share2 size={16} />
                Síguenos en nuestras redes
              </p>

              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${social.color} ${social.hover} px-6 py-4 rounded-2xl flex items-center gap-3 text-white font-black text-sm shadow-xl shadow-transparent hover:shadow-current/20 transition-all duration-300`}
                  >
                    <div className="relative h-6 w-6">
                      <Image
                        src={social.icon}
                        alt={social.name}
                        fill
                        className="object-contain"
                        sizes="24px"
                      />
                    </div>
                    <span>{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Stats Checkmarks */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              {[
                { icon: Shield, text: "Seguridad Garantizada" },
                { icon: Heart, text: "Pasión por el Café" }
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-slate-900 font-bold">
                  <div className="h-10 w-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand">
                    <item.icon size={20} />
                  </div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
