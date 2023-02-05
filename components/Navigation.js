import Image from 'next/image'
import styles from '../styles/Navigation.module.css'

export default function Navigation() {
  return (
    <nav className={styles.container}>
      <div>
        <Image src="/logo.png" min-width="40" width="40" height="40" alt='Logo'/>
      </div>
      <div className={styles.navlinks}>
        <h2>Profile</h2>
        <h2>Work</h2>
        <h2>Contact</h2>
      </div>
    </nav>
  )
}
