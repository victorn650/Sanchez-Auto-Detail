import { Reveal } from './Reveal'

export function Reviews() {
  return (
    <Reveal as="section" className="review" id="reviews">
      <div className="quote-mark">“</div>
      <blockquote>My car looks better than the day I bought it. The attention to detail is unmatched—and they came right to my driveway.</blockquote>
      <div className="reviewer"><span>JM</span><div><strong>Jordan M.</strong><small>Full detail customer</small></div></div>
    </Reveal>
  )
}
