
import { forwardRef } from "react";
import Image from "next/image";
import Footer from "./Footer";

const Overlay = forwardRef(({ scroll, progressbar }, ref) => (
  <>
    <div
      className='scroll'
      ref={ref}
      onScroll={(e) => {
        scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
        progressbar.current.value = scroll.current
      }}
    >
      <div style={{ height: "90vh" }}>
        <progress ref={progressbar} className="pageProgress" max="1" value="0"> </progress>
        <div className="text ">
          <h1 style={{ fontFamily: "April_Fatface" }} >Wellamin</h1>
          <span className="downIcon">
            <Image fill src="Down_icon.svg" alt="icon" />
          </span>
        </div>
      </div>
      <div style={{ height: "90vh" }}>
        <div className="text">
          <div>
            Elevate your overall health and wellness with our Multivitamin complex. Packed with essential vitamins and minerals for optimal nutrition. Support your energy levels and overall health with just one daily dose. </div>
        </div>
      </div>
      <div style={{ height: "90vh" }}>
        <div className="text">
          <div>
            Incorporating Vitamin A in our multivitamin formula ensures that your body gets the daily support it needs to function at its best and promote a healthy, balanced diet. </div>
        </div>
      </div>
      <div style={{ height: "90vh" }}>
        <div className="text">
          <div>
            Say goodbye to feelings of fatigue and exhaustion with our Vitamin B supplement. With a range of B vitamins included, our multivitamin complex helps to boost energy levels and support a healthy metabolism. </div>
        </div>
      </div>
      <div style={{ height: "90vh" }}>
        <div className="text">
          <div>
            Support your immune system and maintain optimal health with our Vitamin D3 supplement. Made with natural ingredients for maximum effectiveness. </div>
        </div>
      </div>
      <div style={{ height: "90vh" }}>
        <div className="text">
          <div>
            Feel the difference with our Vitamin E supplement. A powerful antioxidant that supports healthy skin, hair and nails, this essential vitamin also helps to boost overall health and wellness</div>
        </div>
      </div>
      <div className="footerOverlay">
        <Footer />
      </div>

    </div>

  </>
))
Overlay.displayName = "Overlay";
export default Overlay