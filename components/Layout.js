import Navigation from './Navigation'
import Hero from './Hero'
import Footer from './Footer'

import styles from '../styles/Layout.module.css'

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Navigation /> 
            <Hero/>
            <main>{children}</main>
            <Footer />
        </div>
    )
}