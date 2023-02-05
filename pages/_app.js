import '../styles/globals.css'
import { Lato } from '@next/font/google'

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return (
    <main className={lato.className}>
      <Component {...pageProps} />
    </main>
  )
}
