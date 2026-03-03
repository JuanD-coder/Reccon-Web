"use client"

import { motion } from "framer-motion"

export function WaveAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 1 }}
      className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]"
    >
      {/* Back wave - slower, lighter green */}
      <svg
        className="relative block w-[200%] animate-wave-slow"
        viewBox="0 0 2880 150"
        preserveAspectRatio="none"
        style={{ height: "100px" }}
        aria-hidden="true"
      >
        <path
          d="M0,80 C360,140 720,20 1080,80 C1440,140 1800,20 2160,80 C2520,140 2880,20 2880,80 L2880,150 L0,150Z"
          fill="hsl(142, 52%, 32%)"
          fillOpacity="0.08"
        />
      </svg>
      {/* Middle wave - green tinted */}
      <svg
        className="absolute bottom-0 left-0 block w-[200%]"
        viewBox="0 0 2880 150"
        preserveAspectRatio="none"
        style={{ height: "80px", animation: "wave-shift 10s linear infinite" }}
        aria-hidden="true"
      >
        <path
          d="M0,100 C480,40 960,120 1440,70 C1920,30 2400,110 2880,60 L2880,150 L0,150Z"
          fill="hsl(142, 52%, 32%)"
          fillOpacity="0.05"
        />
      </svg>
      {/* Front wave - opaque, matches background */}
      <svg
        className="absolute bottom-0 left-0 block w-[200%] animate-wave"
        viewBox="0 0 2880 150"
        preserveAspectRatio="none"
        style={{ height: "65px" }}
        aria-hidden="true"
      >
        <path
          d="M0,90 C480,30 960,110 1440,70 C1920,30 2400,100 2880,70 L2880,150 L0,150Z"
          fill="hsl(140 30% 96%)"
        />
      </svg>
    </motion.div>
  )
}
