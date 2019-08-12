import PropTypes from "prop-types";
import { Card } from "@material-ui/core";

import PlayerHeader from "./Header";
import RecentMatches from "./RecentMatches/RecentMatches";
import Statistics from "./Statistics/Statistics";

const PLayerInfo = ({ id }) => (
  <Card>
    <PlayerHeader id={id} />
    <RecentMatches id={id} />
    <Statistics id={id} />
  </Card>
);

PLayerInfo.propTypes = {
  id: PropTypes.string.isRequired
};

export default PLayerInfo;
