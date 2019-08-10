import { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import grey from "@material-ui/core/colors/grey";
import { Avatar, Typography, CardHeader, Link } from "@material-ui/core";

import { BASE_URL, NO_AVATAR_IMAGE } from "../../constants";
import DownloadTemplate from "../DownloadTemplate/DownloadTemplate";

const StyledAvatar = styled(Avatar)`
  width: 100px;
  height: 100px;
`;
const GreyLink = styled(Link)`
  color: ${grey[500]};
`;

class PlayerHeader extends Component {
  state = {
    players: {
      profile: {
        avatarfull: NO_AVATAR_IMAGE,
        personaname: "Имя",
        profileurl: "https://steamcommunity.com/"
      }
    }
  };
  render() {
    const { avatarfull, personaname, profileurl } = this.state.players.profile;
    const { id } = this.props;
    return (
      <DownloadTemplate
        url={BASE_URL + "players/" + id}
        updateData={this.updateData}
      >
        <CardHeader
          avatar={<StyledAvatar src={avatarfull} alt={personaname} />}
          title={
            <Typography variant="h4" align="left" component="h4" gutterBottom>
              {personaname}
            </Typography>
          }
          subheader={
            <GreyLink href={profileurl} target="_blank">
              Открыть в Steam
            </GreyLink>
          }
        />
      </DownloadTemplate>
    );
  }
  updateData = newValue => {
    this.setState({
      players: newValue
    });
  };
}

PlayerHeader.propTypes = {
  id: PropTypes.string.isRequired
};

export default PlayerHeader;
