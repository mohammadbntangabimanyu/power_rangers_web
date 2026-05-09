import { useState, useEffect, useRef } from 'react'

// Import cursor sticker assets
import cursorBam from '../assets/cursors/cursor_bam.png'
import cursorKapow from '../assets/cursors/cursor_kapow.png'
import cursorOmg from '../assets/cursors/cursor_omg.png'
import cursorDanger from '../assets/cursors/cursor_DANGER.png'
import logoImg from '../assets/ASET_LOGO.png'

const STICKERS = [cursorBam, cursorKapow, cursorOmg, cursorDanger]
const STICKER_ROTS = ['-10deg', '8deg', '-5deg', '12deg']

export default function Hero() {
  const [stickers, setStickers] = useState([])
  const [clickCount, setClickCount] = useState(0)
  const [logoReady, setLogoReady] = useState(false)
  const logoRef = useRef(null)

  useEffect(() => {
    // Trigger pop-in animation after mount
    const t = setTimeout(() => setLogoReady(true), 100)
    return () => clearTimeout(t)
  }, [])

  const handleLogoClick = (e) => {
    e.preventDefault()
    const nextCount = clickCount + 1

    if (nextCount <= 4) {
      const newSticker = {
        id: Date.now(),
        src: STICKERS[nextCount - 1],
        // pageX/pageY = koordinat relatif ke dokumen, bukan viewport
        // sehingga stiker nempel di halaman dan tidak ikut saat scroll
        x: e.pageX,
        y: e.pageY,
        rot: STICKER_ROTS[nextCount - 1],
      }
      setStickers(prev => [...prev, newSticker])
      setClickCount(nextCount)
    } else {
      // 5th click → Wikipedia
      window.open('https://en.wikipedia.org/wiki/Power_Rangers', '_blank')
      setClickCount(0)
      setStickers([])
    }
  }

  return (
    <>
      <section className="hero">
        {/* Background accent lines */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, transparent, var(--red), transparent)',
          opacity: 0.6,
        }} />

        <div
          className="hero-logo-wrapper"
          id="hero-logo"
          onClick={handleLogoClick}
          ref={logoRef}
        >
          {logoReady && (
            <img
              src={logoImg}
              alt="Power Rangers Logo"
              className={`hero-logo hero-logo-popup`}
              draggable={false}
            />
          )}

          {/* Orbit ring */}
          <div style={{
            position: 'absolute',
            width: '110%',
            paddingBottom: '110%',
            borderRadius: '50%',
            border: '1px solid rgba(230,32,32,0.15)',
            animation: 'spin 20s linear infinite',
            pointerEvents: 'none',
          }} />
        </div>

        <p className="hero-tagline">GO GO POWER RANGERS</p>

        <div className="hero-scroll-hint">
          <span>SCROLL</span>
          <div className="scroll-line" />
        </div>

        {/* Stickers di dalam hero (position:absolute → ikut scroll dokumen, nempel di halaman) */}
        {stickers.map((s) => (
          <img
            key={s.id}
            src={s.src}
            className="sticker"
            alt="sticker"
            style={{
              left: s.x,
              top: s.y,
              '--rot': s.rot,
            }}
          />
        ))}
      </section>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  )
}
