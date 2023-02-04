import { useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import {Models} from "./Models";
import Overlay from "./Overlay";

export default function DynamicCanvas() {
  const overlay = useRef();
  const progressbar = useRef();
  const scroll = useRef(0);

  return (
    <div style={{height: "100vh"}}>
      <Canvas
        shadows={true}
      >
        <ambientLight color={"white"} intensity={1} />
        <Suspense fallback={null}>
          <Models scroll={scroll}  />
          <Environment preset="park" />
        </Suspense>
        {/* sunset" | "dawn" | "night" | "warehouse" | "forest" | "apartment" | "studio" | "city" | "park" | "lobby" | */}
        {/* <OrbitControls /> */}
      </Canvas>
      <Overlay ref={overlay} scroll={scroll}  progressbar={progressbar} />
    </div>
  )
}
