import { Component } from "react";
import { List, Paper } from "@material-ui/core";
import PropTypes from "prop-types";

import DownloadTemplate from "../DownloadTemplate/DownloadTemplate";
import Player from "./Player";

class RankListTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rankings: props.data.rankings
    };
  }
  render() {
    const { rankings } = this.state;
    return (
      <Paper>
        <List>
          {rankings &&
            rankings.map(({ account_id, ...props }) => (
              <Player key={account_id} id={account_id} {...props} />
            ))}
        </List>
      </Paper>
    );
  }
}

const RankList = DownloadTemplate(RankListTemplate, ({ id }) => ({
  url: "rankings?hero_id=" + id
}));

RankList.propTypes = {
  id: PropTypes.number.isRequired
};

export default RankList;
