import React, { FunctionComponent, createRef, Suspense, Fragment } from "react";
import { Canvas, useLoader, useFrame } from "react-three-fiber";
import Text3dObject from "./text-3d-object";
import * as THREE from "three";
const textColor1 = new THREE.Color(0x0000ff);
const textColor2 = new THREE.Color(0xff0000);
const textColor3 = new THREE.Color(0x00ff00);
const text1pos = new THREE.Vector3(-100, 0, 0);
const text2pos = new THREE.Vector3(0, 0, 0);
const text3pos = new THREE.Vector3(100, 0, 0);
const text1IinitialRot = new THREE.Euler(0, 0.4, 0.5);
const text2IinitialRot = new THREE.Euler(-0.1, -0.4, -0.1);
const text3IinitialRot = new THREE.Euler(0.2, 0.8, 0.1);

const fontUrl = "/fonts/bold.blob";

type TextsProps = {
  text1: string;
  text2: string;
  text3: string;
};

const AnimatedTextGroup: FunctionComponent<TextsProps> = ({
  text1,
  text2,
  text3
}) => {
  const font = useLoader(THREE.FontLoader, fontUrl);
  const text1Ref = createRef<THREE.Group>();
  const text2Ref = createRef<THREE.Group>();
  const text3Ref = createRef<THREE.Group>();
  useFrame(() => {
    text1Ref.current!.rotation.x += 0.04;
    text2Ref.current!.rotation.x -= 0.02;
    text3Ref.current!.rotation.y += 0.03;
  });
  return (
    <Fragment>
      <Text3dObject
        ref={text1Ref}
        font={font}
        text={text1}
        color={textColor1}
        size={50}
        height={10}
        position={text1pos}
        rotation={text1IinitialRot}
      />
      <Text3dObject
        ref={text2Ref}
        font={font}
        text={text2}
        color={textColor2}
        size={50}
        height={10}
        position={text2pos}
        rotation={text2IinitialRot}
      />
      <Text3dObject
        ref={text3Ref}
        font={font}
        text={text3}
        color={textColor3}
        size={50}
        height={10}
        position={text3pos}
        rotation={text3IinitialRot}
      />
    </Fragment>
  );
};

const Text3DCanvas: FunctionComponent<TextsProps> = props => {
  return (
    <Canvas camera={{ position: [0, 0, 120] }}>
      <rectAreaLight
        intensity={4}
        width={300}
        height={300}
        position={[0, 100, 250]}
      />
      <Suspense fallback={"Loading"}>
        <AnimatedTextGroup {...props} />
      </Suspense>
    </Canvas>
  );
};

export default Text3DCanvas;
