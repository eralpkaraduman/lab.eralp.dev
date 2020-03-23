/** @jsx jsx */
import { jsx, Link } from "theme-ui";
import { FunctionComponent, Fragment } from "react";
import ExperimentFrame from "../../components/experiment-frame";
import Text3DCanvas from "./text-3d-canvas";
import SourceCode from "../../components/source-code";
import raw from "raw.macro";
import githubSourceUrl from "../../file-github-source-url.macro";

const text3dCanvasPath = "./text-3d-canvas.tsx";
const text3dCanvasSource = raw(text3dCanvasPath);

const text3dObjectPath = "./text-3d-object.tsx";
const text3dObjectSource = raw(text3dObjectPath);

const Text3D: FunctionComponent = () => {
  return (
    <Fragment>
      <h1>Clock 3D</h1>
      <p>
        Demo of displaying live clock as 3D text and loading custom fonts using
        WebGL through{" "}
        <Link href="https://github.com/react-spring/react-three-fiber">
          react-three-fiber
        </Link>
        . Which is a is a <Link href="https://reactjs.org">React</Link>{" "}
        reconciler for <Link href="https://threejs.org">Threejs</Link> on the
        web and react-native.
      </p>
      <ExperimentFrame width={300} height={150}>
        <Text3DCanvas />
      </ExperimentFrame>
      <p>Text3DCanvas.tsx</p>
      <SourceCode lineNumbersEnabled language="tsx" code={text3dCanvasSource} />
      <p>Text3DObject.tsx</p>
      <SourceCode lineNumbersEnabled language="tsx" code={text3dObjectSource} />
      <p>
        Here's the <Link href={githubSourceUrl}>full source code</Link> of this
        experiment
      </p>
    </Fragment>
  );
};

export default Text3D;
