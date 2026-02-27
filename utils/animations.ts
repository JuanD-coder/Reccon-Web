import type { Variants, Transition } from "framer-motion"

/* ── Reusable easing ─────────────────────────────────────────── */
export const smoothEase: number[] = [0.25, 0.46, 0.45, 0.94]

/* ── Transition presets ──────────────────────────────────────── */
export const defaultTransition: Transition = {
  duration: 0.55,
  ease: smoothEase,
}

export const slowTransition: Transition = {
  duration: 0.7,
  ease: smoothEase,
}

/* ── Fade-in-up (single element) ─────────────────────────────── */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
}

/* ── Slide from left / right ─────────────────────────────────── */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: slowTransition },
}

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: slowTransition },
}

/* ── Staggered container ─────────────────────────────────────── */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
}

/* ── Card variant (for use inside stagger) ───────────────────── */
export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: smoothEase },
  },
}

/* ── Scale fade (images, badges) ─────────────────────────────── */
export const scaleFade: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: smoothEase },
  },
}

/* ── Hover presets (use with whileHover) ─────────────────────── */
export const hoverLift = {
  y: -8,
  scale: 1.015,
  transition: { duration: 0.3, ease: smoothEase },
}

export const hoverButton = {
  scale: 1.05,
  boxShadow: "0 12px 30px -8px rgba(0,0,0,0.18)",
}

export const tapShrink = { scale: 0.97 }

/* ── Float loop (decorative elements) ────────────────────────── */
export const floatLoop = {
  y: [0, -8, 0] as number[],
  transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const },
}

/* ── Viewport settings ───────────────────────────────────────── */
export const viewportOnce = { once: true, amount: 0.25 }
