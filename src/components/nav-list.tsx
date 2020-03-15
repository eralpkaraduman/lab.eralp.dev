/** @jsx jsx */
import { jsx } from "theme-ui";
import { FunctionComponent } from "react";

const NavList: FunctionComponent = props => {
  return <ul sx={{ listStyle: "none", p: 3, m: 0 }} {...props} />;
};

export default NavList;
