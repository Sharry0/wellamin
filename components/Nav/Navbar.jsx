
import css from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className={css.navbar}>
      <nav className={css.nav}>
        <span style={{ fontFamily: "Aboreto" }} >
          <Link href="/" className={css.logo}>
            <Image src="/brand_icon.png" height={25} width={25} alt="wellamin logo" />
            Wellamin
          </Link>
        </span>
        <div className={css.navLinks} >
          <Link href="science/">Science</Link>
          <Link href="/news">News</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </div>
  )
}
