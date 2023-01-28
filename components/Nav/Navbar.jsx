
import css from "./Navbar.module.css";
import Link from "next/link"

export default function Navbar() {
  return (
    <div className={css.navbar}>
      <nav className={css.nav}>
        <Link href="/">About</Link>
        <Link href="/">Home</Link>
        <Link href="/">Home</Link>
        <Link href="/">Home</Link>
        <Link href="/">Home</Link>
      </nav>
    </div>
  )
}
