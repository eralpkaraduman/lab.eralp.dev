/** @jsx jsx */
import { jsx } from "theme-ui";

import { FunctionComponent, Fragment } from "react";
import { withDefaultLayout } from "../../layouts/default-layout";

const Virus: FunctionComponent = () => {
  return (
    <Fragment>
      <h1>Virus</h1>
    </Fragment>
  );
};

export default withDefaultLayout(Virus);
