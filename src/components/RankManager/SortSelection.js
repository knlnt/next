import PropTypes from "prop-types";
import styled from "styled-components";
import { Typography, FormControlLabel, Switch } from "@material-ui/core";

const StyledSpan = styled.span`
  margin: 0 14px 0 0;
`;

const SortSelection = ({ sortByName, onChange }) => (
  <Typography>
    <StyledSpan>Сотрировка по имени</StyledSpan>
    <FormControlLabel
      value="sortByName"
      onChange={onChange}
      control={<Switch color="default" />}
      label="типу"
      labelPlacement="end"
    />
  </Typography>
);

SortSelection.propTypes = {
  sortByName: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SortSelection;
