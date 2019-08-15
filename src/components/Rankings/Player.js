import PropTypes from "prop-types";
import Link from "next/link";
import { List, Card, Grid } from "@material-ui/core";

import PlayerList from "./PlayerView/PlayerList";
import PlayerCard from "./PlayerView/PlayerCard";

const Player = ({ isListView, id, ...props }) => (
  <Link href={"/player?id=" + id}>
    {isListView ? (
      <List>
        <PlayerList {...props} />
      </List>
    ) : (
      <Grid xs={3} item>
        <Card>
          <PlayerCard {...props} />
        </Card>
      </Grid>
    )}
  </Link>
);

Player.propTypes = {
  id: PropTypes.number.isRequired,
  isListView: PropTypes.bool.isRequired
};

export default Player;
