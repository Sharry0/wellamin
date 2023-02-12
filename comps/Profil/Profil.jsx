
import css from "./Profil.module.css"
import Image from "next/image"

export default function Profil({ src, name, jobPosition }) {
  return (
    <div className={css.profil} >
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
  )
}
