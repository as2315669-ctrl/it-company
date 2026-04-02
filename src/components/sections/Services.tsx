import { site } from '../../content/site'
import styles from './Services.module.css'

export function Services() {
  return (
    <section id="services" className={styles.section} aria-labelledby="services-heading">
      <div className={styles.inner}>
        <div className={styles.panel}>
          <div className={styles.panelHeader} aria-hidden="true">
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
          </div>
          <div className={styles.panelBody}>
            <div className={styles.intro}>
              <h2 id="services-heading" className={styles.title}>
                What we deliver
              </h2>
              <p className={styles.lead}>
                Service bundles similar to established IT consultancies: clear scopes, named outcomes, and
                documentation your team can run without us.
              </p>
            </div>
            <ul className={styles.grid}>
              {site.services.map((s) => (
                <li key={s.title} className={styles.card}>
                  <h3 className={styles.cardTitle}>{s.title}</h3>
                  <p className={styles.cardText}>{s.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
