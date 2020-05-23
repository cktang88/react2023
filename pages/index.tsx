import React from "react";
import { ThemeProvider, CSSReset, theme } from "@chakra-ui/core";
import customTheme from "../styles/custom";
import Layout from "../components/Layout";
import Submissions from "../components/Submissions";
import { Global, css } from "@emotion/core";
export default function Index() {
  // Use at the root of your app
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Global
        styles={css`
          body {
            background-color: rgb(246, 246, 239);
          }
        `}
      />
      <Layout>
        <Submissions />
      </Layout>
    </ThemeProvider>
  );
}
