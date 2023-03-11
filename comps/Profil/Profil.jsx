
import css from "./Profil.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Profil({ src, name, jobPosition, description }) {
  const [profileOpen, setProfileOpen] = useState(false)
  return (
    <div>

      <div className={css.profil} onClick={() => setProfileOpen(true)} >
        <div className={css.outerProfilImg} >
          <div className={css.profilCircle} >
            <div className={css.profilImg} >
              <Image src={src} sizes="300px" fill alt="profil" />
            </div>
          </div>
        </div>
        <h3>{name}</h3>
        <p>{jobPosition}</p>
      </div>
      {/* ____________ Card Overlay _________________ */}
      {profileOpen &&
        <div className={css.profilOverlay}>
          <div className={css.profilCard}>
            {/* ____________ Profile Image _________________ */}
            <div className={css.outerProfilImg} >
              <div className={css.profilCircle} >
                <div className={css.profilImg} >
                  <Image src={src} sizes="300px" fill alt="profil" />
                </div>
              </div>
            </div>

            {/* ____________ Profile Description _________________ */}
            <div className={css.profilCardText} >
              <h3>{name}</h3>
              <h4>{jobPosition}</h4>
              <p>{description}</p>
              <Link href="https://www.linkedin.com/" target="_blank" >
                <Image src="/lin_dark.svg" height={50} width={50} alt={name} />
              </Link>
            </div>
            <button onClick={() => setProfileOpen(false)} >X</button>
          </div>
        </div>
      }
    </div>
  )
}
