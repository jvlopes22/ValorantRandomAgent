import styles from './App.module.css'
import { Header } from './components/Header'
import { Agents } from './components/Agents'
import { Button } from './components/Button'
import { Footer } from './components/Footer'

const agentsData = [
  {
    id: 1,
    name: "Brimstone",
    image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/51e62f3c74356a7501d06feba42ac643133257d7-616x822.png?auto=format&fit=fill&q=80&w=352",
  },
  {
    id: 2,
    name: "Phoenix",
    image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/47387e354c34d51b84066bc47af3c5755b92b9c5-616x822.png?auto=format&fit=fill&q=80&w=352",
  },
  {
    id: 3,
    name: "Sage",
    image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/58a180961a14beb631877921e647c233804853c1-616x822.png?auto=format&fit=fill&q=80&w=352",
  },
  {
    id: 4,
    name: "Sova",
    image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/08b3d8822544bd327ebed0768c8b90fcec83d1a5-616x822.png?auto=format&fit=fill&q=80&w=352",
  },
  {
    id: 5,
    name: "Viper",
    image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/152244f121e61ca32bdd2bea9fc5370e315664fb-616x822.png?auto=format&fit=fill&q=80&w=352",
  },
  {
    id: 6,
    name: "Cypher",
    image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/4a648cdbcbbeef137050deefeaf6a1369c606666-616x822.png?auto=format&fit=fill&q=80&w=352",
  },
  {
    id: 7,
    name: "Reyna",
    image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/7cb513c9b3eae3286449776e85753138436d553c-616x822.png?auto=format&fit=fill&q=80&w=352",
  },
  {
    id: 8,
    name: "Killjoy",
    image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/820d36d431fff77b1e1ece39ad6f007746bd31f6-616x822.png?auto=format&fit=fill&q=80&w=352",
  },
  {
    id: 9,
    name: "Breach",
    image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/e435c3378b7999a3338b408dbb5da8ba63f91150-616x822.png?auto=format&fit=fill&q=80&w=352",
  },
  {
    id: 10,
    name: "Omen",
    image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/015a083717e9687de8a741cfceddb836775b5f9f-616x822.png?auto=format&fit=fill&q=80&w=352",
  },
  {
    id: 11,
    name: "Jett",
    image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/d41286dc9017bf79c0b4d907b7a260c27b0adb69-616x822.png?auto=format&fit=fill&q=80&w=352",
  },
  {
    id: 12,
    name: "Raze",
    image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/40b4b242b68afe30d21e7f95bdcacaebca46ea60-616x822.png?auto=format&fit=fill&q=80&w=352",
  },
  {
    id: 13,
    name: "Skye",
    image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/37ea1466beebb54aad4f16efbad184566cb80368-616x822.png?auto=format&fit=fill&q=80&w=352",
  },
  {
    id: 14,
    name: "Yoru",
    image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/05e1a996814dd10d7179efee327d29a7be00e912-616x822.png?auto=format&fit=fill&q=80&w=352",
  },
  {
    id: 15,
    name: "Astra",
    image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ba51d43803082941b0274b66413b0acc972546dd-616x822.png?auto=format&fit=fill&q=80&w=352",
  },
  {
    id: 16,
    name: "KAY/O",
    image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/fe52e0efac73ec782b19a54e98a4658b03677407-616x822.png?auto=format&fit=fill&q=80&w=352",
  },
  {
    id: 17,
    name: "Chamber",
    image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/0f5b668b77499c0051201389d6ac5e7343c9727f-616x822.png?auto=format&fit=fill&q=80&w=352",
  },
  {
    id: 18,
    name: "Neon",
    image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/14145d7bf9be17afa80c04ee4fbe200076cc1769-616x822.png?auto=format&fit=fill&q=80&w=352",
  },
  {
    id: 19,
    name: "Fade",
    image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/e7099cc13a665ed2b556d514e50984393ed49967-616x822.png?auto=format&fit=fill&q=80&w=352",
  },
  {
    id: 20,
    name: "Harbor",
    image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/1246b5c517f6c8fa660e884a7032c1c54994003e-616x822.png?auto=format&fit=fill&q=80&w=352",
  },
  {
    id: 21,
    name: "Gekko",
    image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/8d88f133f735f6a9077679b1ece754e5624c728e-616x822.png?auto=format&fit=fill&q=80&w=352",
  },
  {
    id: 22,
    name: "Deadlock",
    image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/477284dfe402a85abcf6b07512bcd6f01c8fe60e-616x822.png?auto=format&fit=fill&q=80&w=352",
  },
  {
    id: 23,
    name: "Iso",
    image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/2c35cef9c38283f8478d1e808b1c129f371e50b3-616x822.png?auto=format&fit=fill&q=80&w=352",
  },
  {
    id: 24,
    name: "Clove",
    image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/9f02060077f9d61dbe89555a339e6231006d9b7b-616x822.png?auto=format&fit=fill&q=80&w=352",
  },
  {
    id: 25,
    name: "Vyse",
    image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/370e4b820670ef0bac7e685f6e8c5e64d19f1890-587x900.png?auto=format&fit=fill&q=80&w=352",
  }
]

function getRandomAgents(array, count) {
  return [...array]
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
}
export function App() {

  const randomAgents = getRandomAgents(agentsData, 25);

  return (
    <div className={styles.page}>

      <Header className={styles.header}/>

      <Agents agents={randomAgents} />

      <Button className={styles.button}/>

      <Footer className={styles.footer}/>
      
    </div>
  )
}