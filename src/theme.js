import { dark as theme, roboto } from "@theme-ui/presets";
export default {
  ...theme,
  colors: {
    ...theme.colors,
    background: "#121212"
  },
  fonts: roboto.fonts,
  links: {
    ...theme.links,
    nav: {
      fontWeight: "bold",
      color: "inherit",
      textDecoration: "none",
      ":hover,:focus": {
        color: "primary"
      }
    }
  }
};
