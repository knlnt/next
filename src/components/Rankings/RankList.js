import { List, Paper } from "@material-ui/core";
import PropTypes from "prop-types";

import withAPIRequest from "../WithAPIRequest/WithAPIRequest";
import Player from "./Player";

const RankList = ({ data }) => (
  <Paper>
    <List>
      {data.rankings &&
        data.rankings.map(({ account_id, ...props }) => (
          <Player key={account_id} id={account_id} {...props} />
        ))}
    </List>
  </Paper>
);

RankList.defaultProps = {
  data: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired
};

export default withAPIRequest(RankList, ({ id }) => ({
  url: "rankings?hero_id=" + id
}));
