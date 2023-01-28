import '../styles/globals.css'
import Navbar from '../components/nav/navbar'
import { Open_Sans, Aboreto } from '@next/font/google'

const open_san = Open_Sans({
  weight: '400',
  variable:"--font-open-san",
  subsets: ['latin'],
})


export default function App({ Component, pageProps }) {
  return (
    <main className={open_san.className}>
      <Navbar />
      <Component {...pageProps} />
      {/* <div style={{ height: "300vh" }} >DIV 5567</div> */}
    </main>
  )
}
