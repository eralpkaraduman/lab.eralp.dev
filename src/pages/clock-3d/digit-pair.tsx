import React, { useRef, FunctionComponent } from "react";
import { useFrame } from "react-three-fiber";
import * as THREE from "three";
import DigitMesh, { Digit } from "./digit-mesh";

type Props = {
  initialPosition: [number, number, number];
  text: string;
  size: number;
  height: number;
  color: THREE.Color;
  font: THREE.Font;
  onUpdateFrame?: (
    position: number[],
    rotation: number[]
  ) => { translation?: number[]; rotation?: number[] };
};

const KERNING_OFFSET = 3;

const DigitPair: FunctionComponent<Props> = ({
  initialPosition,
  text,
  size,
  height,
  color,
  font,
  onUpdateFrame
}) => {
  const [x, y, z] = initialPosition;
  const initialPositionVector = new THREE.Vector3(x, y, z);
  const groupRef = useRef<THREE.Group>();
  useFrame(() => {
    const { current: self } = groupRef;
    if (self && onUpdateFrame) {
      const { translation, rotation } = onUpdateFrame(
        self.position.toArray(),
        self.rotation.toArray()
      );
      self.position.x += translation?.[0] || 0;
      self.position.y += translation?.[1] || 0;
      self.position.z += translation?.[2] || 0;
      self.rotation.x += rotation?.[0] || 0;
      self.rotation.y += rotation?.[1] || 0;
      self.rotation.z += rotation?.[2] || 0;
    }
  });

  return (
    <group ref={groupRef} position={initialPositionVector}>
      <DigitMesh
        align="left"
        kerningOffset={KERNING_OFFSET}
        value={text.charAt(0) as Digit}
        font={font}
        color={color}
        height={height}
        size={size}
      />
      <DigitMesh
        kerningOffset={KERNING_OFFSET}
        align="right"
        value={text.charAt(1) as Digit}
        font={font}
        color={color}
        height={height}
        size={size}
      />
    </group>
  );
};

export default DigitPair;
