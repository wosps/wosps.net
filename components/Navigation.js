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
        <Link className={styles.link} href="/profile"><h3>Profile</h3></Link>
        <Link className={styles.link} href="/work"><h3>Work</h3></Link>
        <Link className={styles.link} href="/contact"><h3>Contact</h3></Link>
      </div>
    </nav>
  )
}
