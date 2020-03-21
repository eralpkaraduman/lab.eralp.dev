/** @jsx jsx */
import { jsx, Link } from "theme-ui";
import { FunctionComponent, Fragment } from "react";
import raw from "raw.macro";
import ExperimentFrame from "../../components/experiment-frame";
import SourceCode from "../../components/source-code";
import BoxCanvas from "./box-canvas";
import githubSourceUrl from "../../file-github-source-url.macro";

const boxCanvasSourcePath = "./box-canvas.tsx";
const BoxCanvasSource = raw(boxCanvasSourcePath);
const boxMeshSourcePath = "./box-canvas.tsx";
const BoxMeshSource = raw(boxMeshSourcePath);

const BoxPage: FunctionComponent = () => (
  <Fragment>
    <ExperimentFrame width={200} height={200}>
      <BoxCanvas />
    </ExperimentFrame>
    <p>BoxCanvas.tsx</p>
    <SourceCode language="tsx" code={BoxCanvasSource} />
    <p>BoxMesh.tsx</p>
    <SourceCode language="tsx" code={BoxMeshSource} />
    <p>
      Here's the <Link href={githubSourceUrl}>full source code</Link> of this
      experiment
    </p>
  </Fragment>
);

export default BoxPage;
