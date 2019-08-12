import styled from "styled-components";
import PropTypes from "prop-types";

import { KEYS_FOR_CHART } from "../../../constants";
import withAPIRequest from "../../WithAPIRequest/WithAPIRequest";
import Chart from "./Chart";

const StyledChart = styled.div`
  width: 100%;
  height: 400px;
`;

const Statistics = ({ data }) => {
  const prepareChartData = () =>
    KEYS_FOR_CHART.map(item => {
      return {
        name: item.name,
        [item.key]: data.find(row => {
          return row.field === item.key;
        }).sum
      };
    });

  const totals = prepareChartData();

  return (
    <StyledChart>
      <Chart data={totals} />
    </StyledChart>
  );
};

const StatisticsWithAPIRequest = withAPIRequest(Statistics, ({ id }) => ({
  url: "players/" + id + "/totals"
}));

Statistics.defaultProps = {
  data: PropTypes.array.isRequired
};

StatisticsWithAPIRequest.propTypes = {
  id: PropTypes.string.isRequired
};

export default StatisticsWithAPIRequest;

// Не обращать внимания

// let arr = totals.reduce(
//   (acc, curr) =>
//     BAR_CHART_SETTINGS.keys.indexOf(curr.field) !== -1
//       ? [
//           ...acc,
//           {
//             name:
//               KEYS_FOR_CHART[BAR_CHART_SETTINGS.keys.indexOf(curr.field)]
//                 .name,
//             [curr.field]: curr.sum
//           }
//         ]
//       : [...acc],
//   []
