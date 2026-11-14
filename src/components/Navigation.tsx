import { Arrow, Brand, phone } from './shared'

type NavigationProps = { menuOpen: boolean; onMenuToggle: () => void; onNavigate: () => void }

export function Navigation({ menuOpen, onMenuToggle, onNavigate }: NavigationProps) {
  return (
    <nav className="nav container hero-enter hero-enter-nav" aria-label="Main navigation">
      <Brand />
      <button className="menu-toggle" onClick={onMenuToggle} aria-expanded={menuOpen} aria-label="Toggle menu"><span /><span /></button>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="#services" onClick={onNavigate}>Services</a>
        <a href="#about" onClick={onNavigate}>Why us</a>
        <a href="#reviews" onClick={onNavigate}>Reviews</a>
        <a className="button button-small" href={phone}>Book a detail <Arrow /></a>
      </div>
    </nav>
  )
}
