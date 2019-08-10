import { ResponsiveBar } from "@nivo/bar";

import { KEYS_FOR_CHART } from "../../../constants";

const KEYS = KEYS_FOR_CHART.map(item => {
  return true ? item.key : false;
});

const Chart = ({ data }) => (
  <ResponsiveBar
    data={data}
    keys={KEYS}
    indexBy="name"
    margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
    padding={0.3}
    colors={{ scheme: "category10" }}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "#38bcb2",
        size: 4,
        padding: 1,
        stagger: true
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "#eed312",
        rotation: -45,
        lineWidth: 6,
        spacing: 10
      }
    ]}
    fill={[
      {
        match: {
          id: "fries"
        },
        id: "dots"
      },
      {
        match: {
          id: "sandwich"
        },
        id: "lines"
      }
    ]}
    borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Статистика",
      legendPosition: "middle",
      legendOffset: 32
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "",
      legendPosition: "middle",
      legendOffset: -40
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
  />
);

export default Chart;
