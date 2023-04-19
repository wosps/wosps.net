import Image from 'next/image'
import Link from 'next/link'
import Project from './Project'
import { TbArrowRight } from "react-icons/tb";
import styles from '../styles/SelectedWork.module.css'

export default function SelectedWork() {
  return (
    <section>
      <div className={styles.header}>
        <h3 className={styles.heading}>Selected Work</h3>
        <Link className={styles.flex+ ' ' + styles.link} href='/work'><p>View More</p>
          <TbArrowRight className={styles.icon} /></Link>
      </div>
        <Project title="Intruder Rooms" summary="A room browser and profile viewer for the video game, 'Intruder'." img="/intruder.png" slug="intruder-rooms" link="https://intruder.wosps.net" />
        <Project title="Vinter Map" summary="An interactive web map built using Leaflet.js for the video-game ‘Longvinter’." img="/vintermap.png" link="https://vintermap.co" slug='vintermap'/>
        <Project title="Tagger for Letterboxd" summary="A web extension allowing users to automate the process of tagging films on Letterboxd." img="/tagger.png" link="https://chrome.google.com/webstore/detail/tagger-for-letterboxd/pbjbeepjhedfccldgdfcjaagimndlema?hl=en-GB" slug="tagger"/>
    </section>
  )
}