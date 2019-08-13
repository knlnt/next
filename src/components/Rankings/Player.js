import PropTypes from "prop-types";
import Link from "next/link";
import { List, Card, Grid } from "@material-ui/core";

import ViewList from "./PlayerView/ViewList";
import ViewCard from "./PlayerView/ViewCard";

const Player = ({ typeView, id, ...props }) => (
  <Link href={"/player?id=" + id}>
    {typeView ? (
      <List>
        <ViewList {...props} />
      </List>
    ) : (
      <Grid xs={3} item>
        <Card>
          <ViewCard {...props} />
        </Card>
      </Grid>
    )}
  </Link>
);

Player.propTypes = {
  id: PropTypes.number.isRequired,
  typeView: PropTypes.bool.isRequired
};

export default Player;
