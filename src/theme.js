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
