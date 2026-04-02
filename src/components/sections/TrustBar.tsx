import { site } from '../../content/site'
import styles from './TrustBar.module.css'

export function TrustBar() {
  return (
    <section id="trust" className={styles.section} aria-labelledby="trust-heading">
      <div className={styles.inner}>
        <div className={styles.panel}>
          <div className={styles.panelHeader} aria-hidden="true">
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
          </div>
          <div className={styles.panelBody}>
            <div className={styles.intro}>
              <h2 id="trust-heading" className={styles.title}>
                {site.trust.title}
              </h2>
              <p className={styles.subtitle}>{site.trust.subtitle}</p>
            </div>
            <ul className={styles.stats}>
              {site.trust.stats.map((s) => (
                <li key={s.label} className={styles.stat}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </li>
              ))}
            </ul>
            <ul className={styles.badges}>
              {site.trust.badges.map((b) => (
                <li key={b} className={styles.badge}>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
