import React, { ReactElement } from "react";
import { Flex, Link } from "theme-ui";

export default function Header(): ReactElement {
  return (
    <Flex
      sx={{
        height: 64,
        px: 3,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#000"
      }}
    >
      <Flex sx={{ alignItems: "center" }}>
        {/* MenuButton: https://github.com/system-ui/theme-ui/blob/d209d9efd1f9d11b9ea178ae010a58d7a5ca453d/packages/docs/src/components/layout.js#L72 */}
        <Link sx={{ variant: "links.nav" }} href="/">
          WEB DDD
        </Link>
      </Flex>
    </Flex>
  );
}
