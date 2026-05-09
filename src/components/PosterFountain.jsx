import { useRef, useCallback, useEffect } from 'react'
import { gsap } from 'gsap'

import poster1 from '../assets/posters/POSTER_1.jpeg'
import poster2 from '../assets/posters/POSTER_2.jpeg'
import poster3 from '../assets/posters/POSTER_3.jpeg'
import poster4 from '../assets/posters/POSTER_4.jpeg'
import poster5 from '../assets/posters/POSTER_5.jpeg'

const POSTERS = [poster1, poster2, poster3, poster4, poster5]

export default function PosterFountain() {
  const containerRef = useRef(null)
  const lastSpawnRef = useRef(0)
  const THROTTLE_MS = 80

  const spawnPoster = useCallback((e) => {
    const now = Date.now()
    if (now - lastSpawnRef.current < THROTTLE_MS) return
    lastSpawnRef.current = now

    const container = containerRef.current
    if (!container) return

    const rect = container.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const img = document.createElement('img')
    img.src = POSTERS[Math.floor(Math.random() * POSTERS.length)]
    img.className = 'fountain-poster'
    img.style.left = x + 'px'
    img.style.top = y + 'px'
    img.style.transform = 'translate(-50%, -50%)'
    img.style.zIndex = '10'
    container.appendChild(img)

    const flyX = (Math.random() - 0.5) * 300
    const flyY = -(Math.random() * 280 + 120)
    const rotation = (Math.random() - 0.5) * 60

    gsap.fromTo(img,
      {
        x: 0,
        y: 0,
        rotation: (Math.random() - 0.5) * 20,
        scale: 0.4,
        opacity: 1,
      },
      {
        x: flyX,
        y: flyY,
        rotation,
        scale: 0.9 + Math.random() * 0.3,
        opacity: 0,
        duration: 2 + Math.random() * 0.8,
        ease: 'power3.out',
        onComplete: () => {
          img.remove()
        },
      }
    )
  }, [])

  return (
    <section className="poster-fountain" ref={containerRef} onMouseMove={spawnPoster}>
      <div className="poster-fountain-bg-text">
        MOVE<br />YOUR MOUSE
      </div>
      <div className="poster-fountain-hint">GERAKKAN KURSOR DI AREA INI</div>

      {/* Footer built-in */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'rgba(0,0,0,0.8)',
        backdropFilter: 'blur(10px)',
        padding: '20px clamp(20px, 6vw, 80px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        flexWrap: 'wrap',
        gap: '12px',
        zIndex: 20,
        pointerEvents: 'none',
      }}>
        <span style={{
          fontFamily: "'Black Ops One', cursive",
          fontSize: '1.1rem',
          color: 'var(--red)',
          textShadow: '0 0 15px rgba(255,0,0,0.5)',
        }}>
          POWER RANGERS
        </span>
        <span style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '0.65rem',
          letterSpacing: '4px',
          color: 'rgba(255,255,255,0.2)',
        }}>
          GO GO POWER RANGERS — PROTECT THE EARTH
        </span>
      </div>
    </section>
  )
}
