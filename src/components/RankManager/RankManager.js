import styled from "styled-components";
import PropTypes from "prop-types";
import { Paper, Typography } from "@material-ui/core";

import HeroesSelect from "./HeroesSelect";

const StyledPaper = styled(Paper)`
  margin-bottom: 30px;
  padding: 10px;
`;

const RankManager = ({ updateCurrentHero }) => (
  <StyledPaper>
    <Typography variant="h5" align="left" component="h5" gutterBottom>
      Топ игроков по имени героя
    </Typography>
    <HeroesSelect updateCurrentHero={updateCurrentHero} />
  </StyledPaper>
);

RankManager.propTypes = {
  updateCurrentHero: PropTypes.func.isRequired
};

export default RankManager;
