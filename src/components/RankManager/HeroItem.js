import PropTypes from "prop-types";
import { ListItemAvatar, Avatar, ListItemText } from "@material-ui/core";

const HeroItem = ({ name, icon, roles }) => (
  <>
    <ListItemAvatar>
      <Avatar alt={name} src={"https://api.opendota.com" + icon} />
    </ListItemAvatar>
    <ListItemText primary={name} secondary={roles[0]} />
  </>
);

HeroItem.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  roles: PropTypes.array.isRequired
};

export default HeroItem;
