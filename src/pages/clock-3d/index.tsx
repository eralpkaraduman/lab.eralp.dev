/** @jsx jsx */
import { jsx, Link } from "theme-ui";
import { FunctionComponent, Fragment } from "react";
import ExperimentFrame from "../../components/experiment-frame";
import SourceCode from "../../components/source-code";
import raw from "raw.macro";
import githubSourceUrl from "../../file-github-source-url.macro";
import ClockCanvas from "./clock-canvas";

const clockCanvasSource = raw("./clock-canvas.tsx");
const digitMeshSource = raw("./digit-mesh.tsx");
const digitPairSource = raw("./digit-pair.tsx");

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
        <ClockCanvas />
      </ExperimentFrame>
      <p>clock-canvas.tsx</p>
      <SourceCode lineNumbersEnabled language="tsx" code={clockCanvasSource} />
      <p>digit-pair.tsx</p>
      <SourceCode lineNumbersEnabled language="tsx" code={digitPairSource} />
      <p>digit-mesh.tsx</p>
      <SourceCode lineNumbersEnabled language="tsx" code={digitMeshSource} />
      <p>
        Here's the <Link href={githubSourceUrl}>full source code</Link> of this
        experiment
      </p>
    </Fragment>
  );
};

export default Text3D;
