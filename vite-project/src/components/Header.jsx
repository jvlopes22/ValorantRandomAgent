import styles from './Header.module.css'
import title from '../assets/Header.svg'

export function Header() {
  return (
    <div className={styles.headerContainer}>
      <header className={styles.headerContent}>
        <img src={title} alt="Title: Choose Your Agent" />
      </header>   
    </div>
  )
}    