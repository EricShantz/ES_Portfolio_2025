"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = document.documentElement.scrollHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Particle system for floating tech symbols
    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      symbol: string
      isWord: boolean
    }> = []

    const codeSymbols = ["{ }", "[ ]"]

    const keywords = [
      "innovation",
      "scale",
      "automation",
      "integration",
      "AI-driven",
      "data-driven",
      "engagement",
      "excellence",
      "transformation",
      "optimize",
    ]

    // Mix of code symbols and keywords
    for (let i = 0; i < 50; i++) {
      const isWord = Math.random() > 0.6 // 40% chance of being a keyword
      const symbolSet = isWord ? keywords : codeSymbols

      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: isWord ? Math.random() * 10 + 12 : Math.random() * 24 + 14,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: isWord ? Math.random() * 0.12 + 0.06 : Math.random() * 0.15 + 0.08,
        symbol: symbolSet[Math.floor(Math.random() * symbolSet.length)],
        isWord,
      })
    }

    const drawGrid = () => {
      ctx.strokeStyle = "rgba(59, 130, 246, 0.08)"
      ctx.lineWidth = 1

      // Vertical lines
      for (let x = 0; x < canvas.width; x += 100) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += 100) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw grid
      drawGrid()

      // Update and draw particles
      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x < -50) particle.x = canvas.width + 50
        if (particle.x > canvas.width + 50) particle.x = -50
        if (particle.y < -50) particle.y = canvas.height + 50
        if (particle.y > canvas.height + 50) particle.y = -50

        // Draw symbol
        ctx.font = particle.isWord ? `${particle.size}px sans-serif` : `${particle.size}px monospace`
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`
        ctx.fillText(particle.symbol, particle.x, particle.y)
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-float-slow" />
      </div>
    </>
  )
}
