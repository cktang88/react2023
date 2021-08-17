import { Box, Text } from "@chakra-ui/core";
import customTheme from "../../styles/custom";

import Link from "next/link";

const HeaderLink = (props) => {
  return (
    <Box mx={3}>
      <Link href={`/${props.word}`}>
        <a>{props.word}</a>
      </Link>
    </Box>
  );
};

export default function Header() {
  return (
    <Box
      display="flex"
      justifyItems=""
      bg={customTheme.colors.brand.orange}
      py={3}
    >
      <Box mx={3}>
        <Text>[x]</Text>
      </Box>
      <HeaderLink word="top" />
      |
      <HeaderLink word="new" />
      |
      <HeaderLink word="best" />
      |
      <HeaderLink word="submit" />
      |
      <HeaderLink word="more" />
    </Box>
  );
  //   return <div></div>;
}
