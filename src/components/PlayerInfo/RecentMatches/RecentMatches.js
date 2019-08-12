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

const RecentMatchesWithAPIRequest = withAPIRequest(RecentMatches, ({ id }) => ({
  url: "players/" + id + "/recentMatches"
}));

RecentMatches.defaultProps = {
  data: PropTypes.array.isRequired
};

RecentMatchesWithAPIRequest.propTypes = {
  id: PropTypes.string.isRequired
};

export default RecentMatchesWithAPIRequest;
