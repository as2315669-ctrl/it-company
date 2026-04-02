import styles from './AmbientBackground.module.css'

/** Full-page moving backdrop (fixed); does not capture pointer events. */
export function AmbientBackground() {
  return (
    <div className={styles.root} aria-hidden="true">
      <div className={`${styles.blob} ${styles.blob1}`} />
      <div className={`${styles.blob} ${styles.blob2}`} />
      <div className={`${styles.blob} ${styles.blob3}`} />
      <div className={`${styles.blob} ${styles.blob4}`} />
      <div className={styles.grid} />
      <div className={styles.beam} />
      <div className={styles.beamAlt} />
      <div className={styles.vignette} />
    </div>
  )
}
