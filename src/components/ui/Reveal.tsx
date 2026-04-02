import { useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import styles from './Reveal.module.css'

type RevealProps = {
  children: ReactNode
  className?: string
  /** Extra wait before the entrance animation starts (ms). */
  delayMs?: number
}

export function Reveal({ children, className = '', delayMs = 0 }: RevealProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const [reduceMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const [inView, setInView] = useState(false)

  useLayoutEffect(() => {
    if (reduceMotion) return
    const root = rootRef.current
    if (!root) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        setInView(!!entry?.isIntersecting)
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.06 },
    )
    obs.observe(root)
    return () => obs.disconnect()
  }, [reduceMotion])

  useLayoutEffect(() => {
    if (reduceMotion) return
    const inner = innerRef.current
    if (!inner) return
    if (inView) {
      inner.classList.remove(styles.run)
      void inner.offsetWidth
      inner.classList.add(styles.run)
    } else {
      inner.classList.remove(styles.run)
    }
  }, [inView, reduceMotion])

  const style: CSSProperties | undefined =
    delayMs > 0 ? { ['--reveal-delay' as string]: `${delayMs}ms` } : undefined

  return (
    <div ref={rootRef} className={className.trim()}>
      <div ref={innerRef} className={styles.inner} style={style}>
        {children}
      </div>
    </div>
  )
}
