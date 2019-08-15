import { Typography, CardContent, List } from "@material-ui/core";
import PropTypes from "prop-types";

import withAPIRequest from "../../WithAPIRequest/WithAPIRequest";
import Match from "./Match";

const RecentMatches = ({ data }) => (
  <CardContent>
    <Typography variant="h5" align="left" component="h5" gutterBottom>
      Последние сыгранные матчи
    </Typography>
    <List>
      {data &&
        data.map(({ match_id, ...props }) => (
          <Match key={match_id} {...props} />
        ))}
    </List>
  </CardContent>
);

RecentMatches.defaultProps = {
  data: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired
};

export default withAPIRequest(RecentMatches, id => ({
  url: "players/" + id + "/recentMatches"
}));
