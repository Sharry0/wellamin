
import css from "../styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Float } from "@react-three/drei";
import { Bottle } from "../components/bottle";
import { Cap } from "../components/cap";
import { Models } from "../components/models";

export default function Home() {
  return (
    <>
      {/* <h1>hello</h1> */}
      <div className={css.canvasContainer} >
        <Canvas
          shadows={true}
          className={css.canvas}
          camera={{position:[0,0.08,0.2]}}
        >
          <ambientLight color={"white"} intensity={1} />
          {/* <Float
            position={[0, 0, 0]}
            floatingRange={[-0.1, 0.1]}
            // rotation={[Math.PI / 3.5, 0, 0]}
            // rotationIntensity={4}
            floatIntensity={1}
            speed={4}
          > */}
            <Models/>
            <Environment preset="forest" />
          {/* </Float> */}
          <OrbitControls />
        </Canvas>
      </div>
    </>
  )
}
