import styled from "styled-components";
import { ListItem, ListItemIcon, Icon, ListItemText } from "@material-ui/core";
import { red, green } from "@material-ui/core/colors";
import PropTypes from "prop-types";

const StyledIcon = styled(Icon)`
  color: ${props => (props.radiantWin ? green[500] : red[500])};
`;

const Match = ({ radiant_win, kills, deaths, assists }) => (
  <ListItem>
    <ListItemIcon>
      <StyledIcon radiantWin={radiant_win}>
        {radiant_win ? "sentiment_satisfied_alt" : "sentiment_dissatisfied"}
      </StyledIcon>
    </ListItemIcon>
    <ListItemText
      primary={kills + "/" + deaths + "/" + assists}
      secondary="У/С/П"
    />
  </ListItem>
);

Match.propTypes = {
  radiant_win: PropTypes.bool.isRequired,
  kills: PropTypes.number.isRequired,
  deaths: PropTypes.number.isRequired,
  assists: PropTypes.number.isRequired
};

export default Match;
