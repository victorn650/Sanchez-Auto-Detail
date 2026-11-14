import { useState } from 'react'
import { CallToAction } from './components/CallToAction'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Reviews } from './components/Reviews'
import { Services } from './components/Services'
import { Standard } from './components/Standard'
import './App.css'
import './animations.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="site-shell">
      <Hero
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((open) => !open)}
        onNavigate={() => setMenuOpen(false)}
      />
      <main>
        <Services />
        <Standard />
        <Reviews />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

export default App
