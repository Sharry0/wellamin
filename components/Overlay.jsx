import { forwardRef } from "react";

const Overlay = forwardRef(({ scroll }, ref) => (
  <>
    <div
      className='scroll'
      ref={ref}
      onScroll={(e) => scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)}
    >
      <div style={{ height: "200vh" }}>
        <div className="text ">
          <h1>Wellamin</h1>
          {/* <p>Boost your health and immunity with our top-quality vitamin supplements. Shop now and feel the difference!</p> */}
          Elevate your overall health and wellness with our Multivitamin complex. Packed with essential vitamins and minerals for optimal nutrition. Support your energy levels and overall health with just one daily dose.
        </div>
      </div>
      <div style={{ height: "200vh" }}>
        <div className="text"> Experience the power of nature with our Organic Vitamin C supplement. Made with only the purest ingredients for optimal health and wellness. </div>
      </div>
      <div style={{ height: "200vh" }}>
        <div className="text"> Say goodbye to tiredness and fatigue with our Vitamin B12 supplement. Boost energy levels and support a healthy nervous system. </div>
      </div>
      <div style={{ height: "200vh" }}>
        <div className="text"> Support your immune system and maintain optimal health with our Vitamin D3 supplement. Made with natural ingredients for maximum effectiveness. </div>
      </div>
      <div style={{ height: "200vh" }}>
        <div className="text"> Promote healthy skin, hair, and nails with our Vitamin E supplement. A powerful antioxidant that supports overall wellness.</div>
      </div>
      <div>div 4</div>
      <div>div 4</div>
    </div>
    {/* <div style={{height: "300vh"}} >DIV 55</div> */}
  </>
))

export default Overlay
