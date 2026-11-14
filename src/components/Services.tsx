import { Reveal } from './Reveal'
import { Arrow, phone } from './shared'

const services = [
  { number: '01', title: 'Exterior Detail', price: 'From $149', text: 'A meticulous hand wash, paint decontamination, wheel care, and premium protection for a deep, lasting shine.' },
  { number: '02', title: 'Interior Detail', price: 'From $179', text: 'Deep vacuuming, steam cleaning, leather conditioning, and precise finishing across every surface and seam.' },
  { number: '03', title: 'Full Detail', price: 'From $289', text: 'Our complete inside-and-out reset. The ideal choice when your vehicle deserves the full Sanchez treatment.' },
]

export function Services() {
  return (
    <section className="section services container" id="services">
      <Reveal className="section-intro">
        <div><p className="eyebrow dark"><i /> Our services</p><h2>More than clean.<br /><em>Meticulously restored.</em></h2></div>
        <p>Every service is performed with professional-grade products and a standard of care that treats your vehicle like our own.</p>
      </Reveal>
      <div className="service-grid">
        {services.map((service, index) => (
          <Reveal as="article" className="service-card" delay={index * 110} key={service.number}>
            <span className="service-number">{service.number}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <div className="service-footer"><strong>{service.price}</strong><a href={phone} aria-label={`Book ${service.title}`}>Book now <Arrow /></a></div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
