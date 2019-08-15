import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import SortSelection from "./SortSelection";
import HeroesList from "./HeroesList";
import withAPIRequest from "../WithAPIRequest/WithAPIRequest";

const HeroesSelect = ({ data, updateCurrentHero }) => {
  const [sortByName, setSortByName] = useState(true);

  useEffect(() => {
    sortHeroesList();
  }, [sortByName]);

  const sortHeroesList = () => {
    data.sort((first, second) => {
      return sortByName
        ? first.localized_name.toLowerCase() >
          second.localized_name.toLowerCase()
          ? 1
          : -1
        : first.roles[0].toLowerCase() > second.roles[0].toLowerCase()
        ? 1
        : -1;
    });
  };
  const toggleSortType = () => setSortByName(!sortByName);

  return (
    <div>
      <SortSelection sortByName={sortByName} onChange={toggleSortType} />
      <HeroesList updateCurrentHero={updateCurrentHero} heroes={data} />
    </div>
  );
};

HeroesSelect.propTypes = {
  updateCurrentHero: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
};

export default withAPIRequest(HeroesSelect, () => ({
  url: "heroStats"
}));
