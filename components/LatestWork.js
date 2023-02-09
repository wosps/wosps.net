import Link from 'next/link'


import Project from './Project'
import styles from '../styles/SelectedWork.module.css'


export default function LatestWork(props) {
  return (
    <section>
      <div className={styles.header}>
        <h2 className={styles.heading}>Latest Work</h2>
      </div>
        {/* <Project title="VinterMap" summary="An interactive web map built using Leaflet.js for the video-game ‘Longvinter’." img="/vintermap.png" /> */}
    </section>
  )
}