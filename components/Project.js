import Image from 'next/image'
import styles from '../styles/Project.module.css'
import { TbArrowUpRight } from "react-icons/tb";

export default function Project(props) {
  return (
    <div className={styles.container}>
      <div className={styles["section-left"]}>  
        <h1>Image</h1>
      </div>
      <div className={styles["section-right"]}> 
        <div className={styles["project-text"]}>
          <h3>{props.title}</h3>
          <p>{props.summary}</p>
        </div>
        <div className={styles["project-links"]}>
          <a className={styles.link}>
            <TbArrowUpRight className={styles.icon} />
            <p>Learn More</p>
          </a>
          <a className={styles.link}>
            <TbArrowUpRight className={styles.icon} />
            <p>Visit Site</p>
          </a>
        </div>
      </div>
    </div>
  )
}