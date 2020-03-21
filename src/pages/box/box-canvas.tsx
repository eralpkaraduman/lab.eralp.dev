import React, { FunctionComponent } from "react";
import * as THREE from "three";
import { Canvas } from "react-three-fiber";
import BoxMesh from "./box-mesh";

const BoxCanvas: FunctionComponent = () => {
  const boxPosition: THREE.Vector3 = new THREE.Vector3(0, 0, -100);
  const boxSize = 50;
  return (
    <Canvas>
      <rectAreaLight
        intensity={2}
        width={100}
        height={100}
        position={[0, 0, 0]}
        onUpdate={self => self.lookAt(boxPosition)}
      />
      <BoxMesh position={boxPosition} size={boxSize} />
    </Canvas>
  );
};

export default BoxCanvas;
