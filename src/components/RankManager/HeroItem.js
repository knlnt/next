import PropTypes from "prop-types";
import { ListItemAvatar, Avatar, ListItemText, Grid } from "@material-ui/core";

const HeroItem = ({ name, icon, roles }) => (
  <Grid container direction="row" alignItems="center">
    <ListItemAvatar>
      <Avatar alt={name} src={"https://api.opendota.com" + icon} />
    </ListItemAvatar>
    <ListItemText primary={name} secondary={roles[0]} />
  </Grid>
);

HeroItem.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  roles: PropTypes.array.isRequired
};

export default HeroItem;
