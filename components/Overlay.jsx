import { forwardRef } from "react"

const Overlay = forwardRef(({ scroll }, ref) => (
  <div
    className='scroll'
    ref={ref}
    onScroll={(e) => scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)}
  >
    <div style={{ width: "100vw", height: "200vh" }}> div 1 </div>
    <div style={{ width: "100vw", height: "200vh" }}> div 2 </div>
    <div style={{ width: "100vw", height: "200vh" }}> div 3 </div>
  </div>
))

export default Overlay
