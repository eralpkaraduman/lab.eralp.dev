/** @jsx jsx */
import { jsx } from "theme-ui";
import { FunctionComponent, Fragment } from "react";
import ExperimentFrame from "../../components/experiment-frame";
import Table3DCanvas from './table-canvas'

const Text3D: FunctionComponent = () => {
  return (
    <Fragment>
      <h1>Table 3D</h1>
      <ExperimentFrame width={500} height={500}>
        <Table3DCanvas />
      </ExperimentFrame>
    </Fragment>
  );
};

export default Text3D;
