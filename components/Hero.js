import Image from 'next/image'
import { TbArrowUpRight } from "react-icons/tb";
import styles from '../styles/Hero.module.css'

export default function Hero() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Hello, I&apos;m</h2>
      <h1 className={styles.heading}>Jordan Blewer</h1>
      <h3>a web developer with a passion for building elegant user experiences.</h3>
      <div className={styles["link-container"]}>
      <div className={styles.link}>
        <a><TbArrowUpRight /><p>Twitter</p></a>
      </div>
      <div className={styles.link}>
        <a><TbArrowUpRight /><p>GitHub</p></a>
      </div>
      </div>
    </div>
  )
}
