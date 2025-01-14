import styles from './Button.module.css'
import buttonText from '../assets/ButtonText.svg'

export function Button() {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.buttonContent}>
        <img src={buttonText} alt="" />
      </button>
    </div>
  )
}