"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, MapPin, Phone, MessageSquare, Sparkles } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section
      id="contacto"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, hsl(142 30% 97%) 50%, #ffffff 100%)"
      }}
    >
      {/* Background Orbs con suavidad Antigravity */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div
          className="absolute top-[20%] -right-[10%] h-[600px] w-[600px] rounded-full opacity-[0.05] blur-[140px]"
          style={{ background: "#4caf50" }}
        />
        <div
          className="absolute bottom-[10%] -left-[10%] h-[500px] w-[500px] rounded-full opacity-[0.03] blur-[110px]"
          style={{ background: "#facc15" }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">

          {/* Columna Izquierda: Información y Conexión */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8 flex items-center gap-3">
              <div className="h-1 w-12 rounded-full bg-[#4caf50]" />
              <span className="text-sm font-black tracking-[0.2em] text-[#4caf50] uppercase">
                Contacto
              </span>
            </div>

            <h2 className="mb-8 font-sans text-4xl font-black text-slate-950 md:text-5xl lg:text-6xl leading-[1.1] tracking-tighter">
              Sembremos una <br />
              <span className="text-[#4caf50] italic">nueva alianza.</span>
            </h2>

            <p className="mb-12 text-lg text-slate-600 leading-relaxed max-w-md">
              ¿Tienes preguntas sobre cómo digitalizar tu finca o necesitas soporte técnico? Estamos listos para escucharte y crecer juntos.
            </p>

            <div className="space-y-8">
              {[
                { icon: Mail, label: "Escríbenos", val: "soporte@reccon.app", color: "text-blue-500", bg: "bg-blue-50" },
                { icon: Phone, label: "Llámanos", val: "+57 317 015 7414", color: "text-[#4caf50]", bg: "bg-emerald-50" },
                { icon: MapPin, label: "Ubicación", val: "Eje Cafetero, Colombia", color: "text-red-500", bg: "bg-red-50" }
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-5 group">
                  <div className={`h-14 w-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-sm`}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-black text-slate-400 uppercase tracking-widest leading-none mb-1.5">{item.label}</p>
                    <p className="text-lg font-bold text-slate-900">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote/Trust Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-16 p-8 rounded-[2rem] bg-white border border-slate-200 shadow-xl shadow-slate-200/40 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Sparkles size={100} className="text-[#facc15]" />
              </div>
              <p className="text-slate-600 font-medium italic relative z-10">
                "Nuestra misión es empoderar al campo colombiano con tecnología que hable su mismo idioma: Sencilla, robusta y eficiente."
              </p>
            </motion.div>
          </motion.div>

          {/* Columna Derecha: Formulario Premium */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative p-8 md:p-12 rounded-[3.5rem] bg-white border border-slate-200 shadow-2xl shadow-slate-200/50">
              <h3 className="text-2xl font-black text-slate-950 mb-8 flex items-center gap-3">
                <MessageSquare className="text-[#4caf50]" />
                Envíanos un mensaje
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-black text-slate-400 uppercase tracking-widest mb-3 px-1">Tu Nombre</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej. Juan Valdéz"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#4caf50] focus:ring-4 focus:ring-[#4caf50]/5 outline-none transition-all font-bold text-slate-950 placeholder:text-slate-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-black text-slate-400 uppercase tracking-widest mb-3 px-1">Correo Electrónico</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ejemplo@correo.com"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#4caf50] focus:ring-4 focus:ring-[#4caf50]/5 outline-none transition-all font-bold text-slate-950 placeholder:text-slate-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-black text-slate-400 uppercase tracking-widest mb-3 px-1">¿En qué podemos ayudarte?</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Cuéntanos más sobre tu finca o tu duda..."
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#4caf50] focus:ring-4 focus:ring-[#4caf50]/5 outline-none transition-all font-bold text-slate-950 placeholder:text-slate-300 resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={submitted}
                  className={`w-full py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-xl ${submitted
                    ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                    : "bg-[#4caf50] text-white hover:bg-[#43a047] shadow-[#4caf50]/20"
                    }`}
                >
                  {submitted ? (
                    <>¡Mensaje Enviado!</>
                  ) : (
                    <>
                      <Send size={22} strokeWidth={3} />
                      Enviar Mensaje
                    </>
                  )}
                </motion.button>
              </form>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 rounded-xl bg-emerald-50 text-emerald-700 text-sm font-bold text-center border border-emerald-100"
                >
                  Gracias por escribirnos. Te responderemos antes de 24 horas.
                </motion.div>
              )}
            </div>

            {/* Floating Element background decoration */}
            <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-[#facc15]/10 rounded-full blur-3xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
