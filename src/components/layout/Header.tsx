import { useState } from 'react'
import { site } from '../../content/site'
import { Logo } from '../brand/Logo'
import { Button } from '../ui/Button'
import styles from './Header.module.css'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="/" className={styles.logoLink} onClick={() => setOpen(false)}>
          <Logo size={36} withWordmark />
        </a>

        <button
          type="button"
          className={styles.menuBtn}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Menu</span>
          <span className={styles.bars} data-open={open} />
        </button>

        <nav id="site-nav" className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            {site.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={styles.navLink} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href="#contact" variant="primary" className={styles.cta}>
            {site.hero.primaryCta}
          </Button>
        </nav>
      </div>
    </header>
  )
}
