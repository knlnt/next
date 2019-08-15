import { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Select, InputLabel, MenuItem } from "@material-ui/core";

import { DEFAULT_ID_HERO } from "../../constants";
import HeroItem from "./HeroItem";

const StyledSelect = styled(Select)`
  width: 100%;
`;

class HeroesList extends Component {
  state = {
    currentHero: DEFAULT_ID_HERO,
    open: false
  };

  render() {
    const { open, currentHero } = this.state;
    const { heroes } = this.props;
    return (
      <>
        <InputLabel htmlFor="selectHero">Выбор героя</InputLabel>
        <StyledSelect
          open={open}
          onClose={this.handleCloseList}
          onOpen={this.handleOpenList}
          value={currentHero}
          onChange={this.handleChangeSelect}
          inputProps={{
            name: "currentHero",
            id: "selectHero"
          }}
        >
          {heroes.map(({ id, localized_name, icon, roles }) => (
            <MenuItem value={id} key={id}>
              <HeroItem name={localized_name} icon={icon} roles={roles} />
            </MenuItem>
          ))}
        </StyledSelect>
      </>
    );
  }

  handleChangeSelect = event => {
    const { value } = event.target;
    const { updateCurrentHero } = this.props;
    this.setState({
      currentHero: value
    });
    updateCurrentHero(value);
  };

  handleCloseList = () => {
    this.setState({
      open: false
    });
  };

  handleOpenList = () => {
    this.setState({
      open: true
    });
  };
}

HeroesList.propTypes = {
  updateCurrentHero: PropTypes.func.isRequired,
  heroes: PropTypes.array.isRequired
};

export default HeroesList;
