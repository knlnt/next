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
          updateData={this.updateData}
        >
          <Chart data={totals} />
        </DownloadTemplate>
      </StyledChart>
    );
  }
  updateData = newValue => {
    const createObject = (name, secondKey, sum) => {
      let newObject = {};
      newObject["name"] = name;
      newObject[secondKey] = sum;
      return newObject;
    };
    this.setState(prevState => {
      totals: newValue.forEach(item => {
        KEYS_FOR_CHART.forEach(row => {
          if (item.field === row.key)
            prevState.totals.push(createObject(row.name, row.key, item.sum));
        });
      });
    });
  };
}

Statistics.propTypes = {
  id: PropTypes.string.isRequired
};

export default Statistics;
