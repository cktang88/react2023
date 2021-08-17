import React, { useRef, useState } from "react";
import { ThemeProvider, Flex, Select, Box } from "theme-ui";
import theme from "../styles/theme";
import GridTest from "../components/gridtest/grid";
import TableTest from "../components/gridtest/table";
export default function Index() {
  const [grid, setGrid] = useState("table");

  const data = [
    ["John", "john@example.com", "+353 40 222 3333"],
    ["Mark", "mark@gmail.com", "+1 22 888 4444"],
    ["John", "john@example.com", null],
    ["Mike", "mike@gmail.com", undefined],
  ];

  const columns = ["Name", "Email", "Phone"].map((e) => ({
    Header: e,
    accessor: e,
  }));

  // Use at the root of your app
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          maxWidth: "500px",
        }}
        m={4}
      >
        <Select
          defaultValue="Hello"
          value={grid}
          onChange={(e) => setGrid(e.target.value)}
        >
          <option value={"grid"}>gridJS</option>
          <option value={"table"}>react-table</option>
        </Select>
      </Box>

      <Flex
        sx={{
          minWidth: "500px",
        }}
      >
        <Box>
          {grid == "grid" ? (
            <GridTest data={data} />
          ) : (
            <TableTest data={data} columns={columns} />
          )}
        </Box>
      </Flex>
      {/* {Array(10000)
        .fill(0)
        .map((e, i) => (
          <div key={i}>{i}</div>
        ))} */}
    </ThemeProvider>
  );
}
