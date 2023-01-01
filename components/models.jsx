
import * as THREE from "three"
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { useGLTF, useAnimations, PerspectiveCamera } from "@react-three/drei";

export function Models(props) {
  const { nodes, materials, animations } = useGLTF("/models_v2.glb");
  // console.log(materials)
  const group = useRef();
  const { actions } = useAnimations(animations, group);
  const extras = { castShadow: true, receiveShadow: true };
  useFrame((state) => {
    // actions["CameraAction.005"].time = THREE.MathUtils.lerp(actions["CameraAction.005"].time, actions["CameraAction.005"].getClip().duration * scroll.current, 0.05)
    // group.current.children[0].children.forEach((child, index) => {
    //   // child.material.color.lerp(color.set(hovered === child.name ? "tomato" : "#202020"), hovered ? 0.1 : 0.05)
    //   const et = state.clock.elapsedTime
    //   child.position.y = Math.sin((et + index * 2000) / 2) * 1
    //   child.rotation.x = Math.sin((et + index * 2000) / 3) / 10
    //   child.rotation.y = Math.cos((et + index * 2000) / 2) / 10
    //   child.rotation.z = Math.sin((et + index * 2000) / 3) / 10
    // })
  })

  // useFrame(() => {
  //   mesh.current.position.y = (Math.sin(performance.now() / 1000) / 4);
  // });
  return (
    <group ref={group} {...props} dispose={null} >

      <group
        position={[0, 0, 0]}
        scale={[1, 1, 1]}
      >
        <mesh name="Cap" geometry={nodes.Cap.geometry} material={materials.plasticCap} {...extras} />
        <mesh name="Bottle" geometry={nodes.Bottle.geometry} material={materials.plasticBottle} {...extras} />
        <mesh name="PillLeft" geometry={nodes.PillLeft.geometry} material={materials.pillTransperent} {...extras} />
        <mesh name="PillRight" geometry={nodes.PillRight.geometry} material={materials.pillSolid} {...extras} />
      </group>
      {/* <group name="Camera" position={[0, 0, 10]}  >
        <PerspectiveCamera>

        </PerspectiveCamera>
      </group> */}
    </group>
  );
}

useGLTF.preload("/models_v2.glb");