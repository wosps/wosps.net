import Image from 'next/image'
import styles from '../styles/Navigation.module.css'

export default function Navigation() {
  return (
    <nav class={styles.container}>
      <div>
        <Image src="/logo.png" width="40" height="40"/>
      </div>
      <div class={styles.navlinks}>
        <h3>Profile</h3>
        <h3>Work</h3>
        <h3>Contact</h3>
      </div>
    </nav>
  )
}
