import { Component } from "react";

import RankManager from "../RankManager/RankManager";
import RankList from "./RankList";
import { DEFAULT_ID_HERO } from "../../constants";

class Rankings extends Component {
  state = {
    currentHero: DEFAULT_ID_HERO
  };
  render() {
    const { currentHero } = this.state;
    return (
      <div>
        <RankManager updateCurrentHero={this.updateCurrentHero} />
        <RankList key={currentHero} id={currentHero} />
      </div>
    );
  }
  updateCurrentHero = newId => {
    this.setState({
      currentHero: newId
    });
  };
}

export default Rankings;
