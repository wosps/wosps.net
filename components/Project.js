import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Project.module.css'
import { TbArrowUpRight } from "react-icons/tb";

export default function Project(props) {
  return (
    <div className={styles.container}>
      <div className={styles["section-left"]}>  
        <Image src={props.img} width="400" height="100" alt={props.title} className={styles.cover}/>
      </div>
      <div className={styles["section-right"]}> 
        <div className={styles["project-text"]}>
          <h3>{props.title}</h3>
          <p>{props.summary}</p>
        </div>
        <div className={styles["project-links"]}>
          <Link href={`post/${props.slug}`} className={styles.link}>
            <TbArrowUpRight className={styles.icon} />
            <p>Learn More</p>
          </Link>
          <a href={props.link} className={styles.link}>
            <TbArrowUpRight className={styles.icon} />
            <p>Visit Site</p>
          </a>
        </div>
      </div>
    </div>
  )
}
