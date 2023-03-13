
import css from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const activeNavlLink = {
    fontWeight: "bold",
    textDecoration: "underline"
  }
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
          <Link href="/science" style={router.pathname == "/science" ? activeNavlLink : {}} >Science</Link>
          <Link href="/news" style={router.pathname == "/news" ? activeNavlLink : {}} >News</Link>
          <Link href="/about" style={router.pathname == "/about" ? activeNavlLink : {}} >About</Link>
          <Link href="/contact" style={router.pathname == "/contact" ? activeNavlLink : {}} >Contact</Link>
        </div>
        <div className={css.hamburgerContainer} onClick={() => setHamburgerOpen(!hamburgerOpen)} >
          <button className={css.hamburger}  >
            <Image src={"/hamburger.svg"} width={25} height={25} />
          </button>
          {hamburgerOpen &&
            <div className={css.hamburgerCollapse}  >
              <Link href="/science" style={router.pathname == "/science" ? activeNavlLink : {}} >Science</Link>
              <Link href="/news" style={router.pathname == "/news" ? activeNavlLink : {}} >News</Link>
              <Link href="/about" style={router.pathname == "/about" ? activeNavlLink : {}} >About</Link>
              <Link href="/contact" style={router.pathname == "/contact" ? activeNavlLink : {}} >Contact</Link>
            </div>
          }
        </div>
      </nav>
    </div>
  )
}
