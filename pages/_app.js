import '../styles/globals.css'
// import Navbar from '../Components/Navi/Navbar';
import { Open_Sans, Aboreto, Abril_Fatface } from '@next/font/google';

const aboreto = Aboreto({
  weight: '400',
  variable: "--font-aboreto",
  subsets: ['latin'],
})
const abril_fatface = Abril_Fatface({
  weight: '400',
  variable: "--font-aboreto",
  subsets: ['latin'],
})
const open_san = Open_Sans({
  weight: '400',
  variable: "--font-open-san",
  subsets: ['latin'],
})


export default function App({ Component, pageProps }) {
  return (
    <main className={`${aboreto.className} ${abril_fatface.className} ${open_san.className} `}>
      {/* <Navbar /> */}
      <Component {...pageProps} />
    </main>
  )
}
