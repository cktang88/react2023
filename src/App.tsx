import * as React from "react";
// 1. import 'ChakraProvider' component
import { Box, ChakraProvider, Divider, Flex } from "@chakra-ui/react";
import SignupForm from "./features/form";
import DataTable from "./features/table";
function App() {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <Flex flexDirection="column">
        <Box mx="auto" py={2} px={8}>
          <SignupForm />
        </Box>
        <Divider m={8} />
        <Box mx="auto" py={2} px={8}>
          <DataTable />
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
