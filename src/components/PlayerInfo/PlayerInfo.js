import PropTypes from "prop-types";
import { Card } from "@material-ui/core";

import PlayerHeaderWithAPIRequest from "./Header";
import RecentMatchesWithAPIRequest from "./RecentMatches/RecentMatches";
import StatisticsWithAPIRequest from "./Statistics/Statistics";

const PLayerInfo = ({ id }) => (
  <Card>
    <PlayerHeaderWithAPIRequest id={id} />
    <RecentMatchesWithAPIRequest id={id} />
    <StatisticsWithAPIRequest id={id} />
  </Card>
);

PLayerInfo.propTypes = {
  id: PropTypes.string.isRequired
};

export default PLayerInfo;
