import { dark as theme } from "@theme-ui/presets";
export default {
  ...theme,
  colors: {
    ...theme.colors,
    background: "#121212",
  },
  fonts: {
    body: "Fira Code, sans-serif",
    heading: "Fira Code, sans-serif",
    monospace: "Fira Code, monospace, sans-serif",
  },
  buttons: {
    ...theme.buttons,
    expermientExpand: {
      cursor: "pointer",
      backgroundColor: "unset",
      color: `#ffffffff`,
      padding: 0,
      margin: 0,
      lineHeight: 0,
      outline: "none",
    },
  },
  links: {
    ...theme.links,
    nav: {
      fontWeight: "bold",
      color: "inherit",
      textDecoration: "none",
      ":hover,:focus": {
        color: "primary",
      },
    },
    navActive: {
      fontWeight: "bold",
      color: "purple",
      textDecoration: "none",
      ":hover,:focus": {
        color: "primary",
      },
    },
  },
};
