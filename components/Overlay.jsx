import { forwardRef } from "react";
import Image from "next/image";
import Link from "next/link";
// import { Aboreto } from "@next/font/google";

// const aboreto = Aboreto({
//   weight: '400',
//   variable: "--font-aboreto",
//   subsets: ['latin'],
// })

const Overlay = forwardRef(({ scroll, progressbar }, ref) => (
  <>
    <div
      className='scroll'
      ref={ref}
      onScroll={(e) => {
        scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
        progressbar.current.value = scroll.current
      }}
    >
      <div style={{ height: "90vh" }}>
        <progress ref={progressbar} className="pageProgress" max="1" value="0"> </progress>
        <div className="text ">
          <h1 style={{ fontFamily: "April_Fatface" }} >Wellamin</h1>
          <span className="downIcon">
            <Image fill src="Down_icon.svg" alt="icon" />
          </span>
          {/* <p>Boost your health and immunity with our top-quality vitamin supplements. Shop now and feel the difference!</p> */}
          {/* Elevate your overall health and wellness with our Multivitamin complex. Packed with essential vitamins and minerals for optimal nutrition. Support your energy levels and overall health with just one daily dose. */}
        </div>
      </div>
      <div style={{ height: "90vh" }}>
        <div className="text">
          <div>
            Elevate your overall health and wellness with our Multivitamin complex. Packed with essential vitamins and minerals for optimal nutrition. Support your energy levels and overall health with just one daily dose. </div>
        </div>
      </div>
      <div style={{ height: "90vh" }}>
        <div className="text">
          <div>
            Incorporating Vitamin A in our multivitamin formula ensures that your body gets the daily support it needs to function at its best and promote a healthy, balanced diet. </div>
        </div>
      </div>
      <div style={{ height: "90vh" }}>
        <div className="text">
          <div>
            Say goodbye to feelings of fatigue and exhaustion with our Vitamin B supplement. With a range of B vitamins included, our multivitamin complex helps to boost energy levels and support a healthy metabolism. </div>
        </div>
      </div>
      <div style={{ height: "90vh" }}>
        <div className="text">
          <div>
            Support your immune system and maintain optimal health with our Vitamin D3 supplement. Made with natural ingredients for maximum effectiveness. </div>
        </div>
      </div>
      <div style={{ height: "90vh" }}>
        <div className="text">
          <div>
            Feel the difference with our Vitamin E supplement. A powerful antioxidant that supports healthy skin, hair and nails, this essential vitamin also helps to boost overall health and wellness</div>
        </div>
      </div>
      <div className="footerDiv" >
        <footer className="footer">
          <div style={{ fontFamily: "April_Fatface" }} >
            <Image src="/brand_icon.png" height={40} width={40} />
            <p>Wellamin &copy; 2023</p>
          </div>
          <div className="footerRight">

            <div className="footerContact">
              <p><b> Contact Details </b></p>
              <p>548 Millbrook Road</p>
              <p>Naperville IL 60540</p>
              <p>info@wellamin.com</p>
              <div className="footerSocials">
                <Link href="https://linkedin.com" target="_blank" >
                  <Image src="./lin.svg" height={25} width={25} />
                </Link>
                <Link href="https://facebook.com" target="_blank" >
                  <Image src="./insta.svg" height={25} width={25} />
                </Link>
                <Link href="https://instagram.com" target="_blank" >
                  <Image src="./fb.svg" height={25} width={25} />
                </Link>
              </div>
            </div>
            <div className="footerPages">
              <p><b> Pages </b></p>
              <Link href="science/">Science</Link>
              <Link href="/news">News</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </footer>
      </div>

    </div>

  </>
))
Overlay.displayName = "Overlay";
export default Overlay
