import { SiNextdotjs } from "react-icons/si";
import styles from '../styles/Footer.module.css'

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <p>Made with <SiNextdotjs /> by Jordan Blewer</p>
        </footer>
    )
}