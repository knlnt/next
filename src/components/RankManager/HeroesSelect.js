import { Component } from "react";
import PropTypes from "prop-types";

import Sorted from "./Sorted";
import HeroesList from "./HeroesList";
import withAPIRequest from "../WithAPIRequest/WithAPIRequest";

class HeroesSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: props.data,
      sorted: true
    };
  }

  componentDidMount() {
    this.sortedHeroesList();
  }

  render() {
    const { sorted, heroes } = this.state;
    const { updateCurrentHero } = this.props;
    return (
      <div>
        <Sorted sorted={sorted} onChange={this.toggleSorted} />
        <HeroesList updateCurrentHero={updateCurrentHero} heroes={heroes} />
      </div>
    );
  }
  sortedHeroesList = () => {
    const { sorted } = this.state;
    this.setState(prevState => ({
      heroes: prevState.heroes.sort((first, second) => {
        return sorted
          ? first.localized_name.toLowerCase() >
            second.localized_name.toLowerCase()
            ? 1
            : -1
          : first.roles[0].toLowerCase() > second.roles[0].toLowerCase()
          ? 1
          : -1;
      })
    }));
  };
  toggleSorted = () => {
    this.setState(
      prevState => ({
        sorted: !prevState.sorted
      }),
      () => {
        this.sortedHeroesList();
      }
    );
  };
}

HeroesSelect.propTypes = {
  updateCurrentHero: PropTypes.func.isRequired
};

export default withAPIRequest(HeroesSelect, () => ({
  url: "heroStats"
}));
