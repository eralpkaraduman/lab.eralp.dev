/** @jsx jsx */
import { jsx } from "theme-ui";
import { FunctionComponent } from "react";
import { Flex, Link } from "theme-ui";
import MenuButton from "./menu-button";
import { GITHUB_URL } from "../constants";

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
          lab.eralp.dev
        </Link>
      </Flex>
      <Flex>
        <Link href={GITHUB_URL}>GitHub</Link>
      </Flex>
    </Flex>
  );
};

export default Header;
