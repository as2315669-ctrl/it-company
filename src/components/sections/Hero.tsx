import { useLayoutEffect, useRef, useState } from 'react'
import { site } from '../../content/site'
import { Button } from '../ui/Button'
import styles from './Hero.module.css'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const [reduceMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const [inView, setInView] = useState(true)

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
    const grid = gridRef.current
    if (!grid) return
    if (reduceMotion) {
      grid.classList.remove(styles.gridPlay)
      return
    }
    if (inView) {
      grid.classList.remove(styles.gridPlay)
      void grid.offsetWidth
      grid.classList.add(styles.gridPlay)
    } else {
      grid.classList.remove(styles.gridPlay)
    }
  }, [inView, reduceMotion])

  const { pipeline } = site.hero
  const lastIndex = pipeline.steps.length - 1

  return (
    <section ref={sectionRef} className={styles.hero} aria-labelledby="hero-heading">
      <div ref={gridRef} className={styles.grid}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{site.hero.eyebrow}</p>
          <h1 id="hero-heading" className={styles.headline}>
            {site.hero.headline}
          </h1>
          <p className={styles.sub}>{site.hero.sub}</p>
          <div className={styles.actions}>
            <Button href="#contact" variant="primary">
              {site.hero.primaryCta}
            </Button>
            <Button href="#services" variant="secondary">
              {site.hero.secondaryCta}
            </Button>
          </div>
        </div>
        <div className={styles.visual} aria-hidden="true">
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.dot} />
            </div>
            <div className={styles.cardBody}>
              <p className={styles.pipelineTitle}>{pipeline.title}</p>
              <ol className={styles.pipeline}>
                {pipeline.steps.map((step, index) => (
                  <li key={step.phase} className={styles.stepRow}>
                    <div className={styles.stepRail}>
                      <span className={styles.stepNode} />
                      {index < lastIndex ? <span className={styles.stepConnector} /> : null}
                    </div>
                    <div className={styles.stepText}>
                      <span className={styles.phase}>{step.phase}</span>
                      <span className={styles.detail}>{step.detail}</span>
                    </div>
                  </li>
                ))}
              </ol>
              <p className={styles.cardCaption}>{pipeline.caption}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
