import { Component } from "react";
import PropTypes from "prop-types";

import SortSelection from "./SortSelection";
import HeroesList from "./HeroesList";
import withAPIRequest from "../WithAPIRequest/WithAPIRequest";

class HeroesSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: props.data,
      sortByName: true
    };
  }

  componentDidMount() {
    this.sortHeroesList();
  }

  render() {
    const { sortByName, heroes } = this.state;
    const { updateCurrentHero } = this.props;
    return (
      <div>
        <SortSelection sortByName={sortByName} onChange={this.toggleSortType} />
        <HeroesList updateCurrentHero={updateCurrentHero} heroes={heroes} />
      </div>
    );
  }
  sortHeroesList = () => {
    const { sortByName } = this.state;
    this.setState(prevState => ({
      heroes: prevState.heroes.sort((first, second) => {
        return sortByName
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
  toggleSortType = () => {
    this.setState(
      prevState => ({
        sortByName: !prevState.sortByName
      }),
      () => {
        this.sortHeroesList();
      }
    );
  };
}

HeroesSelect.propTypes = {
  updateCurrentHero: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
};

export default withAPIRequest(HeroesSelect, () => ({
  url: "heroStats"
}));
