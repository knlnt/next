import PropTypes from "prop-types";
import { Typography, FormControlLabel, Switch } from "@material-ui/core";

const SortSelection = ({ sortByName, onChange }) => (
  <Typography>
    Сотрировка по
    <FormControlLabel
      value="sortByName"
      onChange={onChange}
      control={<Switch color="default" />}
      label={sortByName ? "имени" : "типу"}
      labelPlacement="start"
    />
  </Typography>
);

SortSelection.propTypes = {
  sortByName: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SortSelection;
