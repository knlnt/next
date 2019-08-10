import { Component } from "react";
import { List, Paper } from "@material-ui/core";
import PropTypes from "prop-types";

import DownloadTemplate from "../DownloadTemplate/DownloadTemplate";
import Player from "./Player";
import { BASE_URL } from "../../constants";

class RankList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rankings: [],
      id: props.id
    };
  }
  render() {
    const { rankings, id } = this.state;
    return (
      <DownloadTemplate
        url={BASE_URL + "rankings?hero_id=" + id}
        updateData={this.updateData}
      >
        <Paper>
          <List>
            {rankings.map(({ account_id, ...props }) => (
              <Player key={account_id} id={account_id} {...props} />
            ))}
          </List>
        </Paper>
      </DownloadTemplate>
    );
  }
  updateData = newValue => {
    this.setState({
      rankings: newValue.rankings
    });
  };
}

RankList.propTypes = {
  id: PropTypes.number.isRequired
};

export default RankList;
