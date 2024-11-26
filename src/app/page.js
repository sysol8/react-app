import styles from './page.module.css'

export default function Home() {
  return (
      <div className={styles.pageContent}>
        <div className={styles.widgetContainer}>
          <div className={styles.widgetContent}>SEGGS</div>
        </div>
        <div className={styles.widgetContainer}>Seggs</div>
      </div>
  )
}