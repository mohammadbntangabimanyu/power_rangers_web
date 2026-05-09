import { useState, useEffect, useRef } from 'react'

// Komponen satu bola mata
function Eyeball({ containerRef }) {
  const eyeRef = useRef(null)
  const [pupilStyle, setPupilStyle] = useState({ transform: 'translate(-50%, -50%)' })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const eye = eyeRef.current
      if (!eye) return

      const rect = eye.getBoundingClientRect()
      const eyeCenterX = rect.left + rect.width / 2
      const eyeCenterY = rect.top + rect.height / 2

      const dx = e.clientX - eyeCenterX
      const dy = e.clientY - eyeCenterY
      const angle = Math.atan2(dy, dx)
      const dist = Math.min(Math.hypot(dx, dy), rect.width * 0.22)

      const px = Math.cos(angle) * dist
      const py = Math.sin(angle) * dist

      setPupilStyle({
        transform: `translate(calc(-50% + ${px}px), calc(-50% + ${py}px))`,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <span className="eyeball" ref={eyeRef}>
      {/* Sclera (putih mata) */}
      <span className="eye-sclera" />
      {/* Pupil (ikut kursor) */}
      <span className="eye-pupil" style={pupilStyle} />
      {/* Kilatan cahaya */}
      <span className="eye-shine" />
    </span>
  )
}

export default function LookingSection() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="looking-section" ref={sectionRef}>
      {/* Garis dekoratif atas */}
      <div className="looking-topline" />

      <div className={`looking-content ${visible ? 'looking-visible' : ''}`}>
        {/* Teks utama besar */}
        <h2 className="looking-headline">
          <span className="looking-line1">We're l
            <Eyeball />
            <Eyeball />
            king for
          </span>
          <span className="looking-line2">  MONSTERS</span>
        </h2>


        {/* CTA */}
        <a href="/monster-report.html" className="looking-cta">
          <span>LAPORKAN MONSTER</span>
          <span className="cta-arrow">→</span>
        </a>
      </div>

      {/* Dekorasi background */}
      <div className="looking-bg-orb looking-bg-orb--1" />
      <div className="looking-bg-orb looking-bg-orb--2" />
    </section>
  )
}
