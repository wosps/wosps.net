import '../styles/globals.css'
import { Lato } from '@next/font/google'
import Layout from '../components/Layout'

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return (
    <main className={lato.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}
