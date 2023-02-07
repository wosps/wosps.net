import Project from './Project'
import styles from '../styles/SelectedWork.module.css'

export default function LatestWork() {
  return (
    <section>
      <div className={styles.header}>
        <h2 className={styles.heading}>Latest Work</h2>
      </div>
        <Project title="VinterMap" summary="An interactive web map built using Leaflet.js for the video-game ‘Longvinter’." img="/vintermap.png" />
        <Project title="Tagger for Letterboxd" summary="A browser extension that adds further functionality to ‘Letterboxd’ via my backend server and the tMDB API." img="/tagger.png" />
        <Project title="Colour Picker" summary="An interactive colour picker built using vanilla JavaScript and TheColorAPI." img="/colour.png" />
        <Project title="Example Project" summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dolor orci, euismod in ante at, volutpat tincidunt risus. " img="/stock.jpg" />
    </section>
  )
}