import Image from 'next/image'
import Project from './Project'
import styles from '../styles/SelectedWork.module.css'

export default function SelectedWork() {
  return (
    <section>
        <h3>Selected Work</h3>
        <Project />
        <Project />
        <Project />
    </section>
  )
}
