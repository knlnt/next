import { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { KEYS_FOR_CHART } from "../../../constants";
import DownloadTemplate from "../../DownloadTemplate/DownloadTemplate";
import Chart from "./Chart";

const StyledChart = styled.div`
  width: 100%;
  height: 400px;
`;

class StatisticsTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totals: this.handleUpdateData(props.data)
    };
  }
  render() {
    const { totals } = this.state;
    return (
      <StyledChart>
        <Chart data={totals && totals} />
      </StyledChart>
    );
  }
  handleUpdateData = totals =>
    KEYS_FOR_CHART.map(item => {
      return {
        name: item.name,
        [item.key]: totals.find(row => {
          return row.field === item.key;
        }).sum
      };
    });
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
}

const Statistics = DownloadTemplate(StatisticsTemplate, ({ id }) => ({
  url: "players/" + id + "/totals"
}));

Statistics.propTypes = {
  id: PropTypes.string.isRequired
};

export default Statistics;
