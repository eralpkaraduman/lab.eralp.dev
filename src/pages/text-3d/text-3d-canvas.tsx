import React, { Suspense, FunctionComponent } from "react";
import { Canvas, Dom } from "react-three-fiber";
import Text3dObject from "./text-3d-object";
import { Vector3, Euler, Color } from "three";

const Text3DCanvas: FunctionComponent = () => (
  <Canvas camera={{ position: [0, 0, 160] }}>
    <rectAreaLight
      intensity={4}
      width={300}
      height={300}
      position={[0, 100, 250]}
    />
    <Suspense
      fallback={
        <Dom center>
          <div>loading</div>
        </Dom>
      }
    >
      <Text3dObject
        text={"3D"}
        color={new Color(0x0000ff)}
        size={60}
        height={10}
        position={new Vector3(0, 40, 0)}
        rotation={new Euler(0, 0.4, 0.5)}
        rotationFactor={0.04}
      ></Text3dObject>
      <Text3dObject
        text={"TEXT"}
        color={new Color(0xff0000)}
        size={40}
        height={10}
        position={new Vector3(0, -40, 0)}
        rotation={new Euler(-0.1, -0.4, -0.1)}
        rotationFactor={-0.02}
      />
    </Suspense>
  </Canvas>
);

export default Text3DCanvas;
