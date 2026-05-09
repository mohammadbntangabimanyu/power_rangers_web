import './App.css'
import CustomCursor from './components/CustomCursor'
import Hero from './components/Hero'
import About from './components/About'
import RangerGrid from './components/RangerGrid'
import MovieGallery from './components/MovieGallery'
import LookingSection from './components/LookingSection'
import RangersText from './components/RangersText'
import PosterFountain from './components/PosterFountain'

function App() {
  return (
    <div className="app">
      <CustomCursor />
      <Hero />
      <About />
      <RangerGrid />
      <MovieGallery />
      <PosterFountain />
      <LookingSection />
      <RangersText />
    </div>
  )
}

export default App
