"use client"

import { motion } from "framer-motion"

/** Animated coffee leaf that sways gently */
export function CoffeeLeaf({ className }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 60 90"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ rotate: [-4, 4, -4] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    >
      <path
        d="M30 5C30 5 5 25 5 55C5 75 16 85 30 85C44 85 55 75 55 55C55 25 30 5 30 5Z"
        fill="hsl(142, 52%, 32%)"
        fillOpacity="0.18"
      />
      <path d="M30 15V75" stroke="hsl(142, 52%, 32%)" strokeOpacity="0.25" strokeWidth="1.5" />
      <path
        d="M30 30L18 42M30 45L15 55M30 55L20 63M30 35L42 47M30 50L45 58M30 60L40 68"
        stroke="hsl(142, 52%, 32%)"
        strokeOpacity="0.18"
        strokeWidth="1"
      />
    </motion.svg>
  )
}

/** Small animated coffee cherry cluster */
export function CoffeeCherries({ className }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 50 50"
      className={className}
      fill="none"
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    >
      <circle cx="16" cy="22" r="7" fill="hsl(0, 72%, 44%)" fillOpacity="0.18" />
      <circle cx="32" cy="18" r="6" fill="hsl(0, 72%, 44%)" fillOpacity="0.15" />
      <circle cx="24" cy="32" r="5" fill="hsl(0, 72%, 44%)" fillOpacity="0.12" />
      <path d="M22 10C22 10 18 4 24 2C30 4 26 10 26 10" stroke="hsl(142, 52%, 32%)" strokeOpacity="0.22" strokeWidth="1.5" />
    </motion.svg>
  )
}

/** Animated coffee basket that fills up with cherries */
export function CoffeeBasket({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 50" className={className} fill="none" aria-hidden="true">
      <path
        d="M10 18H40L36 42H14L10 18Z"
        stroke="hsl(142, 52%, 32%)"
        strokeOpacity="0.22"
        strokeWidth="1.5"
        fill="hsl(142, 52%, 32%)"
        fillOpacity="0.06"
      />
      <path d="M8 18H42" stroke="hsl(142, 52%, 32%)" strokeOpacity="0.28" strokeWidth="2" strokeLinecap="round" />
      <motion.rect
        x="14"
        y="24"
        width="22"
        rx="2"
        fill="hsl(0, 72%, 44%)"
        fillOpacity="0.14"
        animate={{ height: [4, 16, 4], y: [36, 24, 36] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  )
}

/** Small animated grain/bean icon */
export function CoffeeBean({ className }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 30 30"
      className={className}
      fill="none"
      animate={{ rotate: [0, 12, -12, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    >
      <ellipse cx="15" cy="15" rx="8" ry="11" fill="hsl(142, 52%, 32%)" fillOpacity="0.14" />
      <path d="M15 5C12 10 12 20 15 25" stroke="hsl(142, 52%, 32%)" strokeOpacity="0.22" strokeWidth="1" />
    </motion.svg>
  )
}

/** Falling coffee beans animation -- a more visible "GIF-like" element */
export function FallingBeans({ className }: { className?: string }) {
  const beans = [
    { x: 20, delay: 0, duration: 3.5 },
    { x: 50, delay: 0.8, duration: 3 },
    { x: 80, delay: 1.6, duration: 4 },
    { x: 35, delay: 2.2, duration: 3.2 },
    { x: 65, delay: 0.4, duration: 3.8 },
  ]

  return (
    <svg viewBox="0 0 100 120" className={className} fill="none" aria-hidden="true">
      {/* Leaf at top */}
      <path
        d="M50 5C50 5 30 15 30 35C30 50 38 55 50 55C62 55 70 50 70 35C70 15 50 5 50 5Z"
        fill="hsl(142, 52%, 32%)"
        fillOpacity="0.15"
      />
      <path d="M50 10V50" stroke="hsl(142, 52%, 32%)" strokeOpacity="0.2" strokeWidth="1" />

      {/* Falling beans */}
      {beans.map((bean, i) => (
        <motion.ellipse
          key={i}
          cx={bean.x}
          rx="4"
          ry="5.5"
          fill="hsl(0, 72%, 44%)"
          fillOpacity="0.2"
          animate={{
            cy: [40, 115],
            opacity: [0, 0.3, 0.2, 0],
            rotate: [0, 180],
          }}
          transition={{
            duration: bean.duration,
            delay: bean.delay,
            repeat: Infinity,
            ease: "easeIn",
          }}
        />
      ))}
    </svg>
  )
}
