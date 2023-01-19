import { forwardRef } from "react"

const Overlay = forwardRef(({ scroll }, ref) => (
  <div
    className='scroll'
    ref={ref}
    onScroll={(e) => scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)}
  >
    <div style={{ width: "100vw", height: "100vh" }}> div 1 </div>
    <div style={{ width: "100vw", height: "100vh" }}> div 2 </div>
    <div style={{ width: "100vw", height: "100vh" }}> div 3 </div>
    <div>div 4</div>
  </div>
))

export default Overlay
