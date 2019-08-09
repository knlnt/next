import { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Grid, CircularProgress, Typography, Card } from "@material-ui/core";

import { BASE_URL, NO_AVATAR } from "../../constants";
import PlayerHeader from "./Header";
import RecentMatches from "./RecentMatches/RecentMatches";

class PLayerInfo extends Component {
  state = {
    load: true,
    error: false,
    players: {
      profile: {
        avatarfull: NO_AVATAR,
        personaname: "Имя",
        profileurl: "https://steamcommunity.com/"
      }
    },
    recentMatches: []
  };
  componentDidMount() {
    this.loadPlayers();
    this.loadRecentMatches();
  }
  render() {
    const { load, error, players, recentMatches } = this.state;
    const { profile } = players;
    const { avatarfull, personaname, profileurl } = profile;
    const content = (() => {
      if (load)
        return (
          <Grid container justify="center" alignItems="center">
            <CircularProgress />
          </Grid>
        );
      if (error)
        return (
          <Typography variant="h5" align="center" component="h5" gutterBottom>
            Произошла ошибка...
          </Typography>
        );
      return (
        <Card>
          <PlayerHeader
            avatar={avatarfull}
            name={personaname}
            url={profileurl}
          />
          <RecentMatches recentMatches={recentMatches} />
        </Card>
      );
    })();
    return <div>{content}</div>;
  }
  loadPlayers = () => {
    const { id } = this.props;
    axios
      .get(BASE_URL + "players/" + id)
      .then(response => {
        //console.dir(response.data);
        this.updateInfoPlayers(response.data);
        this.handleEndLoad();
      })
      .catch(() => {
        this.handleErrorLoad();
      });
  };
  loadRecentMatches = () => {
    const { id } = this.props;
    axios
      .get(BASE_URL + "players/" + id + "/recentMatches")
      .then(response => {
        this.updateInfoRecentMatches(response.data);
        this.handleEndLoad();
        console.dir(this.state.recentMatches);
      })
      .catch(() => {
        this.handleErrorLoad();
      });
  };
  updateInfoPlayers = newInfo => {
    this.setState({
      players: newInfo
    });
  };
  updateInfoRecentMatches = newInfo => {
    this.setState({
      recentMatches: newInfo
    });
  };
  handleEndLoad = () => {
    this.setState({
      load: false,
      error: false
    });
  };
  handleErrorLoad = () => {
    this.setState({
      load: false,
      error: true
    });
  };
}

PLayerInfo.propTypes = {
  id: PropTypes.string.isRequired
};

export default PLayerInfo;
