import Image from 'next/image'
import styles from '../styles/Project.module.css'

export default function Project() {
  return (
    <div className={styles.container}>
      <div className={styles["project-left"]}>  
        <h1>test</h1>
      </div>
      <div className={styles["project-right"]}>  
        <h3>Vinter Map</h3>
        <p>An interactive web map built using Leaflet.js for the video-game ‘Longvinter’.</p>
      </div>
    </div>
  )
}
