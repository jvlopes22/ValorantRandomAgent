import styles from './Agents.module.css'

export function Agents() {
  return (
    <div className={styles.agentsContainer}>
      <div className={styles.agentsContent}>
        <img
          className={styles.thirdLeft} 
          src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/477284dfe402a85abcf6b07512bcd6f01c8fe60e-616x822.png?auto=format&fit=fill&q=80&w=352"
          alt="3rd Left Agent" 
        />
        <img
          className={styles.secondLeft} 
          src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/2c35cef9c38283f8478d1e808b1c129f371e50b3-616x822.png?auto=format&fit=fill&q=80&w=352"
          alt="2nd Left Agent" 
        />
        <img
          className={styles.firstLeft} 
          src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/51e62f3c74356a7501d06feba42ac643133257d7-616x822.png?auto=format&fit=fill&q=80&w=352" 
          alt="1st Left Agent" 
        />
        <img
          className={styles.middle} 
          src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/7cb513c9b3eae3286449776e85753138436d553c-616x822.png?auto=format&fit=fill&q=80&w=352" 
          alt="Middle Agent" 
        />
        <img
          className={styles.firstRight} 
          src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/9f02060077f9d61dbe89555a339e6231006d9b7b-616x822.png?auto=format&fit=fill&q=80&w=352" 
          alt="1st Right Agent" 
        />
        <img
          className={styles.secondRight} 
          src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/08b3d8822544bd327ebed0768c8b90fcec83d1a5-616x822.png?auto=format&fit=fill&q=80&w=352" 
          alt="2nd Right Agent" 
        />
        <img
          className={styles.thirdRight} 
          src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/40b4b242b68afe30d21e7f95bdcacaebca46ea60-616x822.png?auto=format&fit=fill&q=80&w=352" 
          alt="3rd Right Agent" 
        />
      </div>
    </div>
  )
}