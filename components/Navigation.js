import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Navigation.module.css'

export default function Navigation() {
  return (
    <nav className={styles.container}>
      <div>
        <Link href='/'><Image src="/logo.png" min-width="30" width="30" height="30" alt='Logo'/></Link>
      </div>
      <div className={styles.navlinks}>
        <h2>Profile</h2>
        <Link className={styles.link} href="/work"><h2>Work</h2></Link>
        <h2>Contact</h2>
      </div>
    </nav>
  )
}
