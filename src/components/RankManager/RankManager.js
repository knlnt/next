import styled from "styled-components";
import PropTypes from "prop-types";
import { Paper, Typography, FormControl } from "@material-ui/core";

import Heroes from "./Heroes";

const StyledPaper = styled(Paper)`
  margin-bottom: 30px;
  padding: 10px;
`;
const StyledFormControl = styled(FormControl)`
  width: 100%;
`;

const RankManager = ({ updateCurrentHero }) => (
  <StyledPaper>
    <Typography variant="h5" align="left" component="h5" gutterBottom>
      Топ игроков по имени героя
    </Typography>
    <form autoComplete="off">
      <StyledFormControl>
        <Heroes updateCurrentHero={updateCurrentHero} />
      </StyledFormControl>
    </form>
  </StyledPaper>
);

RankManager.propTypes = {
  updateCurrentHero: PropTypes.func.isRequired
};

export default RankManager;
