import styled from "styled-components";
import PropTypes from "prop-types";
import Heroes from "./Heroes";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";

const FormManager = styled(Paper)`
  margin-bottom: 30px;
  padding: 10px;
`;
const StyledFormControl = styled(FormControl)`
  width: 100%;
`;

const RankManager = ({ updateListPlayers }) => {
  return (
    <FormManager>
      <Typography variant="h5" align="left" component="h5" gutterBottom>
        Топ игроков по имени героя
      </Typography>
      <form autoComplete="off">
        <StyledFormControl>
          <Heroes updateListPlayers={updateListPlayers} />
        </StyledFormControl>
      </form>
    </FormManager>
  );
};

RankManager.propTypes = {
  updateListPlayers: PropTypes.func
};

export default RankManager;
