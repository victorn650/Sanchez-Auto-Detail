import { Reveal } from './Reveal'
import { Arrow, phone } from './shared'

export function CallToAction() {
  return (
    <Reveal as="section" className="cta">
      <p className="eyebrow"><i /> Ready when you are</p>
      <h2>Give your car the care<br /><em>it deserves.</em></h2>
      <p>Call or text us for a fast, free quote.</p>
      <a className="button" href={phone}>Call (555) 123–4567 <Arrow /></a>
    </Reveal>
  )
}
