import css from "../styles/about.module.css";
import Profil from "../comps/Profil/Profil";
import Footer from "../comps/Footer";

export default function About() {
  return (
    <div className={css.about} >
      <section className={css.landing} >
        <h1>Welcome to a new way of nourishing your body and mind with the power of nature.</h1>
      </section>
      <section className={css.company} >
        <p>
          Welcome to Wellamin, a healthcare company on a mission to improve the overall health and well-being of humanity.
          We believe that a healthy life begins with a balanced and complete diet, and sometimes, despite our best efforts,
          it can be difficult to get all the essential vitamins and minerals our bodies need. That&apos;s why we&apos;re proud to introduce
          our multivitamin supplement, designed to fill any nutritional gaps and provide a foundation for a healthy life.

          Our team of experts has carefully researched and formulated a blend of essential vitamins and minerals that work together
          to support your body&apos;s overall health and wellness. Our formula is non-GMO, gluten-free, and contains no artificial colors,
          flavors, or preservatives.

          We understand the importance of trust in the supplements you take, and that&apos;s why we use only the highest quality ingredients,
          manufactured in a cGMP-certified facility in the USA.

          At Wellamin, we believe that a healthy world starts with healthy individuals, and we&apos;re committed to empowering people
          everywhere to live their best lives. Whether you&apos;re looking to support your immune system, energy levels, or overall health,
          our multivitamin is the perfect addition to your daily routine.

          Join us on our journey to a healthier world and experience the difference for yourself. Try Wellamin multivitamin today!
        </p>
      </section>
      <section className={css.team} >
        <h2>Our Team</h2>
        <div className={css.profils}>
          <Profil src={"/about/profil_1.png"} name={"Kasey O'Ryan"} jobPosition={"Chief Executive Officer"} />
          <Profil src={"/about/profil_2.png"} name={"Sebastian Cantrell"} jobPosition={"Research Technician"} />
          <Profil src={"/about/profil_3.png"} name={"Lily Duncan"} jobPosition={"Synthetic Biologist"} />
          <Profil src={"/about/profil_4.png"} name={"Howard Atkinson"} jobPosition={"Enzymologist"} />
        </div>
      </section>
      <Footer />
    </div>
  )
}
