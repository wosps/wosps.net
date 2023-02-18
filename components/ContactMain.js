
import Link from 'next/link'
import styles from '../styles/SelectedWork.module.css'
import local from '../styles/ContactMain.module.css'
import { MdEmail } from 'react-icons/md'
import { IoLogoLinkedin } from 'react-icons/io'

export default function ContactMain() {
  return (
    <section>
      <div className={styles.header}>
        <h2 className={styles.heading}>Contact Me!</h2>
      </div>
      <div className={local.main}>
        <p>Thanks for checking out my portfolio! I’m actively looking for new roles and projects, so feel free to reach out via one of the below options...</p>
        <ul className={local.links}>
          <li>
            <a href=''target='_blank' rel='noreferrer' className={local.link}>
              <MdEmail className={local.icon}/>
              <p>hello@wosps.net</p>
            </a>
          </li>
          <li>
            <a href=''target='_blank' rel='noreferrer' className={local.link}>
              <IoLogoLinkedin className={local.icon}/>
              <p>Jordan Blewer</p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}