import PropTypes from "prop-types";
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar
} from "@material-ui/core";

const Player = ({ avatar, personaname }) => (
  <ListItem button>
    <ListItemAvatar>
      <Avatar src={avatar} />
    </ListItemAvatar>
    <ListItemText primary={personaname} />
  </ListItem>
);

Player.propTypes = {
  avatar: PropTypes.string.isRequired,
  personaname: PropTypes.string.isRequired
};

export default Player;
