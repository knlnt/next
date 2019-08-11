import { ResponsiveBar } from "@nivo/bar";

import { BAR_CHART_SETTINGS } from "../../../constants";

const Chart = ({ data }) => (
  <ResponsiveBar data={data} {...BAR_CHART_SETTINGS} />
);

export default Chart;
