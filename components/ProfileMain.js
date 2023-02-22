import Link from 'next/link'
import Image from 'next/image'
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
        <div className={more.maincontain}>
          <p>Hello, I&apos;m Jordan - a web developer and designer based in Essex, England. With a passion for coding and a love for problem-solving, I&apos;ve built multiple projects using HTML, CSS, JS and React. I&apos;m excited to bring my enthusiasm and experience to a professional environment and collaborate with a talented team to create innovative and user-friendly websites!</p>
          <Image className={more.img} src="/blob.png" alt="Profile Picture" width={200} height={229} />
        </div>
        <h3>Skills</h3>
        <div className={more.skills}>
          <div className={more.row}>
              <div className={more.skill}><TbBrandHtml5 /> HTML</div>
              <div className={more.skill}><TbBrandCss3 /> CSS</div>
          </div>
          <div className={more.row}>
              <div className={more.skill}><TbBrandJavascript /> JavaScript</div>
              <div className={more.skill}><TbGitFork /> Git</div> 
          </div>
          <div className={more.row}>
              <div className={more.skill}><TbBrandReactNative /> React</div>
              <div className={more.skill}><TbBrandNextjs /> Next.js</div> 
          </div>
          <div className={more.row}>
              <div className={more.skill}><FaNodeJs /> Node.js</div>
              <div className={more.skill}><TbApi /> RESTful</div> 
          </div>
        </div>
      </div>
    </section>
    )
  }