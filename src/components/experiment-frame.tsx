/** @jsx jsx */
import { jsx } from "theme-ui";
import { FunctionComponent } from "react";

type Props = {
  width: number;
  height: number;
};

const ExperimentFrame: FunctionComponent<Props> = ({
  width,
  height,
  children
}) => {
  return (
    <div
      style={{
        width: width,
        height: height,
        ...styles.frame
      }}
    >
      {children}
    </div>
  );
};

const styles = {
  frame: {
    border: `1px solid black`,
    borderRadius: `5px`,
    marginBottom: `1.45rem`,
    backgroundColor: "black"
  }
};

export default ExperimentFrame;
