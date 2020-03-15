/** @jsx jsx */
import { jsx, Link } from "theme-ui";
import { FunctionComponent } from "react";

type SidebarLinkProps = { href: string };

const SidebarLink: FunctionComponent<SidebarLinkProps> = ({
  children,
  href
}) => (
  <li>
    <Link sx={{ variant: "links.nav" }} href="/">
      {children}
    </Link>
  </li>
);

export default SidebarLink;
