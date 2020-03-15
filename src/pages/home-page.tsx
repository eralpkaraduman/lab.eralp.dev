/** @jsx jsx */
import { jsx } from "theme-ui";
import { FunctionComponent, Fragment } from "react";
import { withDefaultLayout } from "../layouts/default-layout";

const HomePage: FunctionComponent = () => (
  <Fragment>
    <h1>Hi</h1>
    <p>This is where I put my experiments. Pick one from the menu.</p>
  </Fragment>
);

export default withDefaultLayout(HomePage);
