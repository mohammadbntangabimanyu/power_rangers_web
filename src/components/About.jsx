import { useEffect, useRef, useState } from 'react'

export default function About() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="about" ref={sectionRef}>
      <h2
        className="about-neon-title"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}
      >
        IT'S MORPHIN<br />TIME!
      </h2>

      <div
        className="about-bubble"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.8s 0.2s ease, transform 0.8s 0.2s ease',
        }}
      >
        <p>
          Sekumpulan remaja biasa yang dipilih oleh <strong>Zordon</strong> untuk menjadi pahlawan
          terkuat di bumi. Dipersenjatai dengan kekuatan purba dan teknologi masa depan,
          mereka bersatu sebagai <strong>Power Rangers</strong> — garis pertahanan terakhir
          melawan ancaman yang lebih besar dari imajinasi manusia mana pun.
        </p>
      </div>

      <div
        className="about-stats"
        style={{
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.8s 0.4s ease',
        }}
      >
        {[
          { num: '5', label: 'RANGER AKTIF' },
          { num: '30+', label: 'TAHUN BERTUGAS' },
          { num: '∞', label: 'ANCAMAN DIKALAHKAN' },
        ].map((stat, i) => (
          <div className="stat-item" key={i}>
            <div className="stat-number">{stat.num}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
