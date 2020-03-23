import { dark as theme } from "@theme-ui/presets";
export default {
  ...theme,
  colors: {
    ...theme.colors,
    background: "#121212"
  },
  fonts: {
    body: '"JetBrains Mono", serif',
    heading: '"JetBrains Mono", serif',
    monospace: '"JetBrains Mono", monospace'
  },
  links: {
    ...theme.links,
    nav: {
      fontWeight: "bold",
      color: "inherit",
      textDecoration: "none",
      ":hover,:focus": {
        color: "primary"
      }
    },
    navActive: {
      fontWeight: "bold",
      color: "purple",
      textDecoration: "none",
      ":hover,:focus": {
        color: "primary"
      }
    }
  }
};
