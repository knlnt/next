import PropTypes from "prop-types";
import styled from "styled-components";
import grey from "@material-ui/core/colors/grey";
import { Avatar, Typography, CardHeader, Link } from "@material-ui/core";

import { NO_AVATAR_IMAGE } from "../../constants";
import withAPIRequest from "../WithAPIRequest/WithAPIRequest";

const StyledAvatar = styled(Avatar)`
  width: 100px;
  height: 100px;
`;
const GreyLink = styled(Link)`
  color: ${grey[500]};
`;

const PlayerHeader = ({ data }) => {
  const { avatarfull, personaname, profileurl } = data.profile;
  return (
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
  );
};

PlayerHeader.defaultProps = {
  data: {
    profile: {
      avatarfull: NO_AVATAR_IMAGE,
      personaname: "Имя",
      profileurl: "https://steamcommunity.com/"
    }
  }
};

PlayerHeader.propTypes = {
  id: PropTypes.string.isRequired
};

export default withAPIRequest(PlayerHeader, id => ({
  url: "players/" + id
}));
