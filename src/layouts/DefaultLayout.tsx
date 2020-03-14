/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Flex, Box } from "theme-ui";
import Header from "../components/Header";

type Props = {};

const DefaultLayout: FunctionComponent<Props> = ({ children }) => (
  <Flex sx={{ flexDirection: "column", minHeight: "100vh" }}>
    <Header />

    <Box
      sx={{
        flex: "1 1 auto"
      }}
    >
      <div sx={{ display: ["block", "flex"] }}>
        {/* <div>Navigation</div> */}
        <main
          sx={{
            width: "100%",
            minWidth: 0,
            maxWidth: false ? "none" : 768,
            mx: "auto",
            px: false ? 0 : 3
          }}
        >
          {children}
        </main>
      </div>
    </Box>
  </Flex>
);

export default DefaultLayout;
