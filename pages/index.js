
import { useRef } from "react";
import css from "../styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Float } from "@react-three/drei";
import { Models } from "../components/models";
import Overlay from "../components/overlay";

export default function Home() {
  const overlay = useRef()
  const scroll = useRef(0);
  return (
    <>
      {/* <h1>hello</h1> */}
      <div className={css.canvasContainer} >
        <Canvas
          shadows={true}
          className={css.canvas}
          
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
            <Models scroll={scroll} />
            <Environment preset="park" />
            {/* sunset" | "dawn" | "night" | "warehouse" | "forest" | "apartment" | "studio" | "city" | "park" | "lobby" | */}
          {/* </Float> */}
          {/* <OrbitControls /> */}
        </Canvas>
        <Overlay ref={overlay} scroll={scroll} />
      </div>
    </>
  )
}
