import * as React from "react";
// 1. import 'ChakraProvider' component
import { ChakraProvider } from "@chakra-ui/react";
import SignupForm from "./features/form";
function App() {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <SignupForm />
    </ChakraProvider>
  );
}

export default App;
