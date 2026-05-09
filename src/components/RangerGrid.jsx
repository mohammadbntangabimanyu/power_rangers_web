import { useState } from 'react'

import helmMerah from '../assets/helms/helm_merah.png'
import helmBiru from '../assets/helms/helm_biru.png'
import helmHitam from '../assets/helms/helm_hitam.png'
import helmKuning from '../assets/helms/helm_kuning.png'
import helmHijau from '../assets/helms/helm_hijau.png'
import helmPink from '../assets/helms/helm_pink.png'

const RANGERS = [
  { name: 'RED RANGER',    img: helmMerah,  color: '#e62020' },
  { name: 'BLUE RANGER',   img: helmBiru,   color: '#1a5cff' },
  { name: 'BLACK RANGER',  img: helmHitam,  color: '#888888' },
  { name: 'YELLOW RANGER', img: helmKuning, color: '#f5c800' },
  { name: 'GREEN RANGER',  img: helmHijau,  color: '#1db85a' },
  { name: 'PINK RANGER',   img: helmPink,   color: '#ff69b4' },
]

export default function RangerGrid() {
  const [groupHover, setGroupHover] = useState(false)

  return (
    <section className="ranger-section">
      <div className="section-header">
        <div className="section-title">
          <span>THE TEAM</span>
          POWER RANGERS
        </div>
      </div>

      <div className={`ranger-grid ${groupHover ? 'group-hover' : ''}`}>
        {RANGERS.map((ranger, i) => (
          <div
            key={ranger.name}
            className="ranger-card"
            style={{ '--ranger-color': ranger.color }}
          >
            <img
              src={ranger.img}
              alt={ranger.name}
              className="ranger-helm-img"
              draggable={false}
            />
            <span className="ranger-name">{ranger.name}</span>
            <div className="ranger-color-dot" />
          </div>
        ))}

        {/* Plus button */}
        <a
          href="/form.html"
          className="plus-btn"
          onMouseEnter={() => setGroupHover(true)}
          onMouseLeave={() => setGroupHover(false)}
        >
          <span className="plus-icon">+</span>
          <span className="plus-label">JOIN</span>
        </a>
      </div>
    </section>
  )
}
