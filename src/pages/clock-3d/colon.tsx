import React, { FunctionComponent } from "react";
import * as THREE from "three";
import "react-three-fiber";
import { hex_gray } from "../../colors";

type Props = {
  position: [number, number, number];
};

const Colon: FunctionComponent<Props> = ({ position }) => {
  const [x, y, z] = position;
  return (
    <group position={new THREE.Vector3(x, y, z)}>
      <mesh position={new THREE.Vector3(0, -50, 0)}>
        <sphereBufferGeometry args={[16, 16, 16]} attach="geometry" />
        <meshBasicMaterial color={hex_gray} attach="material" />
      </mesh>
      <mesh position={new THREE.Vector3(0, 50, 0)}>
        <sphereBufferGeometry args={[16, 16, 16]} attach="geometry" />
        <meshBasicMaterial color={hex_gray} attach="material" />
      </mesh>
    </group>
  );
};

export default Colon;
