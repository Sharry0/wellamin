
import dynamic from "next/dynamic";

const DynamicCanvas = dynamic(() => import('../components/DynamicCanvas'), {
  loading: () => 'Loading...',
  ssr: false,
})

export default function Home() {


  return (
    <>
      {/* <h1>hello</h1> */}
      {/* <div className={css.canvasContainer} > */}
      <DynamicCanvas />


      {/* </div> */}
      <div style={{ height: "300vh" }} >DIV 5</div>
    </>
  )
}
