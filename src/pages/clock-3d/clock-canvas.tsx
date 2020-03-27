import React, { FunctionComponent, Fragment } from "react";
import { Canvas, useLoader } from "react-three-fiber";
import * as THREE from "three";
import { hex_blue, hex_yellow, hex_red } from "../../colors";
import DigitPair from "./digit-pair";
import Clock from "./clock";
import Colon from "./colon";

const ClockCanvas: FunctionComponent = () => {
  const font = useLoader(THREE.FontLoader, "/fonts/bold.blob");
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
            <Colon position={[-150, 0, -200]} />
            <Colon position={[150, 0, -200]} />
            <DigitPair
              onUpdateFrame={() => ({
                rotation: [0.07, -0.06]
              })}
              font={font}
              text={hour}
              color={new THREE.Color(hex_red)}
              size={50}
              height={10}
              initialPosition={[-100, 0, 0]}
            />
            <DigitPair
              onUpdateFrame={() => ({
                rotation: [-0.08, 0.02]
              })}
              font={font}
              text={minutes}
              color={new THREE.Color(hex_blue)}
              size={50}
              height={10}
              initialPosition={[0, 0, 0]}
            />
            <DigitPair
              onUpdateFrame={() => ({
                rotation: [0, -0.02, 0.07]
              })}
              font={font}
              text={seconds}
              color={new THREE.Color(hex_yellow)}
              size={50}
              height={10}
              initialPosition={[100, 0, 0]}
            />
          </Fragment>
        )}
      ></Clock>
    </Canvas>
  );
};

export default ClockCanvas;
