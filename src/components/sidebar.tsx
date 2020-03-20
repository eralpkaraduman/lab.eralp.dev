/** @jsx jsx */
import { jsx } from "theme-ui";
import { FunctionComponent } from "react";
import { Sidenav } from "@theme-ui/sidenav";
import SidebarLink from "./sidebar-link";
import { SidebarPaths } from "../paths";

type LinkType = { title: string; path: string };

const links: LinkType[] = Object.keys(SidebarPaths).map(pathName => ({
  title: pathName,
  path: SidebarPaths[pathName]
}));

type Props = { open: boolean };

const Sidebar: FunctionComponent<Props> = ({ open }) => (
  <Sidenav
    open={open}
    sx={{
      display: [null, "block"],
      width: 256,
      flex: "none",
      px: 3,
      py: 0,
      mt: [64, 0]
    }}
  >
    <ul sx={{ listStyle: "none", p: 3, m: 0 }}>
      {links.map(link => (
        <SidebarLink to={link.path}>{link.title}</SidebarLink>
      ))}
    </ul>
  </Sidenav>
);

export default Sidebar;
