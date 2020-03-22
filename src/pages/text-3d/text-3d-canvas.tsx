import React, { FunctionComponent } from "react";
import { Canvas, Dom } from "react-three-fiber";
import { useLoader } from "react-three-fiber";
import Text3dObject from "./text-3d-object";
import { Vector3, Euler, Color } from "three";
import * as THREE from "three";

const text1pos = new Vector3(0, 40, 0);
const text1rot = new Euler(0, 0.4, 0.5);
const text2pos = new Vector3(0, -40, 0);
const text2rot = new Euler(-0.1, -0.4, -0.1);
const fontUrl = "/fonts/bold.blob";

const Text3DCanvas: FunctionComponent = () => {
  const font = useLoader(THREE.FontLoader, fontUrl);
  return (
    <Canvas camera={{ position: [0, 0, 160] }}>
      <rectAreaLight
        intensity={4}
        width={300}
        height={300}
        position={[0, 100, 250]}
      />
      <Text3dObject
        font={font}
        text={"3D"}
        color={new Color(0x0000ff)}
        size={60}
        height={10}
        position={text1pos}
        rotation={text1rot}
        rotationFactor={0.04}
      />
      <Text3dObject
        font={font}
        text={"TEXT"}
        color={new Color(0xff0000)}
        size={40}
        height={10}
        position={text2pos}
        rotation={text2rot}
        rotationFactor={-0.02}
      />
    </Canvas>
  );
};

export default Text3DCanvas;
