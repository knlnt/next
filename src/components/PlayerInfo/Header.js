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
    avatarfull: NO_AVATAR_IMAGE,
    personaname: "Имя",
    profileurl: "https://steamcommunity.com/"
  };
  render() {
    const { avatarfull, personaname, profileurl } = this.state;
    const { id } = this.props;
    return (
      <DownloadTemplate
        url={BASE_URL + "players/" + id}
        onUpdateData={this.handleUpdateData}
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
  handleUpdateData = profileInfo => {
    this.setState({
      ...profileInfo.profile
    });
  };
}

PlayerHeader.propTypes = {
  id: PropTypes.string.isRequired
};

export default PlayerHeader;
