import React, { FunctionComponent, Fragment } from "react";
import { Canvas, useLoader } from "react-three-fiber";
import Text3dObject from "./text-3d-object";
import * as THREE from "three";
import Clock from "./clock";

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

const Text3DCanvas: FunctionComponent = () => {
  const font = useLoader(THREE.FontLoader, fontUrl);
  return (
    <Canvas camera={{ position: [0, 0, 120] }}>
      <rectAreaLight
        intensity={4}
        width={300}
        height={300}
        position={[0, 100, 250]}
      />
      <Clock
        render={(hour, minutes, seconds) => (
          <Fragment>
            <Text3dObject
              onUpdateFrame={() => ({
                rotation: [0.04, -0.02]
              })}
              font={font}
              text={hour}
              color={textColor1}
              size={50}
              height={10}
              position={text1pos}
              rotation={text1IinitialRot}
            />
            <Text3dObject
              onUpdateFrame={() => ({
                rotation: [-0.02, 0.02]
              })}
              font={font}
              text={minutes}
              color={textColor2}
              size={50}
              height={10}
              position={text2pos}
              rotation={text2IinitialRot}
            />
            <Text3dObject
              onUpdateFrame={() => ({
                rotation: [0, -0.03, 0.02]
              })}
              font={font}
              text={seconds}
              color={textColor3}
              size={50}
              height={10}
              position={text3pos}
              rotation={text3IinitialRot}
            />
          </Fragment>
        )}
      ></Clock>
    </Canvas>
  );
};

export default Text3DCanvas;
