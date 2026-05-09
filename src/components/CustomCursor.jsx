import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const [isHoveringLogo, setIsHoveringLogo] = useState(false)
  const [isHoveringClickable, setIsHoveringClickable] = useState(false)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const onMove = (e) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    }

    const onLogoEnter = () => setIsHoveringLogo(true)
    const onLogoLeave = () => setIsHoveringLogo(false)

    const onClickableEnter = () => setIsHoveringClickable(true)
    const onClickableLeave = () => setIsHoveringClickable(false)

    window.addEventListener('mousemove', onMove)

    // Poll for logo element
    const logoEl = document.getElementById('hero-logo')
    if (logoEl) {
      logoEl.addEventListener('mouseenter', onLogoEnter)
      logoEl.addEventListener('mouseleave', onLogoLeave)
    }

    const interval = setInterval(() => {
      const logo = document.getElementById('hero-logo')
      if (logo) {
        logo.addEventListener('mouseenter', onLogoEnter)
        logo.addEventListener('mouseleave', onLogoLeave)
        clearInterval(interval)
      }
    }, 100)

    // Handle all clickable elements
    const handleClickableIn = () => setIsHoveringClickable(true)
    const handleClickableOut = () => setIsHoveringClickable(false)

    const addListeners = () => {
      document.querySelectorAll('a, button, .plus-btn, .ranger-card').forEach(el => {
        el.addEventListener('mouseenter', handleClickableIn)
        el.addEventListener('mouseleave', handleClickableOut)
      })
    }

    addListeners()
    const observer = new MutationObserver(addListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      const logo = document.getElementById('hero-logo')
      if (logo) {
        logo.removeEventListener('mouseenter', onLogoEnter)
        logo.removeEventListener('mouseleave', onLogoLeave)
      }
      clearInterval(interval)
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        left: '-100px',
        top: '-100px',
        width: isHoveringClickable ? '60px' : '40px',
        height: isHoveringClickable ? '60px' : '40px',
        borderRadius: '50%',
        background: isHoveringClickable ? 'transparent' : '#fff',
        border: isHoveringClickable ? '2px solid #fff' : 'none',
        mixBlendMode: 'difference',
        pointerEvents: 'none',
        zIndex: 99999,
        transform: 'translate(-50%, -50%)',
        transition: 'width 0.2s, height 0.2s, background 0.2s, border 0.2s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {isHoveringLogo && (
        <span style={{
          position: 'absolute',
          left: '100%',
          top: '50%',
          transform: 'translateY(-50%)',
          marginLeft: '8px',
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '0.75rem',
          letterSpacing: '3px',
          color: '#fff',
          whiteSpace: 'nowrap',
          mixBlendMode: 'difference',
        }}>
          CLICK!
        </span>
      )}
    </div>
  )
}
