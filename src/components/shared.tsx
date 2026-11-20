export const phone = 'tel:+15551234567'

export function Arrow() {
  return <span aria-hidden="true">→</span>
}

export function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Superior Auto Detail home">
      <span className="brand-mark">S</span>
      <span><strong>SUPERIOR</strong><small>AUTO DETAIL</small></span>
    </a>
  )
}
