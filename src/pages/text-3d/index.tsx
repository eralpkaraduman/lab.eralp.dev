/** @jsx jsx */
import { jsx, Link } from "theme-ui";
import { FunctionComponent, Fragment } from "react";
import ExperimentFrame from "../../components/experiment-frame";
import Text3DCanvas from "./text-3d-canvas";

const Text3D: FunctionComponent = () => (
  <Fragment>
    <h1>Text 3D</h1>
    <p>
      Demo of displaying 3D text and loading custom fonts using WebGL through{" "}
      <Link href="https://github.com/react-spring/react-three-fiber">
        react-three-fiber
      </Link>
      . Which is a is a <Link href="https://reactjs.org">React</Link> reconciler
      for <Link href="https://threejs.org">Threejs</Link> on the web and
      react-native.
    </p>
    <ExperimentFrame width={200} height={200}>
      <Text3DCanvas />
    </ExperimentFrame>
  </Fragment>
);

export default Text3D;
