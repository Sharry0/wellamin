
import css from "../styles/scient.module.css";
import Image from "next/image";
import Footer from "../comps/Footer"
export default function Science() {
  return (
    <>
      <div className={css.science} >
        <section className={css.landingSec} >

          <h1>The Benefits of Multivitamin Supplements: A Comprehensive Guide</h1>
          <div className={css.formOne}>
            {/* <svg width="100%" height="100%" viewBox="0 0 327 500" style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 }}>
              <path d="M327,377L327,500L0,500L0,0L63.058,0C50.472,29.312 43.5,61.598 43.5,95.5C43.5,225.311 145.718,331.436 274,337.707L274,377L327,377ZM327,335.925L325.532,334.787C326.021,334.707 326.511,334.625 327,334.542L327,335.925Z" style={{ fill: "rgb(20,46,44)" }} />
            </svg> */}
            <svg width="276" height="209" viewBox="0 0 276 209" fill="none">
              <path d="M68.3996 208.7C68.3996 170.5 99.3996 139.5 137.6 139.5L137.6 70.2L68.3996 70.1999C68.3996 108.4 37.3996 139.4 -0.800388 139.4L-0.800391 208.6L68.3996 208.6L68.3996 208.7Z" fill="rgb(20,46,44)"></path>
              <path d="M274.7 70.2L205.9 70.1999C205.9 108.4 236.9 139.4 275.1 139.4L275.1 70.2L274.7 70.2Z" fill="rgb(20,46,44)"></path>
              <path d="M-0.6 69.2L68.2 69.2C68.2 31 37.2 -4.53208e-05 -0.999999 -4.57764e-05L-1 69.2L-0.6 69.2Z" fill="rgb(20,46,44)"></path>
              <path d="M136.7 70.5999L136.7 139.4C174.9 139.4 205.9 108.4 205.9 70.2L136.7 70.1999L136.7 70.5999Z" fill="rgb(20,46,44)"></path>
            </svg>
          </div>
          <div className={css.formTwo}>
            <svg width="994" height="598" viewBox="0 0 994 598" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M199.5 598C199.5 487.951 288.871 398.644 399 398.644L399 199L199.5 199C199.5 309.049 110.129 398.356 2.18035e-05 398.356L1.30893e-05 597.712L199.5 597.712L199.5 598Z" fill="rgb(20,46,44)"></path>
              <path d="M793.85 199L596 199C596 308.853 685.147 398 795 398L795 199L793.85 199Z" fill="rgb(20,46,44)"></path>
              <path d="M796.15 597L994 597C994 487.147 904.853 398 795 398L795 597L796.15 597Z" fill="rgb(20,46,44)"></path>
              <path d="M396 200.15L396 398C506.405 398 596 308.853 596 199L396 199L396 200.15Z" fill="rgb(20,46,44)"></path>
              <path d="M994 197.85L994 0C884.147 -4.80181e-06 795 89.1474 795 199L994 199L994 197.85Z" fill="rgb(20,46,44)"></path>
            </svg>
            {/* <svg width="100%" height="100%" viewBox="0 0 375 308" style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 }}>
              <g transform="matrix(1,0,0,1,-125,-192.292)">
                <path d="M500,500L125,500L125,357.208C135.275,362.199 146.813,365 159,365C194.58,365 224.628,341.125 233.983,308.536C281.605,304.673 322.543,277.026 344.892,237.503C360.884,245.5 378.921,250 398,250C441.269,250 479.175,226.857 500,192.292L500,273C446.464,273 403,316.464 403,370C403,423.536 446.464,467 500,467L500,500Z" style={{ fill: "rgb(20,46,44)" }} />
              </g>
            </svg> */}
          </div>
        </section>
        <div>
          <p>
            Multivitamin pills are nutritional supplements that contain a combination of essential vitamins and
            minerals that the body needs to function properly. In today&apos;s fast-paced world,
            many individuals struggle to maintain a balanced diet, making it difficult to consume
            all the necessary nutrients their body requires. Multivitamin pills provide a convenient
            solution to this problem, ensuring that the body receives all the
            vitamins and minerals it needs to stay healthy and function optimally.
          </p>
          <div>
            <ul className={css.benefitsList} >
              <li><b>Supports Optimal Health</b><br />
                Multivitamin pills play a crucial role in maintaining optimal health by providing the body with
                essential vitamins and minerals that may not be obtained in sufficient amounts through diet alone.
                These nutrients play a vital role in several bodily functions, such as maintaining healthy skin,
                bones, and muscles, supporting the immune system, and preventing the onset of chronic diseases.
              </li>
              <li><b>Helps Prevent Nutrient Deficiencies</b><br />
                Nutrient deficiencies can lead to serious health problems, such as scurvy caused by a lack of vitamin C,
                or anemia caused by a lack of iron. Multivitamin pills help to prevent such deficiencies by providing
                the body with all the necessary vitamins and minerals it needs to stay healthy.
              </li>
              <li><b>Enhances Energy Levels and Boosts the Immune System</b><br />
                Multivitamin pills help to enhance energy levels by providing the body with essential vitamins and minerals
                that play a vital role in producing energy. Additionally, they help to boost the immune system by providing
                the body with vitamins and minerals that support its functioning, such as vitamin C and zinc.
              </li>
              <li><b>Improves Mental Clarity and Mood</b><br />
                Multivitamin pills contain vitamins and minerals that are essential for brain health, such as vitamin B12,
                folate, and iron. These nutrients help to improve mental clarity and enhance mood by supporting neurotransmitter
                production and brain function.
              </li>
              <li><b>Convenient and Accessible</b><br />
                Multivitamin pills are convenient and accessible, making it easy for individuals to incorporate them into
                their daily routine. They are available in different forms, such as tablets, capsules, and gummies,
                and can be found at most health food stores and online.
              </li>
            </ul>

          </div>
          <p>
            Multivitamin pills provide a convenient and accessible solution for individuals who struggle to maintain a
            balanced diet and consume all the necessary nutrients their body requires. They play a crucial role in maintaining
            optimal health by providing the body with essential vitamins and minerals, helping to prevent nutrient deficiencies,
            enhance energy levels, boost the immune system, improve mental clarity, and enhance mood. As a result, multivitamin
            pills are an excellent addition to any individual&apos;s daily routine, ensuring they receive all the necessary nutrients
            they need to stay healthy and live a balanced lifestyle.
          </p>

        </div>
        <div className={css.scientist} >
          <Image src="/scientist.jpg" fill alt="Dr. Jessica Wang" />
        </div>
        <p className={css.imgCap} >
          Dr. Jessica Wang: Pioneering the way to a healthier tomorrow,
          one multivitamin formula at a time. 03. April 2022.
        </p>
      </div>
      <div className="foot" >
        <Footer />
      </div>
    </>
  )
}

