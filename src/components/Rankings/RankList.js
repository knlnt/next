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

const RankListWithAPIRequest = withAPIRequest(RankList, ({ id }) => ({
  url: "rankings?hero_id=" + id
}));

RankList.defaultProps = {
  data: PropTypes.array.isRequired
};

RankListWithAPIRequest.propTypes = {
  id: PropTypes.number.isRequired
};

export default RankListWithAPIRequest;
