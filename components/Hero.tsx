'use client'

import { useEffect, useRef } from 'react'
import HeroIcon from './HeroIcon'
import AnimateIn from './AnimateIn'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement
    const section = sectionRef.current as HTMLDivElement
    if (!canvas || !section) return
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1

    const CONFIG = {
      palette: ['#D32F2F', '#1976D2', '#FBC02D', '#EEEEEE', '#E64A19', '#00796B', '#F5F5DC', '#8DA399'],
      gapColor: '#0d0d0d',
      baseStrands: 90,
      repelRadius: 150,
      repelForce: 1.5,
      springTension: 0.08,
      friction: 0.82,
      shockwaves: [] as { x: number; y: number; radius: number; maxRadius: number; speed: number; force: number }[],
    }

    let width = 0, height = 0, cx = 0, cy = 0
    let blocks: {
      baseX: number; baseY: number; x: number; y: number
      vx: number; vy: number; angle: number; cosA: number; sinA: number
      w: number; h: number; color: string; strokeW: number
    }[] = []
    let centerBlocks: { angle: number; dist: number; orbitSpeed: number; pulseSpeed: number }[] = []
    let pointer = { x: -1000, y: -1000 }
    let rafId = 0

    function initArt() {
      blocks = []
      centerBlocks = []
      CONFIG.shockwaves = []

      const numStrands = Math.max(CONFIG.baseStrands, Math.floor(width / 15))
      const maxRadius = Math.sqrt(cx * cx + cy * cy) + 50

      for (let i = 0; i < numStrands; i++) {
        const baseAngle = (i / numStrands) * Math.PI * 2
        let radius = 35
        const waveOffset = Math.random() * Math.PI * 2
        const waveFrequency = 0.015 + Math.random() * 0.02
        const waveAmplitude = 15 + Math.random() * 25

        while (radius < maxRadius) {
          const currentAngle = baseAngle + Math.sin(radius * waveFrequency + waveOffset) * (waveAmplitude / radius)
          const x = cx + Math.cos(currentAngle) * radius
          const y = cy + Math.sin(currentAngle) * radius
          const rectWidth = 10 + Math.random() * 12
          const rectHeight = 6 + Math.random() * 8
          const color = CONFIG.palette[Math.floor(Math.random() * CONFIG.palette.length)]

          blocks.push({
            baseX: x, baseY: y, x, y, vx: 0, vy: 0,
            angle: currentAngle,
            cosA: Math.cos(currentAngle),
            sinA: Math.sin(currentAngle),
            w: rectWidth, h: rectHeight, color,
            strokeW: 0.2 + Math.random() * 0.8,
          })
          radius += rectWidth - 3
        }
      }

      for (let i = 0; i < 400; i++) {
        centerBlocks.push({
          angle: Math.random() * Math.PI * 2,
          dist: Math.random() * 32,
          orbitSpeed: (Math.random() - 0.5) * 0.5,
          pulseSpeed: 1 + Math.random() * 3,
        })
      }
    }

    function resizeCanvas() {
      const rect = section.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
      cx = width / 2
      cy = height / 2
      initArt()
    }

    function updatePointer(clientX: number, clientY: number) {
      const rect = canvas.getBoundingClientRect()
      pointer.x = clientX - rect.left
      pointer.y = clientY - rect.top
    }

    function createShockwave(clientX: number, clientY: number) {
      const rect = canvas.getBoundingClientRect()
      CONFIG.shockwaves.push({
        x: clientX - rect.left, y: clientY - rect.top,
        radius: 0, maxRadius: 350, speed: 12, force: 20,
      })
    }

    const onMouseMove  = (e: MouseEvent)  => updatePointer(e.clientX, e.clientY)
    const onMouseLeave = ()               => { pointer.x = -1000; pointer.y = -1000 }
    const onClick      = (e: MouseEvent)  => createShockwave(e.clientX, e.clientY)
    const onTouchStart = (e: TouchEvent)  => {
      updatePointer(e.touches[0].clientX, e.touches[0].clientY)
      createShockwave(e.touches[0].clientX, e.touches[0].clientY)
    }
    const onTouchMove  = (e: TouchEvent)  => updatePointer(e.touches[0].clientX, e.touches[0].clientY)
    const onTouchEnd   = ()               => { pointer.x = -1000; pointer.y = -1000 }

    canvas.addEventListener('mousemove',  onMouseMove)
    canvas.addEventListener('mouseleave', onMouseLeave)
    canvas.addEventListener('click',      onClick)
    canvas.addEventListener('touchstart', onTouchStart, { passive: true })
    canvas.addEventListener('touchmove',  onTouchMove,  { passive: true })
    canvas.addEventListener('touchend',   onTouchEnd)

    function animate() {
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = CONFIG.shockwaves.length - 1; i >= 0; i--) {
        CONFIG.shockwaves[i].radius += CONFIG.shockwaves[i].speed
        if (CONFIG.shockwaves[i].radius > CONFIG.shockwaves[i].maxRadius)
          CONFIG.shockwaves.splice(i, 1)
      }

      const time = Date.now() * 0.001

      for (const b of blocks) {
        const dx = b.x - pointer.x
        const dy = b.y - pointer.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < CONFIG.repelRadius && dist > 0) {
          const force = (CONFIG.repelRadius - dist) / CONFIG.repelRadius
          b.vx += (dx / dist) * force * CONFIG.repelForce
          b.vy += (dy / dist) * force * CONFIG.repelForce
        }

        for (const sw of CONFIG.shockwaves) {
          const sdx = b.x - sw.x
          const sdy = b.y - sw.y
          const sdist = Math.sqrt(sdx * sdx + sdy * sdy)
          const ringDist = Math.abs(sdist - sw.radius)
          if (ringDist < 25) {
            const sforce = (25 - ringDist) / 25
            b.vx += (sdx / sdist) * sforce * sw.force
            b.vy += (sdy / sdist) * sforce * sw.force
          }
        }

        b.vx += (b.baseX - b.x) * CONFIG.springTension
        b.vy += (b.baseY - b.y) * CONFIG.springTension
        b.vx *= CONFIG.friction
        b.vy *= CONFIG.friction
        b.x  += b.vx
        b.y  += b.vy

        const speed = Math.sqrt(b.vx * b.vx + b.vy * b.vy)

        ctx.setTransform(
          b.cosA * dpr, b.sinA * dpr,
          -b.sinA * dpr, b.cosA * dpr,
          b.x * dpr, b.y * dpr,
        )
        ctx.fillStyle = b.color
        ctx.fillRect(-b.w / 2, -b.h / 2, b.w, b.h)

        if (speed > 1) {
          ctx.fillStyle = `rgba(255,255,255,${Math.min(speed * 0.05, 0.4)})`
          ctx.fillRect(-b.w / 2, -b.h / 2, b.w, b.h)
        }

        ctx.lineWidth = b.strokeW
        ctx.strokeStyle = CONFIG.gapColor
        ctx.strokeRect(-b.w / 2, -b.h / 2, b.w, b.h)
      }

      for (const cb of centerBlocks) {
        const a   = cb.angle + time * cb.orbitSpeed
        const d   = cb.dist  + Math.sin(time * cb.pulseSpeed) * 2
        const cxp = cx + Math.cos(a) * d
        const cyp = cy + Math.sin(a) * d
        ctx.setTransform(
          Math.cos(a) * dpr, Math.sin(a) * dpr,
          -Math.sin(a) * dpr, Math.cos(a) * dpr,
          cxp * dpr, cyp * dpr,
        )
        ctx.fillStyle = '#000000'
        ctx.fillRect(-5, -5, 10, 10)
      }

      rafId = requestAnimationFrame(animate)
    }

    const ro = new ResizeObserver(resizeCanvas)
    ro.observe(section)
    resizeCanvas()
    animate()

    return () => {
      cancelAnimationFrame(rafId)
      ro.disconnect()
      canvas.removeEventListener('mousemove',  onMouseMove)
      canvas.removeEventListener('mouseleave', onMouseLeave)
      canvas.removeEventListener('click',      onClick)
      canvas.removeEventListener('touchstart', onTouchStart)
      canvas.removeEventListener('touchmove',  onTouchMove)
      canvas.removeEventListener('touchend',   onTouchEnd)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative -mx-6 md:-mx-10 overflow-hidden"
      style={{ minHeight: '560px', height: '72vh' }}
    >
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Glassmorphism card with hero text */}
      <AnimateIn delay={0.1}>
        <div
          className="absolute bottom-7 left-6 md:left-10 z-10 rounded-2xl p-7 max-w-[560px]"
          style={{
            background: 'rgba(13, 13, 13, 0.72)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            border: '1px solid rgba(255, 255, 255, 0.07)',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.7)',
          }}
        >
          <HeroIcon />
          <h1 className="text-[46px] md:text-[54px] font-bold text-[var(--text-primary)] leading-[1.05] tracking-[-0.025em] mb-5 mt-4">
            Hello, I&apos;m Henry Killick.
          </h1>
          <p className="text-[18px] text-[var(--text-secondary)] leading-[1.65]">
            Graphic designer working across brand, web and digital storytelling.
            I help studios, agencies and ambitious businesses turn complex ideas
            into clear, usable and commercially sharp digital experiences.
          </p>
        </div>
      </AnimateIn>
    </section>
  )
}
