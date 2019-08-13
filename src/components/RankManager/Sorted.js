import PropTypes from "prop-types";
import { Typography, FormControlLabel, Switch } from "@material-ui/core";

const Sorted = ({ sorted, onChange }) => (
  <Typography>
    Сотрировка по
    <FormControlLabel
      value="sorted"
      onChange={onChange}
      control={<Switch color="default" />}
      label={sorted ? "имени" : "типу"}
      labelPlacement="start"
    />
  </Typography>
);

Sorted.propTypes = {
  sorted: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Sorted;
