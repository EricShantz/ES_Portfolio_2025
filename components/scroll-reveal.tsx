"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import type { ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "left" | "right" | "up"
}

export function ScrollReveal({ children, className = "", delay = 0, direction = "left" }: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })

  const getTransform = () => {
    if (direction === "left") {
      return isVisible ? "translate-x-0" : "-translate-x-16"
    } else if (direction === "right") {
      return isVisible ? "translate-x-0" : "translate-x-16"
    } else {
      return isVisible ? "translate-y-0" : "translate-y-16"
    }
  }

  return (
    <section
      ref={ref}
      className={`transition-all duration-[1200ms] ease-out ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      } ${getTransform()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </section>
  )
}
