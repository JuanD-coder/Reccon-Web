"use client"

import { motion } from "framer-motion"
import { Download, UserPlus, FileText, ArrowRight } from "lucide-react"

const steps = [
    {
        number: "01",
        title: "Descarga la App",
        desc: "Búscala en Google Play Store. Es liviana y se instala en segundos en cualquier celular Android.",
        icon: Download,
        color: "bg-blue-500",
    },
    {
        number: "02",
        title: "Registra el día",
        desc: "Anota los kilos de cada recolector. No necesitas internet, la app guarda todo en el momento.",
        icon: UserPlus,
        color: "bg-brand",
    },
    {
        number: "03",
        title: "Genera tu reporte",
        desc: "Al final del día o la semana, toca un botón y obtén el total a pagar y el reporte en Excel.",
        icon: FileText,
        color: "bg-amber-500",
    },
]

export function StepsSection() {
    return (
        <section className="py-14 bg-white relative overflow-hidden">
            {/* Esferas de color ambientales */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                {/* Izquierda Arriba */}
                <div
                    className="absolute -top-[10%] -left-[5%] h-[450px] w-[450px] rounded-full opacity-[0.03] blur-[110px]"
                    style={{ background: "hsl(45 92% 55%)" }}
                />
                {/* Derecha Medio */}
                <div
                    className="absolute top-1/2 -right-[10%] -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-[0.04] blur-[120px]"
                    style={{ background: "hsl(142 52% 40%)" }}
                />
                {/* Izquierda Abajo */}
                <div
                    className="absolute -bottom-[10%] left-[5%] h-[400px] w-[400px] rounded-full opacity-[0.02] blur-[100px]"
                    style={{ background: "hsl(0 72% 50%)" }}
                />
            </div>
            <div className="container mx-auto max-w-6xl px-6 relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-sans font-black text-slate-900 tracking-tight"
                    >
                        Tan fácil como <span className="text-brand italic">contar granos</span>
                    </motion.h2>
                    <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
                        Tres pasos simples para modernizar tu administración y ahorrar horas de trabajo manual.
                    </p>
                </div>

                <div className="relative">
                    {/* Línea conectora (Desktop) */}
                    <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-0.5 bg-slate-100" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative flex flex-col items-center text-center"
                            >
                                {/* Círculo con Icono */}
                                <div className={`relative z-10 w-24 h-24 rounded-full ${step.color} flex items-center justify-center text-white shadow-xl mb-8 group hover:scale-110 transition-transform duration-500`}>
                                    <step.icon size={36} />
                                    {/* Número flotante */}
                                    <div className="absolute -top-2 -right-2 bg-slate-900 text-white text-xs font-black h-8 w-8 rounded-full flex items-center justify-center border-4 border-white">
                                        {step.number}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-black text-slate-900 mb-4 font-sans">
                                    {step.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {step.desc}
                                </p>

                                {/* Flecha indicadora (Mobile) */}
                                {index < steps.length - 1 && (
                                    <div className="md:hidden mt-8 text-slate-200">
                                        <ArrowRight size={32} className="rotate-90" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
