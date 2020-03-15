/** @jsx jsx */
import { jsx, Link } from "theme-ui";
import { FunctionComponent } from "react";

type Props = {
  href: string;
};

const NavLink: FunctionComponent<Props> = ({ href, children }) => {
  return (
    <Link sx={{ variant: "links.nav" }} href={href}>
      {children}
    </Link>
  );
};

export default NavLink;
