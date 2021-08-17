import { Box, Flex, Text } from "@chakra-ui/core";
import Link from "next/link";
import customTheme from "../../styles/custom";
import dayjs from "dayjs";
dayjs().format();
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);
let today = dayjs();

type PropType = {
  by: string;
  score: number;
  time: number;
  descendants: number;
  title: string;
  url: string;

  isEven: boolean;
};
const SubmissionLink = ({ word, url }) => {
  return (
    <Box ml={3} fontSize="xl">
      <Link href={`/${url}`}>
        <a>{word}</a>
      </Link>
    </Box>
  );
};

const { brand } = customTheme.colors;

export default function Submission({
  by,
  score,
  descendants,
  title,
  url,
  time,
  isEven,
}: PropType) {
  return (
    <Box bg={isEven ? brand.lightGray : brand.gray} py={1}>
      <Flex alignItems="flex-end" justifyContent="center">
        <Box mx={3}>
          <Text>{descendants}</Text>
        </Box>
        <Box ml={3}>
          <Text color={brand.orange}>{score}</Text>
        </Box>

        <SubmissionLink word={title} url={url} />
        <Text fontSize="sm" color={"#aaa"} mx={1}>
          by
        </Text>
        <Text fontSize="sm">{by}</Text>
        <Text fontSize="sm" mx={1}>
          1 day ago
        </Text>
        {/* <Text>{today.from(dayjs(time))}</Text> */}
      </Flex>
    </Box>
  );
}
