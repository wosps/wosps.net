import { TbBrandNextjs } from "react-icons/tb";
import styles from '../styles/Footer.module.css'

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <p>Made with <TbBrandNextjs /> by Jordan Blewer</p>
        </footer>
    )
}