import { Component } from "react";
import axios from "axios";
import RankManager from "../RankManager/RankManager";
import Player from "./Player";
import { DEFAULT_ID_HERO } from "../../constants";
import List from "@material-ui/core/List";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";

class Rankings extends Component {
  state = {
    rankings: [],
    load: false,
    error: false,
    url: "https://api.opendota.com/api/rankings?hero_id="
  };

  componentDidMount() {
    this.loadPlayers(DEFAULT_ID_HERO);
  }

  render() {
    const { load, error, rankings } = this.state;
    return (
      <div>
        <RankManager updateListPlayers={this.loadPlayers} />
        {!load ? (
          <CircularProgress />
        ) : error ? (
          <h2>Что-то пошло не так...</h2>
        ) : (
          <Paper>
            <List>
              {rankings.map(item => (
                <Player rank={item} key={item.account_id} />
              ))}
            </List>
          </Paper>
        )}
      </div>
    );
  }

  loadPlayers = idCurrentHero => {
    const { url } = this.state;
    this.preLoadPlayersList();
    axios
      .get(url + idCurrentHero)
      .then(response => {
        this.endLoadPlayersList(response);
      })
      .catch(() => {
        this.errorLoadPlayersList();
      });
  };

  endLoadPlayersList = response => {
    this.setState({
      rankings: response.data.rankings,
      load: true
    });
  };

  errorLoadPlayersList = () => {
    this.setState({
      load: true,
      error: true
    });
  };

  preLoadPlayersList = () => {
    this.setState({
      rankings: [],
      load: false
    });
  };
}

export default Rankings;
