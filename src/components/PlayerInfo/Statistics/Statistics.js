import { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { BASE_URL, KEYS_FOR_CHART } from "../../../constants";
import DownloadTemplate from "../../DownloadTemplate/DownloadTemplate";
import Chart from "./Chart";

const StyledChart = styled.div`
  width: 100%;
  height: 400px;
`;

class Statistics extends Component {
  state = {
    totals: []
  };
  render() {
    const { totals } = this.state;
    const { id } = this.props;
    return (
      <StyledChart>
        <DownloadTemplate
          url={BASE_URL + "players/" + id + "/totals"}
          onUpdateData={this.handleUpdateData}
        >
          <Chart data={totals} />
        </DownloadTemplate>
      </StyledChart>
    );
  }
  handleUpdateData = totals => {
    this.setState({
      totals: KEYS_FOR_CHART.map(item => {
        return {
          name: item.name,
          [item.key]: totals.find(row => {
            return row.field === item.key;
          }).sum
        };
      })
    });
  };
}

Statistics.propTypes = {
  id: PropTypes.string.isRequired
};

export default Statistics;
