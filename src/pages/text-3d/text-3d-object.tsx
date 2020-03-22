import React, { useMemo, forwardRef } from "react";
import { useUpdate } from "react-three-fiber";
import * as THREE from "three";

type Props = {
  position: THREE.Vector3;
  rotation: THREE.Euler;
  text: string;
  size: number;
  height: number;
  color: THREE.Color;
  font: THREE.Font;
};

const Text3DCanvas = forwardRef<THREE.Group, Props>(
  ({ position, rotation, text, size, height, color, font }, ref) => {
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
    const meshRef = useUpdate<THREE.Mesh>(self => {
      self.geometry.computeBoundingBox();
      const boundingBoxSize = new THREE.Vector3();
      self.geometry.boundingBox.getSize(boundingBoxSize);
      // Pivot to center of the bounding box
      self.position.x = -boundingBoxSize.x / 2;
      self.position.y = -boundingBoxSize.y / 2;
      self.position.z = -boundingBoxSize.z / 2;
    }, []);
    return (
      <group ref={ref} position={position} rotation={rotation}>
        <mesh ref={meshRef}>
          <textGeometry attach="geometry" args={[text, config]} />
          <meshStandardMaterial color={color} attach="material" />
        </mesh>
      </group>
    );
  }
);

export default Text3DCanvas;
