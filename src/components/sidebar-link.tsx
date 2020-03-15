/** @jsx jsx */
import { jsx, Link as ThemeUILink } from "theme-ui";
import { FunctionComponent } from "react";
import { Link as RouteLink } from "react-router-dom";

type SidebarLinkProps = { to: string };

const ThemeUILinkVariant: FunctionComponent<SidebarLinkProps> = props => (
  <ThemeUILink sx={{ variant: "links.nav" }} {...props} />
);

const SidebarLink: FunctionComponent<SidebarLinkProps> = ({ children, to }) => (
  <li>
    <RouteLink component={ThemeUILinkVariant} className="links" to={to}>
      {children}
    </RouteLink>
  </li>
);

export default SidebarLink;
