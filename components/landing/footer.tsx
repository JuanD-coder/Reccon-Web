import { CoffeeBean } from "./coffee-elements"

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-foreground py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-xs font-bold text-primary-foreground">R</span>
          </div>
          <span className="text-sm font-bold text-background">RECCON</span>
          <CoffeeBean className="h-5 w-5 opacity-30" />
        </div>

        {/* Copyright */}
        <p className="text-sm text-background/50">
          {'© 2026 RECCON. Todos los derechos reservados.'}
        </p>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a href="#" className="text-sm text-background/50 transition-colors hover:text-background">
            Terminos
          </a>
          <a href="#" className="text-sm text-background/50 transition-colors hover:text-background">
            Privacidad
          </a>
        </div>
      </div>
    </footer>
  )
}
