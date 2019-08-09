import styled from "styled-components";
import {
  ListItem,
  ListItemIcon,
  Icon,
  ListItemText,
  Avatar
} from "@material-ui/core";
import { red, green } from "@material-ui/core/colors";

const StyledIcon = styled(Icon)`
  color: ${props => (props.radiant_win ? green[500] : red[500])};
`;

const Match = ({ radiant_win, kills, deaths, assists }) => (
  <ListItem>
    <ListItemIcon>
      <StyledIcon radiant_win={radiant_win}>
        {radiant_win ? "sentiment_satisfied_alt" : "sentiment_dissatisfied"}
      </StyledIcon>
    </ListItemIcon>
    <ListItemText
      primary={kills + "/" + deaths + "/" + assists}
      secondary="У/С/П"
    />
  </ListItem>
);

export default Match;
