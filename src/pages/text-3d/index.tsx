/** @jsx jsx */
import { jsx, Link } from "theme-ui";
import { FunctionComponent, Fragment, useEffect, useState } from "react";
import ExperimentFrame from "../../components/experiment-frame";
import Text3DCanvas from "./text-3d-canvas";

const Text3D: FunctionComponent = () => {
  const [seconds, setSeconds] = useState<string>("00");
  const [minutes, setMinutes] = useState<string>("00");
  const [hour, setHour] = useState<string>("00");
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setSeconds(
        now
          .getSeconds()
          .toString()
          .padStart(2, "0")
      );
      setMinutes(
        now
          .getMinutes()
          .toString()
          .padStart(2, "0")
      );
      setHour(
        now
          .getHours()
          .toString()
          .padStart(2, "0")
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Fragment>
      <h1>Text 3D</h1>
      <p>
        Demo of displaying 3D text and loading custom fonts using WebGL through{" "}
        <Link href="https://github.com/react-spring/react-three-fiber">
          react-three-fiber
        </Link>
        . Which is a is a <Link href="https://reactjs.org">React</Link>{" "}
        reconciler for <Link href="https://threejs.org">Threejs</Link> on the
        web and react-native.
      </p>
      <ExperimentFrame width={300} height={150}>
        <Text3DCanvas text1={hour} text2={minutes} text3={seconds} />
      </ExperimentFrame>
    </Fragment>
  );
};

export default Text3D;
