import { Box, Flex } from "@chakra-ui/core";
import { data } from "../data";
import Submission from "./Submission";
export default function Submissions() {
  return (
    <Flex justifyContent="center">
      <Box width="60%">
        {data.map((e, i) => (
          <Submission isEven={i % 2 ? true : false} {...e}></Submission>
        ))}
      </Box>
    </Flex>
  );
}
