import PropTypes from "prop-types";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";

const Player = ({ rank }) => {
  return (
    <ListItem button>
      <ListItemAvatar>
        <Avatar src={rank.avatar} />
      </ListItemAvatar>
      <ListItemText primary={rank.personaname} />
    </ListItem>
  );
};

Player.propTypes = {
  rank: PropTypes.shape({
    avatar: PropTypes.string,
    personaname: PropTypes.string
  })
};

export default Player;
