import React from "react";
import { ThemeProvider } from "theme-ui";
// import customTheme from "../styles/custom";
import theme from "../styles/theme";
export default function Index() {
  // Use at the root of your app
  return (
    <ThemeProvider theme={theme}>
      <div>hello</div>
    </ThemeProvider>
  );
}
