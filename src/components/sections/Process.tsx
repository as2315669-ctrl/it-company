import { site } from '../../content/site'
import styles from './Process.module.css'

export function Process() {
  return (
    <section id="process" className={styles.section} aria-labelledby="process-heading">
      <div className={styles.inner}>
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
