import { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import axios from "axios";
import { DEFAULT_ID_HERO } from "../../constants";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Avatar from "@material-ui/core/Avatar";
import InputLabel from "@material-ui/core/InputLabel";

const StyledSelect = styled(Select)`
  width: 100%;
`;

class Heroes extends Component {
  state = {
    load: false,
    error: false,
    heroes: [],
    open: false,
    currentHero: DEFAULT_ID_HERO
  };

  componentDidMount() {
    this.loadHeroesList();
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
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {!load ? (
            <MenuItem value="1">
              <em>Загрузка</em>
            </MenuItem>
          ) : error ? (
            <MenuItem value="1">
              <em>Ошибка</em>
            </MenuItem>
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

  loadHeroesList = () => {
    axios
      .get("https://api.opendota.com/api/heroStats")
      .then(response => {
        this.endLoadHeroesList(response);
      })
      .catch(() => {
        this.errorLoadHeroesList();
      });
  };

  endLoadHeroesList = response => {
    this.setState({
      heroes: response.data,
      load: true
    });
  };

  errorLoadHeroesList = response => {
    this.setState({
      load: true,
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
  updateListPlayers: PropTypes.func
};

export default Heroes;
