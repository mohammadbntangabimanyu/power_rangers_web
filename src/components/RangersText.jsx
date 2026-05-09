import poseR from '../assets/pose/pose_merah.jpeg'
import poseA from '../assets/pose/pose_kuning.jpeg'
import poseN from '../assets/pose/pose_hitam.jpeg'
import poseG from '../assets/pose/pose_hijau.jpeg'
import poseE from '../assets/pose/pose_biru.jpeg'
import poseR2 from '../assets/pose/pose_pink.jpeg'
import poseW from '../assets/pose/pose_putih.jpeg' 

const LETTERS = [
  { char: 'R', img: poseR,  color: '#e62020', name: 'Red'    },
  { char: 'A', img: poseA,  color: '#f5c800', name: 'Yellow' },
  { char: 'N', img: poseN,  color: '#888888', name: 'Black'  },
  { char: 'G', img: poseG,  color: '#1db85a', name: 'Green'  },
  { char: 'E', img: poseE,  color: '#1a5cff', name: 'Blue'   },
  { char: 'R', img: poseR2, color: '#ff69b4', name: 'Pink'   },
  { char: 'S', img: poseW,  color: '#e2e2e2', name: 'White'  }, 
]
export default function RangersText() {
  return (
    <section className="rangers-text-section">
      <div className="rangers-text-inner">
        <p className="rangers-text-label">THE MIGHTY MORPHIN</p>

        <div className="rangers-letters">
          {LETTERS.map((l, i) => (
            <div
              key={i}
              className="rangers-letter"
              style={{ '--glow': l.color, animationDelay: `${i * 0.08}s` }}
            >
              <div className="letter-clip-wrapper">
                {/* Gambar dimasukkan sebagai background-image di sini */}
                <span 
                  className="letter-char" 
                  style={{ backgroundImage: `url(${l.img})` }}
                  data-char={l.char}
                >
                  {l.char}
                </span>
              </div>
              <span className="letter-ranger-name">{l.name}</span>
            </div>
          ))}
        </div>
        <div className="rangers-text-bottomline" />
      </div>
    </section>
  )
}