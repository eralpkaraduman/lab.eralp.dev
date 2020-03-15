/** @jsx jsx */
import { jsx, Flex, Box, Link } from "theme-ui";
import { FunctionComponent, useState } from "react";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

type Props = {};

const DefaultLayout: FunctionComponent<Props> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Flex sx={{ flexDirection: "column", minHeight: "100vh" }}>
      <Header onMenuButtonClick={e => setMenuOpen(!menuOpen)} />
      <Box
        sx={{
          flex: "1 1 auto"
        }}
      >
        <div sx={{ display: ["block", "flex"] }}>
          <div
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
            <Sidebar open={menuOpen} />
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
