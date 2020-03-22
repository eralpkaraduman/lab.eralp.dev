import React, { FunctionComponent, createRef, Suspense, Fragment } from "react";
import { Canvas, useLoader, useFrame } from "react-three-fiber";
import Text3dObject from "./text-3d-object";
import * as THREE from "three";
const textColor1 = new THREE.Color(0x0000ff);
const textColor2 = new THREE.Color(0xff0000);

const text1pos = new THREE.Vector3(0, 40, 0);
const text1rot = new THREE.Euler(0, 0.4, 0.5);
const text2pos = new THREE.Vector3(0, -40, 0);
const text2rot = new THREE.Euler(-0.1, -0.4, -0.1);
const fontUrl = "/fonts/bold.blob";

const AnimatedTextGroup: FunctionComponent = ({ children }) => {
  const font = useLoader(THREE.FontLoader, fontUrl);
  const text1Ref = createRef<THREE.Group>();
  const text2Ref = createRef<THREE.Group>();
  useFrame(() => {
    text1Ref.current!.rotation.y += 0.04;
    text2Ref.current!.rotation.y -= 0.02;
  });
  return (
    <Fragment>
      <Text3dObject
        ref={text1Ref}
        font={font}
        text={"3D"}
        color={textColor1}
        size={60}
        height={10}
        position={text1pos}
        rotation={text1rot}
      />
      <Text3dObject
        ref={text2Ref}
        font={font}
        text={"TEXT"}
        color={textColor2}
        size={40}
        height={10}
        position={text2pos}
        rotation={text2rot}
      />
    </Fragment>
  );
};

const Text3DCanvas: FunctionComponent = () => {
  return (
    <Canvas camera={{ position: [0, 0, 160] }}>
      <rectAreaLight
        intensity={4}
        width={300}
        height={300}
        position={[0, 100, 250]}
      />
      <Suspense fallback={"Loading"}>
        <AnimatedTextGroup />
      </Suspense>
    </Canvas>
  );
};

export default Text3DCanvas;
