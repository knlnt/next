import PropTypes from "prop-types";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";
import { Icon } from "@material-ui/core";

import { VIEW_TYPE_RANKINGS } from "../../constants";

const ToggleView = ({ onChange, isListView }) => (
  <ToggleButtonGroup value={isListView} exclusive onChange={onChange}>
    <ToggleButton
      value={VIEW_TYPE_RANKINGS.list}
      title="Показать в виде списка"
    >
      <Icon>view_list</Icon>
    </ToggleButton>
    <ToggleButton
      value={!VIEW_TYPE_RANKINGS.list}
      title="Показать в виде карточек"
    >
      <Icon>view_module</Icon>
    </ToggleButton>
  </ToggleButtonGroup>
);

ToggleView.propTypes = {
  onChange: PropTypes.func.isRequired,
  isListView: PropTypes.bool.isRequired
};

export default ToggleView;
