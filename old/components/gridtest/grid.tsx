import { Grid } from "gridjs-react";
import { _ } from "gridjs-react";
import { Button } from "theme-ui";

const GridTest = ({ data }) => {
  let curdata = data || [
    ["John", "john@example.com", "+353 40 222 3333"],
    ["Mark", "mark@gmail.com", "+1 22 888 4444"],
  ];
  return (
    <Grid
      data={curdata}
      columns={[
        "Name",
        "Email",
        {
          name: "Phone Number",
          sort: {
            // can't handle undefined...
            compare: (a, b) => {
              return (a || "") > (b || "");
            },
          },
          formatter: (cell, row) => _(<Button>{cell}</Button>),
        },
      ]}
      search={true}
      pagination={{
        enabled: true,
        limit: 10,
      }}
      sort={true}
    />
  );
};
export default GridTest;
