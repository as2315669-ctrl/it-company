import { useLayoutEffect, useRef, useState } from 'react'
import { site } from '../../content/site'
import styles from './Process.module.css'

export function Process() {
  const sectionRef = useRef<HTMLElement>(null)
  const playRef = useRef<HTMLDivElement>(null)
  const [reduceMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const [inView, setInView] = useState(false)

  useLayoutEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        setInView(!!entry?.isIntersecting)
      },
      { threshold: 0.12, rootMargin: '0px' },
    )
    obs.observe(section)
    return () => obs.disconnect()
  }, [])

  useLayoutEffect(() => {
    const el = playRef.current
    if (!el) return
    if (reduceMotion) {
      el.classList.remove(styles.processPlay)
      return
    }
    if (inView) {
      el.classList.remove(styles.processPlay)
      void el.offsetWidth
      el.classList.add(styles.processPlay)
    } else {
      el.classList.remove(styles.processPlay)
    }
  }, [inView, reduceMotion])

  return (
    <section ref={sectionRef} id="process" className={styles.section} aria-labelledby="process-heading">
      <div ref={playRef} className={styles.inner}>
        <h2 id="process-heading" className={styles.title}>
          {site.process.title}
        </h2>
        <p className={styles.subtitle}>{site.process.subtitle}</p>
        <ol className={styles.steps}>
          {site.process.steps.map((step) => (
            <li key={step.n} className={styles.step}>
              <span className={styles.badge}>{step.n}</span>
              <div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
