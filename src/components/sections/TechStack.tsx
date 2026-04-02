import { site } from '../../content/site'
import styles from './TechStack.module.css'

const DEVICON_TAG = 'v2.16.0'

function iconSrc(iconPath: string) {
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@${DEVICON_TAG}/icons/${iconPath}.svg`
}

export function TechStack() {
  const { title, subtitle, items } = site.techStack
  const loopItems = [...items, ...items]

  return (
    <section id="tech" className={styles.section} aria-labelledby="tech-heading">
      <div className={styles.inner}>
        <div className={styles.panel}>
          <div className={styles.panelHeader} aria-hidden="true">
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
          </div>
          <div className={styles.panelBody}>
            <div className={styles.intro}>
              <h2 id="tech-heading" className={styles.title}>
                {title}
              </h2>
              <p className={styles.lead}>{subtitle}</p>
              <ul className="sr-only">
                {items.map((item) => (
                  <li key={item.name}>{item.name}</li>
                ))}
              </ul>
            </div>
            <div className={styles.marquee} aria-hidden="true">
              <div className={styles.track}>
                {loopItems.map((item, i) => {
                  const wide = 'wide' in item && item.wide
                  return (
                    <div key={`${item.name}-${i}`} className={styles.item}>
                      <div className={`${styles.logoWrap} ${wide ? styles.logoWrapWide : ''}`}>
                        <img
                          className={`${styles.logo} ${wide ? styles.logoWide : ''}`}
                          src={iconSrc(item.icon)}
                          alt=""
                          width={wide ? 120 : 64}
                          height={wide ? 44 : 64}
                          loading="lazy"
                          decoding="async"
                          aria-hidden="true"
                        />
                      </div>
                      <span className={styles.label}>{item.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
