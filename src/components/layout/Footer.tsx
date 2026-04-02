import { site } from '../../content/site'
import { Logo } from '../brand/Logo'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.col}>
          <Logo size={32} withWordmark />
          <p className={styles.note}>{site.footer.note}</p>
        </div>
        <div className={styles.col}>
          <h3 className={styles.heading}>Contact</h3>
          <a href={`mailto:${site.footer.email}`} className={styles.link}>
            {site.footer.email}
          </a>
          <p className={styles.muted}>{site.footer.phone}</p>
          <p className={styles.muted}>{site.footer.address}</p>
        </div>
        <div className={styles.col}>
          <h3 className={styles.heading}>Explore</h3>
          <ul className={styles.links}>
            {site.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={styles.link}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.bar}>
        <p>
          © {new Date().getFullYear()} {site.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
