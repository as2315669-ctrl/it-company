import { useState, type MouseEvent } from 'react'
import { site } from '../../content/site'
import { Logo } from '../brand/Logo'
import { Button } from '../ui/Button'
import styles from './Header.module.css'

function scrollToHash(href: string) {
  if (!href.startsWith('#') || href.length < 2) return
  const id = decodeURIComponent(href.slice(1))
  const el = document.getElementById(id)
  if (!el) return
  const reduceMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
}

export function Header() {
  const [open, setOpen] = useState(false)

  function onNavClick(e: MouseEvent<HTMLAnchorElement>, href: string) {
    if (!href.startsWith('#')) return
    e.preventDefault()
    scrollToHash(href)
    setOpen(false)
    window.history.replaceState(null, '', href)
  }

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
                <a
                  href={item.href}
                  className={styles.navLink}
                  onClick={(e) => onNavClick(e, item.href)}
                >
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
