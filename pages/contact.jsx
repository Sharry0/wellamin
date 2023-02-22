import css from "../styles/contact.module.css";
import { useState } from "react";
import Footer from "../comps/Footer";

export default function Contact() {
  const [submitWindow, setSubmitWindow] = useState(false)

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setSubmitWindow(true)
    console.log("hiii")
  }

  return (
    <div className={css.contact} >
      <section className={css.landing} >
        <h1>Let&apos;s Connect</h1>
      </section>
      <section className={css.contactForm}>
        <h4>
          Get involved in the future of health! Use the form below to get in touch with
          us and explore partnership or collaboration opportunities.
        </h4>
        <div className={css.shapes} >
          <svg width="100%" height="100%" viewBox="0 0 895 2056" style={{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2}}>
            <g transform="matrix(6.12323e-17,1,-1,6.12323e-17,894.75,22)">
              <path d="M1434,403.816L1434,500.25L1408,500.25C1408.33,496.709 1408.5,493.124 1408.5,489.5C1408.5,426.582 1357.42,375.5 1294.5,375.5C1231.58,375.5 1180.5,426.582 1180.5,489.5C1180.5,493.124 1180.67,496.709 1181,500.25L1061.2,500.25C1042.2,463.723 1003.99,438.75 960,438.75C897.082,438.75 846,489.832 846,552.75C846,580.164 855.697,605.33 871.843,625L485,625L485,789.5L286.668,789.5C282.193,848.338 232.974,894.75 173,894.75C113.026,894.75 63.807,848.338 59.332,789.5L286.668,789.5C286.888,786.613 287,783.695 287,780.75C287,717.832 235.918,666.75 173,666.75C110.082,666.75 59,717.832 59,780.75C59,783.695 59.112,786.613 59.332,789.5L-22,789.5L-22,664.625C-14.881,666.019 -7.525,666.75 0,666.75C62.918,666.75 114,615.668 114,552.75C114,548.44 113.76,544.186 113.293,540L238.707,540C238.24,544.186 238,548.44 238,552.75C238,615.668 289.082,666.75 352,666.75C414.918,666.75 466,615.668 466,552.75C466,533.82 461.376,515.961 453.2,500.249C492.84,500.179 527.758,479.838 548.135,449.049C540.373,464.444 536,481.84 536,500.25C536,563.168 587.082,614.25 650,614.25C712.918,614.25 764,563.168 764,500.25C764,437.332 712.918,386.25 650,386.25C610.28,386.25 575.277,406.608 554.867,437.449C562.627,422.054 567,404.659 567,386.25C567,382.626 566.831,379.041 566.498,375.5L824.908,375.5C817.287,360.211 813,342.977 813,324.75C813,261.832 864.082,210.75 927,210.75C961.687,210.75 992.776,226.275 1013.69,250.75L927,250.75L927,375.5L824.908,375.5C843.59,412.978 882.309,438.75 927,438.75C989.918,438.75 1041,387.668 1041,324.75C1041,296.519 1030.72,270.67 1013.69,250.75L1306.61,250.75C1301.69,263.47 1299,277.298 1299,291.75C1299,354.668 1350.08,405.75 1413,405.75C1420.17,405.75 1427.19,405.086 1434,403.816ZM453.2,500.249L453,500.25C390.082,500.25 339,449.168 339,386.25C339,323.332 390.082,272.25 453,272.25C512.294,272.25 561.076,317.617 566.498,375.5L453,375.5L453,499.867C453.066,499.994 453.133,500.12 453.2,500.249ZM1920,210.75C1982.92,210.75 2034,261.832 2034,324.75C2034,387.668 1982.92,438.75 1920,438.75C1875.31,438.75 1836.59,412.978 1817.91,375.5L1920,375.5L1920,210.75ZM1413,177.75L1413,126L1533.63,126C1533.21,122.055 1533,118.052 1533,114C1533,51.082 1584.08,0 1647,0C1709.92,0 1761,51.082 1761,114C1761,118.052 1760.79,122.055 1760.37,126L1533.63,126C1539.63,183.286 1588.13,228 1647,228C1705.87,228 1754.37,183.286 1760.37,126L1920,126L1920,210.75C1857.08,210.75 1806,261.832 1806,324.75C1806,342.977 1810.29,360.211 1817.91,375.5L1490.31,375.5C1512.87,354.665 1527,324.845 1527,291.75C1527,228.832 1475.92,177.75 1413,177.75Z" style={{fill:"rgb(89,122,120)"}} />
              <g transform="matrix(1,0,0,1,-280,-283.25)">
                <circle cx="1240" cy="836" r="114" style={{fill:"rgb(52,71,70)"}} />
              </g>
              <g transform="matrix(1,0,0,1,173,-544.25)">
                <circle cx="1240" cy="836" r="114" style={{fill:"rgb(52,71,70)"}} />
              </g>
            </g>
          </svg>
        </div>
        <form action="">
          <div>
            <label htmlFor="Subject">Subject<sup>*</sup></label>
            <input id="Subject" name="Subject" type="text" required placeholder="Type something..." />
          </div>
          <div className={css.names} >
            <div>
              <label htmlFor="Firstname">Firstname<sup>*</sup></label>
              <input id="Firstname" name="Firstname" type="text" required placeholder="Type something..." />
            </div>
            <div>
              <label htmlFor="Lastname">Lastname<sup>*</sup></label>
              <input id="Lastname" name="Lastname" type="text" required placeholder="Type something..." />
            </div>
          </div>
          <div>
            <label htmlFor="Email">Email<sup>*</sup></label>
            <input id="Email" name="Email" type="email" required placeholder="Type something..." />
          </div>
          <div>
            <label htmlFor="Phone">Phone Number</label>
            <input id="Phone" name="Phone" type="text" placeholder="Type something..." />
          </div>
          <div>
            <label htmlFor="Textarea">Message<sup>*</sup></label>
            <textarea name="" id="" rows="6" required placeholder="Type something..." ></textarea>
          </div>
          <input type="button" onClick={handleSubmit} value="Submit" id={css.submitBtn} />
        </form>
      </section>
      {submitWindow &&
        <div className={css.submitWindow}>
          <div className={css.submitContainer} >
            <p>Please be informed that this contact form is not functional and was created for personal project purposes only. Any information entered here will not be submitted or received. </p>
            <p>Thank you for understanding.</p>
            <button className={css.cancelSubmitBtn} onClick={() => setSubmitWindow(false)} >Cancel</button>
          </div>
        </div>
      }
      <Footer />
    </div>
  )
}
