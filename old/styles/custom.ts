import { theme } from "@chakra-ui/core";

// Let's say you want to add custom colors
const customTheme = {
  ...theme,
  fonts: {
    heading: '"Verdana", "Avenir Next", sans-serif',
    body: "system-ui, sans-serif",
    mono: "Menlo, monospace",
  },
  colors: {
    ...theme.colors,
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
      lightGray: "rgb(246, 246, 239)",
      gray: "rgb(230, 230, 223)",
      orange: "#ff6600",
    },
  },
};
export default customTheme;
