/** @jsx jsx */
import { jsx } from "theme-ui";
import { FunctionComponent } from "react";
import { Sidenav } from "@theme-ui/sidenav";
import SidebarLink from "./sidebar-link";

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
      <SidebarLink to="/brython">Brython</SidebarLink>
      <SidebarLink to="/box">Box</SidebarLink>
    </ul>
  </Sidenav>
);

export default Sidebar;
