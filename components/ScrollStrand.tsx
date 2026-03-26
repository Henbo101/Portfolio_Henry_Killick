'use client'

import { useEffect, useRef } from 'react'

const PALETTE = ['#D32F2F', '#1976D2', '#FBC02D', '#EEEEEE', '#E64A19', '#00796B', '#F5F5DC', '#8DA399']
const CANVAS_W = 48
const AMPLITUDE = 13
const CYCLES = 5

export default function ScrollStrand() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef    = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement
    if (!canvas) return
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    let canvasH = 0

    type Block = {
      x: number; y: number; angle: number
      w: number; h: number; color: string; strokeW: number
    }
    let blocks: Block[] = []

    function buildPath(h: number) {
      blocks = []
      const cx = CANVAS_W / 2
      let t = 0

      while (t < h) {
        const p  = t / h
        const x  = cx + AMPLITUDE * Math.sin(p * CYCLES * Math.PI * 2)
        // tangent: dx/dt (normalised) and dy/dt = 1
        const dxdt  = (AMPLITUDE * CYCLES * Math.PI * 2 * Math.cos(p * CYCLES * Math.PI * 2)) / h
        const angle = Math.atan2(1, dxdt)

        const bw = 8  + Math.random() * 5
        const bh = 3.5 + Math.random() * 3

        blocks.push({
          x, y: t, angle,
          w: bw, h: bh,
          color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
          strokeW: 0.2 + Math.random() * 0.5,
        })

        t += bw * 0.78
      }
    }

    function resize() {
      canvasH = window.innerHeight
      canvas.width  = CANVAS_W * dpr
      canvas.height = canvasH  * dpr
      canvas.style.width  = CANVAS_W + 'px'
      canvas.style.height = canvasH  + 'px'
      buildPath(canvasH)
      draw()
    }

    function draw() {
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const maxScroll     = document.documentElement.scrollHeight - window.innerHeight
      const scrollP       = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0
      const revealY       = scrollP * canvasH

      for (const b of blocks) {
        if (b.y > revealY) break

        ctx.setTransform(
          Math.cos(b.angle) * dpr,  Math.sin(b.angle) * dpr,
          -Math.sin(b.angle) * dpr, Math.cos(b.angle) * dpr,
          b.x * dpr, b.y * dpr,
        )
        ctx.fillStyle = b.color
        ctx.fillRect(-b.w / 2, -b.h / 2, b.w, b.h)

        ctx.lineWidth    = b.strokeW
        ctx.strokeStyle  = '#0d0d0d'
        ctx.strokeRect(-b.w / 2, -b.h / 2, b.w, b.h)
      }
    }

    function onScroll() {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(draw)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', resize)
    resize()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 z-30 pointer-events-none hidden md:block"
      // aligns canvas to the inside-left edge of the 820px content container
      style={{ left: 'clamp(0px, calc(50vw - 410px + 2px), 100vw)' }}
    />
  )
}
