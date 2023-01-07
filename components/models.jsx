
import { useEffect } from "react";
import * as THREE from "three"
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { useGLTF, useAnimations, PerspectiveCamera } from "@react-three/drei";

export function Models({scroll, ...props}) {
  const { nodes, materials, animations } = useGLTF("/models_v12.glb");
  // const { nodes, materials, animations } = useGLTF("/models_v1.gltf");
  // console.log(materials)
  console.log(nodes)
  const group = useRef();
  const { actions } = useAnimations(animations, group);
  const extras = { castShadow: true, receiveShadow: true };
  console.log(actions)
  useEffect(() => {
    void (actions["CameraAction.006"].play().paused = true);
    void (actions["BottleAction.006"].play().paused = true);
    void (actions["CapAction.006"].play().paused = true);
    void (actions["PillLeftAction.006"].play().paused = true);
    void (actions["PillRightAction.006"].play().paused = true);
  }, [actions]);
  useFrame((state) => {
    actions["CameraAction.006"].time = THREE.MathUtils.lerp(actions["CameraAction.006"].time, actions["CameraAction.006"].getClip().duration * scroll.current, 0.05)
    actions["BottleAction.006"].time = THREE.MathUtils.lerp(actions["BottleAction.006"].time, actions["BottleAction.006"].getClip().duration * scroll.current, 0.05)
    actions["CapAction.006"].time = THREE.MathUtils.lerp(actions["CapAction.006"].time, actions["CapAction.006"].getClip().duration * scroll.current, 0.05)
    actions["PillLeftAction.006"].time = THREE.MathUtils.lerp(actions["PillLeftAction.006"].time, actions["PillLeftAction.006"].getClip().duration * scroll.current, 0.05)
    actions["PillRightAction.006"].time = THREE.MathUtils.lerp(actions["PillRightAction.006"].time, actions["PillRightAction.006"].getClip().duration * scroll.current, 0.05)

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
        // position={[0, 0, 0]}
        // scale={[1, 1, 1]}
      >
        <mesh name="Cap" geometry={nodes.Cap.geometry} material={materials.plasticCap} {...extras} />
        <mesh name="Bottle" geometry={nodes.Bottle.geometry} material={materials.plasticBottle} {...extras} />
        <mesh name="PillLeft" geometry={nodes.PillLeft.geometry} material={materials.pillTransperent} {...extras} />
        <mesh name="PillRight" geometry={nodes.PillRight.geometry} material={materials.pillSolid} {...extras} />
      </group>
      <group name="Camera" position={[0, 0, 0]}  >
      <PerspectiveCamera makeDefault far={20} near={0.1} fov={40} >
          <directionalLight
            castShadow
            position={[10, 20, 15]}
            shadow-camera-right={8}
            shadow-camera-top={8}
            shadow-camera-left={-8}
            shadow-camera-bottom={-8}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            intensity={2}
            shadow-bias={-0.0001}
          />
        </PerspectiveCamera>
      </group>
    </group>
  );
}

useGLTF.preload("/models_v12.glb");
// useGLTF.preload("/models_v1.gltf");