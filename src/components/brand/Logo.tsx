import styles from './Logo.module.css'

type LogoProps = {
  /** Pixel size of the mark (square). */
  size?: number
  className?: string
  /** Show wordmark next to mark */
  withWordmark?: boolean
}

/** Custom mark: three linked nodes — suggests networks, integration, reliability. */
export function Logo({ size = 40, className, withWordmark }: LogoProps) {
  return (
    <span className={`${styles.wrap} ${className ?? ''}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.mark}
        aria-hidden={withWordmark ? true : undefined}
        role={withWordmark ? undefined : 'img'}
      >
        {!withWordmark && <title>Nexora Systems</title>}
        <rect
          x="1"
          y="1"
          width="46"
          height="46"
          rx="12"
          className={styles.frame}
        />
        <circle cx="14" cy="24" r="5" className={styles.node} />
        <circle cx="34" cy="14" r="5" className={styles.node} />
        <circle cx="34" cy="34" r="5" className={styles.nodeAccent} />
        <path
          d="M18.5 22.5 L29.5 16.5 M18.5 25.5 L29.5 31.5 M29.5 18.5 L29.5 29.5"
          className={styles.links}
          strokeLinecap="round"
        />
      </svg>
      {withWordmark && (
        <span className={styles.wordmark}>
          <span className={styles.brand}>Nexora</span>
          <span className={styles.sub}>Systems</span>
        </span>
      )}
    </span>
  )
}
