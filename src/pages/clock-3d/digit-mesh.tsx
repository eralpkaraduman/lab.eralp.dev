import React, { useMemo, FunctionComponent } from "react";
import { useUpdate } from "react-three-fiber";
import * as THREE from "three";

export type Digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

type Props = {
  value: Digit;
  color: THREE.Color;
  font: THREE.Font;
  size: number;
  height: number;
  align: "left" | "right";
  kerningOffset: number;
};

const DigitMesh: FunctionComponent<Props> = ({
  font,
  value,
  size,
  height,
  color,
  align,
  kerningOffset
}) => {
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
  const meshRef = useUpdate<THREE.Mesh>(
    mesh => {
      mesh.geometry.computeBoundingBox();
      const boundingBoxSize = new THREE.Vector3();
      mesh.geometry.boundingBox.getSize(boundingBoxSize);
      switch (align) {
        case "left":
          mesh.position.x = -boundingBoxSize.x - kerningOffset;
          break;
        case "right":
          mesh.position.x = 0 + kerningOffset;
          break;
      }
      mesh.position.y = -boundingBoxSize.y / 2;
      mesh.position.z = -boundingBoxSize.z / 2;
    },
    [value]
  );

  return (
    <mesh ref={meshRef}>
      <textBufferGeometry
        name="DigitTextGeometry"
        attach="geometry"
        args={[value, config]}
      />
      <meshStandardMaterial color={color} attach="material" />
    </mesh>
  );
};

export default DigitMesh;
