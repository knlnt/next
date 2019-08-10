import { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import axios from "axios";
import {
  Select,
  MenuItem,
  ListItemIcon,
  Avatar,
  InputLabel
} from "@material-ui/core";

import { DEFAULT_ID_HERO, BASE_URL } from "../../constants";

const StyledSelect = styled(Select)`
  width: 100%;
`;

class Heroes extends Component {
  state = {
    load: true,
    error: false,
    heroes: [],
    open: false,
    currentHero: DEFAULT_ID_HERO
  };

  componentDidMount() {
    this.loadHeroes();
  }

  render() {
    const { open, currentHero, heroes, load, error } = this.state;
    const content = ((load, error, heroes) => {
      if (load) return <MenuItem value="1">Загрузка</MenuItem>;
      if (error) return <MenuItem value="1">Ошибка</MenuItem>;
      return heroes.map(({ id, localized_name, icon }) => (
        <MenuItem value={id} key={id}>
          <ListItemIcon>
            <Avatar
              alt={localized_name}
              src={"https://api.opendota.com" + icon}
            />
          </ListItemIcon>
          {localized_name}
        </MenuItem>
      ));
    })(load, error, heroes);
    return (
      <div>
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
          {content}
        </StyledSelect>
      </div>
    );
  }

  loadHeroes = () => {
    axios
      .get(BASE_URL + "heroStats")
      .then(response => {
        this.handleEndLoadHeroes(response);
      })
      .catch(() => {
        this.handleErrorLoadHeroes();
      });
  };

  handleEndLoadHeroes = response => {
    this.setState({
      heroes: response.data,
      load: false
    });
  };

  handleErrorLoadHeroes = response => {
    this.setState({
      load: false,
      error: true
    });
  };

  handleChangeSelect = event => {
    const { value } = event.target;
    this.props.updateCurrentHero(value);
    this.setState({
      currentHero: value
    });
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

Heroes.propTypes = {
  updateCurrentHero: PropTypes.func.isRequired
};

export default Heroes;
