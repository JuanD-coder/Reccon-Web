"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Logo from "../../public/images/reccon_LOGO_Icon.svg";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Funciones", href: "#funciones" },
  { label: "Acerca de", href: "#acerca" },
  { label: "Versiones", href: "#versiones" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center">
              <Image
                src={Logo}
                alt="Logo de RECCON"
              />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold leading-tight tracking-tight text-foreground">
              RECCON
            </span>
            <span className="hidden text-[12px] font-medium uppercase tracking-widest text-muted-foreground sm:block">
              Recoleccion y Contabilidad
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-primary/5 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="ml-3 inline-flex items-center gap-2 rounded-xl bg-[#4caf50] px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:bg-[#388e3c] hover:brightness-110"
          >
            Iniciar Sesion
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-border bg-background/98 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-primary/5"
                >
                  {link.label}
                </a>
              ))}
              
              <a
                href="#contacto"
                onClick={() => setMobileOpen(false)}
                className="mt-3 inline-flex items-center justify-center rounded-xl bg-[#4caf50] px-5 py-3 text-sm font-semibold text-primary-foreground"
              >
                Iniciar Sesion
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
