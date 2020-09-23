/** @jsx jsx */
import { jsx } from "theme-ui";
import { FunctionComponent, Fragment } from "react";
import ExperimentFrame from "../../components/experiment-frame";
import Room3DCanvas from './room-canvas'

const Room3D: FunctionComponent = () => {
  return (
    <Fragment>
      <h1>Room 3D</h1>
      <ExperimentFrame width={300} height={300}>
        <Room3DCanvas />
      </ExperimentFrame>
    </Fragment>
  );
};

export default Room3D;
