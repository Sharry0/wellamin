
import { useEffect } from "react";
import * as THREE from "three"
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useGLTF, useAnimations, PerspectiveCamera } from "@react-three/drei";

export function Models({ scroll, ...props }) {
  const { nodes, materials, animations } = useGLTF("/models_v2.glb");
  const group = useRef();
  const { actions } = useAnimations(animations, group);
  const extras = { castShadow: true, receiveShadow: true, "material-envMapIntensity": 0.2 };
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
  })

  // useFrame(() => {
  //   mesh.current.position.y = (Math.sin(performance.now() / 1000) / 4);
  // });
  return (
    <group ref={group} {...props} dispose={null} >
      <group scale={[1, 1, 1]}>
        <mesh name="Cap" geometry={nodes.Cap.geometry} material={materials.plasticCap} {...extras} />
        <mesh name="Bottle" geometry={nodes.Bottle.geometry} material={materials.plasticBottle} {...extras} />
        <mesh name="PillLeft" geometry={nodes.PillLeft.geometry} material={materials.pillTransperent} {...extras} />
        <mesh name="PillRight" geometry={nodes.PillRight.geometry} material={materials.pillSolid} {...extras} />
      </group>
      <group name="Camera"  >
        <PerspectiveCamera makeDefault far={100} near={0.00005} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} >
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

useGLTF.preload("/models_v2.glb");
