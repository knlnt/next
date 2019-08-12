import PropTypes from "prop-types";
import Link from "next/link";
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography
} from "@material-ui/core";

const Player = ({ id, avatar, personaname, rank_tier, score }) => (
  <Link href={"/player?id=" + id}>
    <ListItem button>
      <ListItemAvatar>
        <Avatar src={avatar} />
      </ListItemAvatar>
      <ListItemText
        primary={personaname}
        secondary={
          <>
            <Typography component="span" variant="body2" color="textPrimary">
              Уровень ранга — {rank_tier}
              <br />
            </Typography>
            Количество очков — {score}
          </>
        }
      />
    </ListItem>
  </Link>
);

Player.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  personaname: PropTypes.string.isRequired,
  rank_tier: PropTypes.number,
  score: PropTypes.number.isRequired
};
Player.defaultProps = {
  rank_tier: "Не определен"
};

export default Player;
