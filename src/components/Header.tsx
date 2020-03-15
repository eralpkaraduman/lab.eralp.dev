/** @jsx jsx */
import { jsx } from "theme-ui";
import { FunctionComponent } from "react";
import { Flex, Link } from "theme-ui";
import MenuButton from "./menu-button";

type Props = {
  onMenuButtonClick(event: React.MouseEvent<HTMLButtonElement>): void;
};

const Header: FunctionComponent<Props> = ({ onMenuButtonClick }) => {
  return (
    <Flex
      sx={{
        height: 64,
        px: 3,
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <Flex sx={{ alignItems: "center" }}>
        <MenuButton onClick={onMenuButtonClick} />
        <Link sx={{ variant: "links.nav" }} href="/">
          WEB DDD
        </Link>
      </Flex>
      <Flex>
        <Link href="https://github.com/system-ui/theme-ui">GitHub</Link>
      </Flex>
    </Flex>
  );
};

export default Header;
