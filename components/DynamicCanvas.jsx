
import { useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Float } from "@react-three/drei";
import { Models } from "./models";
import Overlay from "./overlay";

export default function DynamicCanvas() {
  const overlay = useRef()
  const scroll = useRef(0);
  return (
    <div style={{height: "100vh"}}>
      <Canvas
        shadows={true}
      >
        <ambientLight color={"white"} intensity={1} />
        <Suspense fallback={null}>
          <Models scroll={scroll} />
          <Environment preset="park" />
        </Suspense>
        {/* sunset" | "dawn" | "night" | "warehouse" | "forest" | "apartment" | "studio" | "city" | "park" | "lobby" | */}
        {/* <OrbitControls /> */}
      </Canvas>
      <Overlay ref={overlay} scroll={scroll} />
    </div>
  )
}
