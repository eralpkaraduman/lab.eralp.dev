import React, { FunctionComponent, useRef, useMemo } from "react";
import { useLoader, useUpdate, useFrame } from "react-three-fiber";
import * as THREE from "three";

const fontUrl = "/fonts/bold.blob";

type Props = {
  position: THREE.Vector3;
  rotation: THREE.Euler;
  rotationFactor: number;
  text: string;
  size: number;
  height: number;
  color: THREE.Color;
};

const Text3DCanvas: FunctionComponent<Props> = ({
  position,
  rotation,
  rotationFactor,
  text,
  size,
  height,
  color
}) => {
  const groupRef = useRef<THREE.Group>();
  useFrame(() => {
    groupRef.current!.rotation.y += rotationFactor;
  });
  const font = useLoader(THREE.FontLoader, fontUrl);
  const config = useMemo<THREE.TextGeometryParameters>(
    () => ({
      font,
      size,
      height,
      curveSegments: 32,
      bevelEnabled: true,
      bevelThickness: 3,
      bevelSize: 1,
      bevelOffset: 0,
      bevelSegments: 8
    }),
    [font, height, size]
  );
  const mesh = useUpdate<THREE.Mesh>(self => {
    const size = new THREE.Vector3();
    self.geometry.computeBoundingBox();
    self.geometry.boundingBox.getSize(size);
    self.position.x = -size.x / 2;
    self.position.y = -size.y / 2;
    self.position.z = -size.z / 2;
  }, []);
  return (
    <group ref={groupRef} position={position} rotation={rotation}>
      <mesh ref={mesh}>
        <textGeometry attach="geometry" args={[text, config]} />
        <meshStandardMaterial color={color} attach="material" />
      </mesh>
    </group>
  );
};

export default Text3DCanvas;
