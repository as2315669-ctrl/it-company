import { site } from '../../content/site'
import { Button } from '../ui/Button'
import styles from './CtaSection.module.css'

export function CtaSection() {
  return (
    <section id="contact" className={styles.section} aria-labelledby="cta-heading">
      <div className={styles.inner}>
        <h2 id="cta-heading" className={styles.title}>
          {site.cta.title}
        </h2>
        <p className={styles.text}>{site.cta.text}</p>
        <div className={styles.row}>
          <Button href={`mailto:${site.footer.email}`} variant="primary">
            {site.cta.button}
          </Button>
          <span className={styles.hint}>{site.footer.email}</span>
        </div>
      </div>
    </section>
  )
}
