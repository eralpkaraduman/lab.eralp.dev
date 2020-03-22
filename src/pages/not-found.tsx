/** @jsx jsx */
import { jsx, Link as ThemeUiLink } from "theme-ui";
import { FunctionComponent, Fragment } from "react";
import { Link } from "react-router-dom";

const NotFound: FunctionComponent = () => (
  <Fragment>
    <h1>Not Found</h1>
    <p>
      Go to{" "}
      <Link component={ThemeUiLink} to="/">
        Home Page
      </Link>
    </p>
  </Fragment>
);

export default NotFound;
