import { Typography, CardContent, List } from "@material-ui/core";

import Match from "./Match";

const RecentMatches = ({ recentMatches }) => (
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
);

export default RecentMatches;
