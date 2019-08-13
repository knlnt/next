import PropTypes from "prop-types";
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography
} from "@material-ui/core";

const ViewList = ({ avatar, personaname, rank_tier, score }) => (
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
);

ViewList.defaultProps = {
  rank_tier: "Не определен"
};

ViewList.propTypes = {
  avatar: PropTypes.string.isRequired,
  personaname: PropTypes.string.isRequired,
  rank_tier: PropTypes.number,
  score: PropTypes.number.isRequired
};

export default ViewList;
