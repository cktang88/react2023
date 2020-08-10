import FormTest from "../components/form/form";
import { ThemeProvider } from "theme-ui";
import theme from "../styles/theme";

export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      <FormTest />
    </ThemeProvider>
  );
}
