import { site } from '../../content/site'
import styles from './Testimonial.module.css'

export function Testimonial() {
  return (
    <section className={styles.section} aria-label="Client testimonial">
      <div className={styles.inner}>
        <blockquote className={styles.quote}>
          <p>“{site.testimonial.quote}”</p>
          <footer>
            <cite className={styles.author}>{site.testimonial.author}</cite>
            <span className={styles.role}>{site.testimonial.role}</span>
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
