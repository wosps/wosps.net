import Head from 'next/head'
import styles from '../styles/Index.module.css'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import ContactMain from '../components/ContactMain'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Jordan Blewer / Work</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <ContactMain />
    </>
  )
}
