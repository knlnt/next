import PropTypes from "prop-types";
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar
} from "@material-ui/core";

const Player = ({ player }) => (
  <ListItem button>
    <ListItemAvatar>
      <Avatar src={player.avatar} />
    </ListItemAvatar>
    <ListItemText primary={player.personaname} />
  </ListItem>
);

Player.propTypes = {
  player: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    personaname: PropTypes.string.isRequired
  }).isRequired
};

export default Player;
