/** @jsx jsx */
import { jsx } from "theme-ui";
import { FunctionComponent } from "react";

const Burger = ({ size = "1em" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentcolor"
    viewBox="0 0 24 24"
    sx={{
      display: "block",
      margin: 0
    }}
  >
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
);

type Props = {
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
};

const MenuButton: FunctionComponent<Props> = ({ onClick, ...props }) => (
  <button
    title="Toggle Menu"
    onClick={onClick}
    {...props}
    sx={{
      fontFamily: "inherit",
      fontSize: 24,
      color: "inherit",
      bg: "transparent",
      width: 32,
      height: 32,
      p: 1,
      m: 0,
      border: 0,
      appearance: "none",
      ":focus": {
        outline: "2px solid"
      },
      "@media screen and (min-width: 40em)": {
        display: "none"
      }
    }}
  >
    <Burger />
  </button>
);

export default MenuButton;
