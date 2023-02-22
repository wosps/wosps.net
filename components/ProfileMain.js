import Link from 'next/link'
import styles from '../styles/SelectedWork.module.css'
import more from '../styles/ProfileMain.module.css'
import { TbBrandHtml5, TbBrandCss3, TbBrandJavascript, TbBrandReactNative, TbBrandNextjs, TbGitFork, TbApi } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";

export default function ProfileMain() {
  return (
    <section>
      <div className={styles.header}>
        <h3 className={styles.heading}>About Me...</h3>
      </div>
      <div className={styles.profilecontent}>
        <p>Hello, I&apos;m Jordan - a web developer and designer based in Essex, England. With a passion for coding and a love for problem-solving, I&apos;ve built multiple projects using HTML, CSS, JS and React. I&apos;m excited to bring my enthusiasm and experience to a professional environment and collaborate with a talented team to create innovative and user-friendly websites!</p>
        <h3>Skills</h3>
        <div className={more.skills}>
          <div className={more.col}>
            <ul>
              <li><TbBrandHtml5 /> HTML</li>
              <li><TbBrandCss3 /> CSS</li>
              <li><TbBrandJavascript /> JavaScript</li>
              <li><TbGitFork /> Git</li>
            </ul>
          </div>
          <div className={more.col}>
          <ul>
              <li><TbBrandReactNative /> React</li>
              <li><TbBrandNextjs /> Next.js</li>
              <li><FaNodeJs /> Node.js</li>
              <li><TbApi /> RESTful</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}