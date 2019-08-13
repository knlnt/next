import PropTypes from "prop-types";
import styled from "styled-components";
import {
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Avatar,
  ListItem
} from "@material-ui/core";

const StyledCardMedia = styled(CardMedia)`
  height: 200px;
`;

const ViewCard = ({ avatar, personaname, rank_tier, score }) => (
  <>
    <CardHeader
      avatar={<Avatar aria-label="recipe">{personaname[0]}</Avatar>}
      title={personaname}
      subheader={"Уровень ранга — " + rank_tier}
    />
    <StyledCardMedia image={avatar} title={personaname} />
    <CardContent>
      <Typography>
        {"Количество очков — " + score.toString().substring(0, 4)}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the
        mussels, if you like.
      </Typography>
    </CardContent>
  </>
);

ViewCard.defaultProps = {
  rank_tier: "Не определен"
};

ViewCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  personaname: PropTypes.string.isRequired,
  rank_tier: PropTypes.number,
  score: PropTypes.number.isRequired
};

export default ViewCard;
