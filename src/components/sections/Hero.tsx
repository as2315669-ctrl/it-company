import { site } from '../../content/site'
import { Button } from '../ui/Button'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.grid}>
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
              <div className={styles.metric}>
                <span className={styles.metricLabel}>Deployments / week</span>
                <span className={styles.metricValue}>42</span>
              </div>
              <div className={styles.bars}>
                <div className={styles.bar} style={{ height: '40%' }} />
                <div className={styles.bar} style={{ height: '65%' }} />
                <div className={styles.bar} style={{ height: '50%' }} />
                <div className={styles.bar} style={{ height: '88%' }} />
                <div className={styles.bar} style={{ height: '72%' }} />
              </div>
              <p className={styles.cardCaption}>Illustrative — your metrics, your tools.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
