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
    this.handleLoadHeroes();
  }

  render() {
    const { open, currentHero, heroes, load, error } = this.state;
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
          {load ? (
            <MenuItem value="1">Загрузка</MenuItem>
          ) : error ? (
            <MenuItem value="1">Ошибка</MenuItem>
          ) : (
            heroes.map(hero => (
              <MenuItem value={hero.id} key={hero.id}>
                <ListItemIcon>
                  <Avatar
                    alt={hero.localized_name}
                    src={"https://api.opendota.com" + hero.icon}
                  />
                </ListItemIcon>
                {hero.localized_name}
              </MenuItem>
            ))
          )}
        </StyledSelect>
      </div>
    );
  }

  handleLoadHeroes = () => {
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
    this.props.updateListPlayers(event.target.value);
    this.setState({
      currentHero: event.target.value
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
  updateListPlayers: PropTypes.func.isRequired
};

export default Heroes;
