import { Reveal } from './Reveal'
import { Arrow, phone } from './shared'

export function Standard() {
  return (
    <section className="standard" id="about">
      <Reveal className="standard-image reveal-image" threshold={0.1}><span className="experience"><strong>7+</strong><small>Years of experience</small></span></Reveal>
      <Reveal className="standard-copy" delay={140}>
        <p className="eyebrow dark"><i /> The Sanchez standard</p>
        <h2>Details make<br /><em>the difference.</em></h2>
        <p>We built Sanchez Auto Detailing around one simple belief: your car should leave looking better than you thought possible.</p>
        <ul><li>Professional-grade products</li><li>Fully mobile and convenient</li><li>Licensed, insured, and trusted</li></ul>
        <a className="button button-dark" href={phone}>Get your free quote <Arrow /></a>
      </Reveal>
    </section>
  )
}
