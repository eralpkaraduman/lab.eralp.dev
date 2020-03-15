/** @jsx jsx */
import { jsx, Flex, Box, Link } from "theme-ui";
import { FunctionComponent, useState, useRef } from "react";
import Header from "../components/header";
import { Sidenav } from "@theme-ui/sidenav";
import { importMDX } from "mdx.macro";
import NavLink from "../components/nav-link";
import NavList from "../components/nav-list";
// import { Location } from '@reach/router'
const SidebarLinks = importMDX.sync("../sidebar-links.mdx");

type Props = {};

const DefaultLayout: FunctionComponent<Props> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = useRef<HTMLDivElement>(null);
  return (
    <Flex sx={{ flexDirection: "column", minHeight: "100vh" }}>
      <Header
        onMenuButtonClick={e => {
          setMenuOpen(!menuOpen);
          if (!nav.current) return;
          const navLink = nav.current.querySelector("a");
          if (navLink) navLink.focus();
        }}
      />
      <Box
        sx={{
          flex: "1 1 auto"
        }}
      >
        <div sx={{ display: ["block", "flex"] }}>
          <div
            ref={nav}
            onFocus={e => {
              setMenuOpen(true);
            }}
            onBlur={e => {
              setMenuOpen(false);
            }}
            onClick={e => {
              setMenuOpen(false);
            }}
          >
            {/*
            <Location
              children={({ location }) => ( 
            */}
            <Sidenav
              pathname={"/"}
              open={menuOpen}
              sx={{
                display: [null, "block"],
                width: 256,
                flex: "none",
                px: 3,
                py: 0,
                mt: [64, 0]
              }}
            >
              <SidebarLinks
                components={{
                  a: NavLink,
                  ul: NavList
                }}
              />
            </Sidenav>
          </div>
          <main
            id="content"
            sx={{
              width: "100%",
              minWidth: 0,
              maxWidth: 768,
              mx: "auto",
              px: 3
            }}
          >
            {children}
          </main>
        </div>
      </Box>
    </Flex>
  );
};

export const withDefaultLayout = <P extends object>(
  Component: React.ComponentType<P>
): FunctionComponent => {
  return props => (
    <DefaultLayout>
      <Component {...(props as P)} components={{ a: Link }} />
    </DefaultLayout>
  );
};

export default DefaultLayout;
