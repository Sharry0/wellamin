
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
    <div style={{ fontFamily: "April_Fatface" }} className="footerLeft" >
      <Image src="/brand_icon.png" height={40} width={40} alt="wellamin logo" />
      <p>Wellamin</p>
    </div>
    <div className="footerRight">
      <div className="footerContact">
        <p><b> Contact Details </b></p>
        <p>548 Millbrook Road</p>
        <p>Naperville IL 60540</p>
        <p>info@wellamin.com</p>
        <div className="footerSocials">
          <Link href="https://linkedin.com" target="_blank" >
            <Image src="./lin.svg" height={25} width={25} alt="linkedin" />
          </Link>
          <Link href="https://facebook.com" target="_blank" >
            <Image src="./insta.svg" height={25} width={25} alt="facebook" />
          </Link>
          <Link href="https://instagram.com" target="_blank" >
            <Image src="./fb.svg" height={25} width={25} alt="instagram" />
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
  )
}
