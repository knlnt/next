import { Component } from "react";
import { Typography, CardContent, List } from "@material-ui/core";
import PropTypes from "prop-types";

import DownloadTemplate from "../../DownloadTemplate/DownloadTemplate";
import Match from "./Match";

class RecentMatchesTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recentMatches: props.data
    };
  }

  render() {
    const { recentMatches } = this.state;
    return (
      <CardContent>
        <Typography variant="h5" align="left" component="h5" gutterBottom>
          Последние сыгранные матчи
        </Typography>
        <List>
          {recentMatches &&
            recentMatches.map(({ match_id, ...props }) => (
              <Match key={match_id} {...props} />
            ))}
        </List>
      </CardContent>
    );
  }
}

const RecentMatches = DownloadTemplate(RecentMatchesTemplate, ({ id }) => ({
  url: "players/" + id + "/recentMatches"
}));

RecentMatches.propTypes = {
  id: PropTypes.string.isRequired
};

export default RecentMatches;
