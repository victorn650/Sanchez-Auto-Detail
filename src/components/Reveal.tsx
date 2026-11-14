import { createElement, type CSSProperties, type ElementType, type ReactNode, useEffect, useRef, useState } from 'react'

type RevealProps = {
  as?: ElementType
  children: ReactNode
  className?: string
  delay?: number
  id?: string
  threshold?: number
}

export function Reveal({ as = 'div', children, className = '', delay = 0, id, threshold = 0.15 }: RevealProps) {
  const elementRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      setIsVisible(true)
      observer.unobserve(entry.target)
    }, { threshold, rootMargin: '0px 0px -8% 0px' })

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold])

  const style = { '--reveal-delay': `${delay}ms` } as CSSProperties

  return createElement(as, {
    ref: elementRef,
    className: `reveal ${isVisible ? 'is-visible' : ''} ${className}`.trim(),
    id,
    style,
  }, children)
}
