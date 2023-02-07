import Image from 'next/image'
import Link from 'next/link'
import Project from './Project'
import { TbArrowRight } from "react-icons/tb";
import styles from '../styles/SelectedWork.module.css'

export default function SelectedWork() {
  return (
    <section>
      <div className={styles.header}>
        <h2 className={styles.heading}>Selected Work</h2>
        <Link className={styles.flex+ ' ' + styles.link} href='/work'><h3>View More</h3>
          <TbArrowRight className={styles.icon} /></Link>
      </div>
        <Project title="VinterMap" summary="An interactive web map built using Leaflet.js for the video-game ‘Longvinter’." img="/vintermap.png" />
        <Project title="Tagger for Letterboxd" summary="A browser extension that adds further functionality to ‘Letterboxd’ via my backend server and the tMDB API." img="/tagger.png" />
        <Project title="Colour Picker" summary="An interactive colour picker built using vanilla JavaScript and TheColorAPI." img="/colour.png" />
    </section>
  )
}