import PropTypes from "prop-types";
import styled from "styled-components";
import {
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Avatar
} from "@material-ui/core";

const StyledCardMedia = styled(CardMedia)`
  height: 200px;
`;
const StyledParentCard = styled.div`
  cursor: pointer;
`;

const PlayerCard = ({ avatar, personaname, rank_tier, score }) => (
  <StyledParentCard>
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
      {/* TODO
      Временная заглушка, убрать когда API предоставит более полные данные */}
      <Typography variant="body2" color="textSecondary" component="p">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the
        mussels, if you like.
      </Typography>
    </CardContent>
  </StyledParentCard>
);

PlayerCard.defaultProps = {
  rank_tier: "Не определен"
};

PlayerCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  personaname: PropTypes.string.isRequired,
  rank_tier: PropTypes.number,
  score: PropTypes.number.isRequired
};

export default PlayerCard;
