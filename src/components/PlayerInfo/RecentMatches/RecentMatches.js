import { Component } from "react";
import { Typography, CardContent, List } from "@material-ui/core";
import PropTypes from "prop-types";

import DownloadTemplate from "../../DownloadTemplate/DownloadTemplate";
import { BASE_URL } from "../../../constants";
import Match from "./Match";

class RecentMatches extends Component {
  state = {
    recentMatches: []
  };
  render() {
    const { id } = this.props;
    const { recentMatches } = this.state;
    return (
      <DownloadTemplate
        url={BASE_URL + "players/" + id + "/recentMatches"}
        onUpdateData={this.handleUpdateData}
      >
        <CardContent>
          <Typography variant="h5" align="left" component="h5" gutterBottom>
            Последние сыгранные матчи
          </Typography>
          <List>
            {recentMatches.map(({ match_id, ...props }) => (
              <Match key={match_id} {...props} />
            ))}
          </List>
        </CardContent>
      </DownloadTemplate>
    );
  }
  handleUpdateData = recentMatches => {
    this.setState({
      recentMatches
    });
  };
}

RecentMatches.propTypes = {
  id: PropTypes.string.isRequired
};

export default RecentMatches;
