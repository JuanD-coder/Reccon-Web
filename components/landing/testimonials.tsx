"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

const testimonials = [
    {
        quote: "Antes perdía medio sábado sumando kilos y restando adelantos. Con RECCON, en 5 minutos tengo la planilla lista y sin errores. ¡Es una bendición!",
        author: "Don Ricardo Gómez",
        role: "Dueño de Finca El Oasis",
        location: "Antioquia"
    },
    {
        quote: "Lo que más me gusta es que no necesito internet. En mi finca la señal es mala, pero registro todo y cuando bajo al pueblo se sincroniza solito.",
        author: "María Helena Cano",
        role: "Administradora",
        location: "Huila"
    },
    {
        quote: "A mis recolectores les gusta porque ven su saldo al instante. Todo es más transparente y me ahorro las discusiones de cada fin de semana.",
        author: "Javier Restrepo",
        role: "Caficultor",
        location: "Quindío"
    }
]

export function Testimonials() {
    return (
        <section className="py-24 relative overflow-hidden bg-white">
            {/* Esferas de color ambientales */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                {/* Arriba Izquierda (Rojo) */}
                <div
                    className="absolute -top-[10%] -left-[10%] h-[450px] w-[450px] rounded-full opacity-[0.02] blur-[110px]"
                    style={{ background: "hsl(0 72% 50%)" }}
                />
                {/* Centro Derecha (Verde) */}
                <div
                    className="absolute top-1/2 -right-[15%] -translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-[0.04] blur-[140px]"
                    style={{ background: "hsl(142 52% 40%)" }}
                />
                {/* Abajo Izquierda (Amarillo) */}
                <div
                    className="absolute -bottom-[10%] left-[5%] h-[400px] w-[400px] rounded-full opacity-[0.03] blur-[100px]"
                    style={{ background: "hsl(45 92% 55%)" }}
                />
            </div>
            {/* Decoración sutil */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-200 to-transparent opacity-30" />

            <div className="container mx-auto max-w-6xl px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-xs font-black uppercase tracking-widest mb-6"
                    >
                        <Star size={14} className="fill-current" />
                        <span>Voces de nuestra tierra</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-sans font-black text-slate-900 tracking-tight">
                        Confianza que <span className="text-[#4caf50] italic">brota del campo</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.author}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm relative group hover:shadow-xl transition-all duration-500"
                        >
                            <Quote className="absolute top-6 right-8 text-emerald-100 group-hover:text-emerald-200 transition-colors" size={48} />

                            <p className="text-slate-600 text-lg leading-relaxed mb-8 relative z-10 italic">
                                "{t.quote}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-emerald-600 flex items-center justify-center text-white font-black text-xl">
                                    {t.author[0]}
                                </div>
                                <div>
                                    <p className="font-sans font-black text-slate-900 leading-none mb-1">
                                        {t.author}
                                    </p>
                                    <p className="text-sm text-slate-500">
                                        {t.role} • {t.location}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
