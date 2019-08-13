import { Component } from "react";
import { Paper, Grid } from "@material-ui/core";
import PropTypes from "prop-types";

import withAPIRequest from "../WithAPIRequest/WithAPIRequest";
import Player from "./Player";
import ToggleView from "./ToggleView";
import { VIEW_TYPE_RANKINGS } from "../../constants";

class RankList extends Component {
  state = {
    viewTypeRankList: VIEW_TYPE_RANKINGS.list
  };
  render() {
    const { rankings } = this.props.data;
    const { viewTypeRankList } = this.state;
    const content = (() => (
      <>
        <Grid xs={12} item>
          <ToggleView
            view={viewTypeRankList}
            onChange={this.toggleViewRankList}
          />
        </Grid>

        {rankings &&
          rankings.map(({ account_id, ...props }) => (
            <Player
              key={account_id}
              id={account_id}
              {...props}
              typeView={viewTypeRankList}
            />
          ))}
      </>
    ))();
    return viewTypeRankList ? (
      <Paper>{content}</Paper>
    ) : (
      <Grid container spacing={2}>
        {content}
      </Grid>
    );
  }
  toggleViewRankList = () => {
    this.setState(prevState => ({
      viewTypeRankList: !prevState.viewTypeRankList
    }));
  };
}

RankList.propTypes = {
  data: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired
};

export default withAPIRequest(RankList, ({ id }) => ({
  url: "rankings?hero_id=" + id
}));
