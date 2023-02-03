import Image from 'next/image'
import styles from '../styles/Hero.module.css'

export default function Hero() {
  return (
    <>
    <h3 class={styles.heading}>Hello, I'm</h3>
    <h1 class={styles.heading}>Jordan Blewer</h1>
    <p>a web developer with a passion for building elegant user experiences.</p>
    </>
  )
}
