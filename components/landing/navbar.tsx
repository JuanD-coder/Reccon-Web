"use client";

import { useState, useEffect } from "react";
import { Menu, X, UserCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Logo from "../../public/images/reccon_LOGO_Icon.svg";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Funciones", href: "#funciones" },
  { label: "Nosotros", href: "#acerca" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "py-3 bg-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl border-b border-slate-200/50"
        : "py-5 bg-transparent"
        }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">

        {/* Logo Section - Estilo Referencia */}
        <a href="#hero" className="flex items-center gap-3.5 group">
          <Image src={Logo} alt="Logo de RECCON" width={50} height={50} />
          <div className="flex flex-col">
            <span className="text-2xl font-bold leading-none tracking-[0.05em] text-slate-950">
              RECCON
            </span>
            <span className="hidden text-[10px] uppercase tracking-[0.15em] text-slate-800 sm:block mt-1">
              Recolección y Contabilidad
            </span>
          </div>
        </a>

        {/* Desktop Navigation & Actions */}
        <div className="hidden items-center gap-8 md:flex">
          {/* Links Minimalistas */}
          <div className="flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-bold text-slate-600 transition-colors hover:text-brand group/link"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover/link:w-full" />
              </a>
            ))}
          </div>

          {/* User Action Group - Estilo Imagen Referencia */}
          <div className="flex items-center gap-5 pl-8 border-l border-slate-200">
            <div className="flex items-center gap-2 group/user cursor-pointer">
              <UserCircle2 className="w-5 h-5 text-slate-400 group-hover/user:text-brand transition-colors" />
              <span className="text-sm font-black text-slate-900">Bienvenido</span>
            </div>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white border border-slate-200 text-slate-950 shadow-sm md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X size={20} strokeWidth={3} /> : <Menu size={20} strokeWidth={3} />}
        </button>
      </div>

      {/* Mobile Menu - Estilo Premium Antigravity */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 border-t border-slate-100 bg-white/95 backdrop-blur-2xl md:hidden overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-5 py-4 rounded-2xl text-lg font-black text-slate-950 flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  {link.label}
                  <div className="h-1.5 w-1.5 rounded-full bg-slate-200" />
                </a>
              ))}

              <div className="mt-4 pt-6 border-t border-slate-100 flex flex-col gap-4">
                <div className="flex items-center justify-center gap-2 py-2">
                  <UserCircle2 className="w-5 h-5 text-slate-400" />
                  <span className="text-base font-black text-slate-900">Bienvenido</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
