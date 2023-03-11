import css from "../styles/about.module.css";
import Profil from "../comps/Profil/Profil";
import Footer from "../comps/Footer";

export default function About() {
  return (
    <div className={css.about} >
      <section className={css.landing} >
        <h1>Welcome to a new way of nourishing your body and mind with the power of nature.</h1>
        <div className={css.formOne}>
          <svg width="100%" height="100%" viewBox="0 0 369 283" style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 }}>
            <g transform="matrix(1,0,0,1,0,-797.515)">
              <g transform="matrix(0.634798,0,0,0.634798,0,394.419)">
                <path d="M146.92,787C176.429,698.712 259.833,635 358,635C480.801,635 580.5,734.699 580.5,857.5C580.5,980.301 480.801,1080 358,1080L0,1080L0,787L146.92,787ZM146.92,787L358,787L358,1080C235.199,1080 135.5,980.301 135.5,857.5C135.5,832.866 139.512,809.162 146.92,787Z" style={{ fill: "rgb(232,252,250)" }} />
              </g>
            </g>
          </svg>
        </div>
        <div className={css.formTwo}>
          <svg width="100%" height="100%" viewBox="0 0 721 540" style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 }}>
            <g transform="matrix(1,0,0,1,-1199,-540)">
              <path d="M1920,1080L1199,1080L1199,1011.75C1279.87,1011.75 1356.01,991.357 1422.54,955.452C1395.62,913.465 1380,863.542 1380,810C1380,660.983 1500.98,540 1650,540C1656.97,540 1663.89,540.265 1670.75,540.787C1670.46,719.954 1570.07,875.834 1422.54,955.452C1470.56,1030.34 1554.53,1080 1650,1080C1753.25,1080 1843.05,1021.92 1888.47,936.657C1831.66,922.544 1789.5,871.156 1789.5,810C1789.5,748.844 1831.66,697.456 1888.47,683.343C1846.12,603.849 1765.19,547.977 1670.75,540.787L1670.75,540L1920,540L1920,679.5C1909.13,679.5 1898.57,680.832 1888.47,683.343C1908.59,721.118 1920,764.237 1920,810C1920,855.763 1908.59,898.882 1888.47,936.657C1898.57,939.168 1909.13,940.5 1920,940.5L1920,1080Z" style={{ fill: "rgb(232,252,250)" }} />
            </g>
          </svg>
        </div>
      </section>
      <section className={css.company} >
        <h2>Our Vision</h2>
        <p>
          Welcome to Wellamin, a healthcare company on a mission to improve the overall health and well-being of humanity.
          We believe that a healthy life begins with a balanced and complete diet, and sometimes, despite our best efforts,
          it can be difficult to get all the essential vitamins and minerals our bodies need. That&apos;s why we&apos;re proud to introduce
          our multivitamin supplement, designed to fill any nutritional gaps and provide a foundation for a healthy life.
        </p>
        <p>
          Our team of experts has carefully researched and formulated a blend of essential vitamins and minerals that work together
          to support your body&apos;s overall health and wellness. Our formula is non-GMO, gluten-free, and contains no artificial colors,
          flavors, or preservatives.
        </p>
        <p>
          We understand the importance of trust in the supplements you take, and that&apos;s why we use only the highest quality ingredients,
          manufactured in a cGMP-certified facility in the USA.
        </p>
        <p>
          At Wellamin, we believe that a healthy world starts with healthy individuals, and we&apos;re committed to empowering people
          everywhere to live their best lives. Whether you&apos;re looking to support your immune system, energy levels, or overall health,
          our multivitamin is the perfect addition to your daily routine.
        </p>
        <p>

          Join us on our journey to a healthier world and experience the difference for yourself. Try Wellamin multivitamin today!
        </p>
      </section>
      <section className={css.team} >
        <h2>Our Team</h2>
        <div className={css.profils}>
          <Profil src={"/about/profil_1.png"} name={"Kasey O'Ryan"} jobPosition={"Chief Executive Officer"} description={profileDescriptions.kasey} />
          <Profil src={"/about/profil_2.png"} name={"Sebastian Cantrell"} jobPosition={"Research Technician"} description={profileDescriptions.sebastian} />
          <Profil src={"/about/profil_3.png"} name={"Lily Duncan"} jobPosition={"Synthetic Biologist"} description={profileDescriptions.lily} />
          <Profil src={"/about/profil_4.png"} name={"Howard Atkinson"} jobPosition={"Enzymologist"} description={profileDescriptions.howard} />
        </div>
      </section>
      <Footer />
    </div>
  )
}


const profileDescriptions = {
  kasey: `Kasey O'Ryan is a dynamic and visionary Chief Executive Officer at Wellamin, a leading company in the field of health and wellness. 
  With over 15 years of experience in the industry, Kasey is a highly respected leader who is dedicated to developing innovative products that 
  improve people's lives. Under her guidance, Wellamin is developing a revolutionary multivitamin pill that is set to transform the industry. 
  Kasey is known for her strategic thinking, exceptional communication skills, and unwavering commitment to excellence. She is passionate 
  about making a positive impact in the world and is committed to advancing the health and wellbeing of people everywhere.`,

  sebastian: `Sebastian Cantrell is a talented Research Technician at Wellamin, a leading company in the health and wellness industry. 
  With a degree in biochemistry, Sebastian brings a wealth of scientific knowledge and expertise to the company's research and development team.
   He plays a critical role in the development of a revolutionary multivitamin pill that is set to transform the industry. Sebastian is known 
   for his attention to detail, analytical skills, and ability to work effectively in a team environment. He is passionate about improving people's 
   lives through science and is committed to contributing to the advancement of the health and wellness industry.`,

  lily: `Lily Duncan is a brilliant Synthetic Biologist at Wellamin, a leading company in the health and wellness industry. 
  With extensive experience in genetic engineering and molecular biology, Lily plays a critical role in developing innovative solutions for the 
  company's multivitamin pill. Her expertise in synthetic biology and biotechnology has been instrumental in designing and optimizing the product. 
  Lily is known for her exceptional analytical skills, creative problem-solving abilities, and passion for pushing the boundaries of science. 
  She is committed to advancing the field of synthetic biology and developing cutting-edge solutions that will improve people's lives.`,

  howard: `Howard Atkinson is a highly skilled Enzymologist at Wellamin, a leading company in the health and wellness industry. 
  With extensive experience in enzymology and protein engineering, Howard plays a critical role in developing the company's multivitamin pill. 
  His expertise in enzyme kinetics and mechanism has been instrumental in optimizing the product's enzymatic activity. 
  Howard is known for his exceptional problem-solving skills, attention to detail, and dedication to scientific excellence. 
  He is committed to advancing the field of enzymology and developing innovative solutions that will have a positive impact on people's health and wellbeing.`
}