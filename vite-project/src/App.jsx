import styles from './App.module.css'
import { Header } from './components/Header'
import { Agents } from './components/Agents'
import { Button } from './components/Button'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className={styles.page}>

      <Header className={styles.header}/>

      <Agents className={styles.agents}/>

      <Button className={styles.button}/>

      <Footer className={styles.footer}/>
      
    </div>
  )
}