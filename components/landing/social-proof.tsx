"use client"

import { motion } from "framer-motion"
import { Smartphone, Users, ShieldCheck } from "lucide-react"

const stats = [
    {
        icon: Users,
        label: "+100 Caficultores",
        subtext: "ya confían en RECCON",
    },
    {
        icon: Smartphone,
        label: "Sin coneccion a internet",
        subtext: "Diseñado para el campo",
    },
    {
        icon: ShieldCheck,
        label: "100% Seguro",
        subtext: "Tus datos protegidos",
    },
]

export function SocialProof() {
    return (
        <div
            className="relative z-20 overflow-hidden py-14"
            style={{
                background: "linear-gradient(180deg, hsl(140 30% 96%) 0%, hsl(142 40% 98%) 50%, #ffffff 100%)"
            }}
        >
            <div className="container mx-auto max-w-6xl px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-5 group"
                        >
                            <div className="h-16 w-16 rounded-2xl bg-brand/5 flex items-center justify-center text-brand border border-brand/10 group-hover:bg-brand group-hover:text-white transition-all duration-500 shadow-sm">
                                <stat.icon size={28} />
                            </div>
                            <div>
                                <p className="font-sans font-black text-slate-900 text-xl leading-tight">
                                    {stat.label}
                                </p>
                                <p className="font-sans text-slate-500 font-medium">
                                    {stat.subtext}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
