import { useState, useRef } from 'react'

import poster1 from '../assets/posters/POSTER_1.jpeg'
import poster2 from '../assets/posters/POSTER_2.jpeg'
import poster3 from '../assets/posters/POSTER_3.jpeg'
import poster4 from '../assets/posters/POSTER_4.jpeg'
import poster5 from '../assets/posters/POSTER_5.jpeg'

const MOVIES = [
  {
    id: 1,
    poster: poster1,
    title: 'Mighty Morphin Power Rangers: The Movie',
    year: '1995',
    url: 'https://www.youtube.com/results?search_query=mighty+morphin+power+rangers+the+movie+1995',
  },
  {
    id: 2,
    poster: poster2,
    title: 'Turbo: A Power Rangers Movie',
    year: '1997',
    url: 'https://www.youtube.com/results?search_query=turbo+power+rangers+movie+1997',
  },
  {
    id: 3,
    poster: poster3,
    title: 'Power Rangers',
    year: '2017',
    url: 'https://www.youtube.com/results?search_query=power+rangers+2017+full+movie',
  },
  {
    id: 4,
    poster: poster4,
    title: 'Power Rangers Dino Fury',
    year: '2021',
    url: 'https://www.youtube.com/results?search_query=power+rangers+dino+fury',
  },
  {
    id: 5,
    poster: poster5,
    title: 'Power Rangers Cosmic Fury',
    year: '2023',
    url: 'https://www.youtube.com/results?search_query=power+rangers+cosmic+fury+netflix',
  },
]

export default function MovieGallery() {
  const [hoveredId, setHoveredId] = useState(null)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const sectionRef = useRef(null)

  const handleMouseMove = (e, id) => {
    const card = e.currentTarget.getBoundingClientRect()
    setCursorPos({
      x: e.clientX - card.left,
      y: e.clientY - card.top,
    })
    setHoveredId(id)
  }

  return (
    <section className="movie-gallery" ref={sectionRef}>
      {/* Section header */}
      <div className="movie-gallery-header">
        <div className="section-title">
          <span>FILMOGRAFI</span>
          TONTON FILMNYA
        </div>
        <p className="movie-gallery-sub">
          Hover poster — klik untuk nonton
        </p>
      </div>

      {/* Poster grid */}
      <div className="movie-grid">
        {MOVIES.map((movie) => {
          const isHovered = hoveredId === movie.id
          return (
            <a
              key={movie.id}
              href={movie.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`movie-card ${isHovered ? 'movie-card--hovered' : ''}`}
              onMouseMove={(e) => handleMouseMove(e, movie.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Poster image */}
              <img
                src={movie.poster}
                alt={movie.title}
                className="movie-poster-img"
                draggable={false}
              />

              {/* Dark overlay */}
              <div className="movie-overlay" />

              {/* "Nonton?" label follows cursor inside card */}
              {isHovered && (
                <div
                  className="nonton-label"
                  style={{
                    left: cursorPos.x,
                    top: cursorPos.y,
                  }}
                >
                  <span className="nonton-text">Nonton?</span>
                  <span className="nonton-arrow">↗</span>
                </div>
              )}

              {/* Bottom info */}
              <div className="movie-info">
                <span className="movie-year">{movie.year}</span>
                <h3 className="movie-title">{movie.title}</h3>
              </div>

              {/* Colored glow border on hover */}
              <div className="movie-glow-border" />
            </a>
          )
        })}
      </div>
    </section>
  )
}
