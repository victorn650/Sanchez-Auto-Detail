import { Navigation } from './Navigation'
import { Arrow, phone } from './shared'

type HeroProps = { menuOpen: boolean; onMenuToggle: () => void; onNavigate: () => void }

export function Hero({ menuOpen, onMenuToggle, onNavigate }: HeroProps) {
  return (
    <header className="hero" id="top">
      <div className="hero-image" role="img" aria-label="Black sports car being washed in a detailing studio" />
      <div className="hero-overlay" />
      <Navigation menuOpen={menuOpen} onMenuToggle={onMenuToggle} onNavigate={onNavigate} />
      <div className="hero-content container">
        <p className="eyebrow hero-enter hero-enter-1"><i /> Premium mobile detailing</p>
        <h1 className="hero-enter hero-enter-2">Drive clean.<br /><em>Feel different.</em></h1>
        <p className="hero-copy hero-enter hero-enter-3">Professional auto detailing with obsessive attention to every finish, surface, and reflection.</p>
        <div className="hero-actions hero-enter hero-enter-4">
          <a className="button" href={phone}>Schedule your detail <Arrow /></a>
          <a className="text-link" href="#services">Explore services <Arrow /></a>
        </div>
      </div>
      <div className="metrics container">
        <div><strong>4.9</strong><span>Google rating</span></div>
        <div><strong>500+</strong><span>Cars detailed</span></div>
        <div><strong>100%</strong><span>Satisfaction</span></div>
      </div>
    </header>
  )
}
