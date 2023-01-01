
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Cap(props) {
  const { nodes, materials, animations } = useGLTF("/cap.glb");
  const capMesh = useRef();

  // useFrame(() => {
  //   capMesh.current.position.y = (Math.sin(performance.now() / 1000) / 4);
  // });
  return (
    <group {...props} dispose={null}>
      <mesh
        ref={capMesh}
        castShadow
        receiveShadow
        geometry={nodes.Cap.geometry}
        material={nodes.Cap.material}
        position={[0, 0, 0]}
        scale={[1.04, 0.6, 1.04]}
      />
    </group>
  );
}

useGLTF.preload("/cap.glb");