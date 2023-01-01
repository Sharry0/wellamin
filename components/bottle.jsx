
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export function Bottle(props) {
  const bottleMesh = useRef();
  const { nodes, materials, animations } = useGLTF("/bottle.glb");

  // useFrame(() => {
  //   bottleMesh.current.position.y = (Math.sin(performance.now() / 1000) / 4);
  // });
  return (
    <group {...props} dispose={null}>
      <mesh
        ref={bottleMesh} name="Bottle" castShadow receiveShadow geometry={nodes.Bottle.geometry}
        material={materials["Material.003"]} position={[0, 0, 0]} scale={[1, 0.6, 1]}
      />
    </group>
  );
}

useGLTF.preload("/bottle.glb");
