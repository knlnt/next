import { Component } from "react";
import axios from "axios";
import { List, CircularProgress, Paper } from "@material-ui/core";

import RankManager from "../RankManager/RankManager";
import Player from "./Player";
import { DEFAULT_ID_HERO, BASE_URL } from "../../constants";

const URL = BASE_URL + "rankings?hero_id=";

class Rankings extends Component {
  state = {
    rankings: [],
    load: true,
    error: false
  };

  componentDidMount() {
    this.handleLoadPlayers(DEFAULT_ID_HERO);
  }

  render() {
    const { load, error, rankings } = this.state;
    return (
      <div>
        <RankManager updateListPlayers={this.handleLoadPlayers} />
        {load ? (
          <CircularProgress />
        ) : error ? (
          <h2>Что-то пошло не так...</h2>
        ) : (
          <Paper>
            <List>
              {rankings.map(item => (
                <Player player={item} key={item.account_id} />
              ))}
            </List>
          </Paper>
        )}
      </div>
    );
  }

  handleLoadPlayers = idCurrentHero => {
    this.preLoadPlayersList();
    axios
      .get(URL + idCurrentHero)
      .then(response => {
        this.handleEndLoadPlayers(response);
      })
      .catch(() => {
        this.handleErrorLoadPlayers();
      });
  };

  handleEndLoadPlayers = response => {
    this.setState({
      rankings: response.data.rankings,
      load: false
    });
  };

  handleErrorLoadPlayers = () => {
    this.setState({
      load: false,
      error: true
    });
  };

  preLoadPlayersList = () => {
    this.setState({
      rankings: [],
      load: true
    });
  };
}

export default Rankings;
