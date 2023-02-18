import Link from 'next/link'
import styles from '../styles/SelectedWork.module.css'

export default function ProfileMain() {
  return (
    <section>
      <div className={styles.header}>
        <h2 className={styles.heading}>About Me...</h2>
      </div>
      <p>Hello, I'm Jordan! I'm a self-taught frontend developer from Essex, England.</p>
    </section>
  )
}