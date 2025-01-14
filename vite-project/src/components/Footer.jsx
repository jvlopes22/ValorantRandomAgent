import styles from './Footer.module.css'
import valorantLogo from '../assets/ValorantLogo.svg'

export function Footer() {
  return (
    <div className={styles.footerContainer}>
      <footer className={styles.footerContent}>
        <img onClick={() => window.open('https://playvalorant.com/')} src={valorantLogo} alt="Footer" />
        <p>Powered by L𝕠pps_ © 2025. All rights reserved.</p>
      </footer>
    </div>
  )
}