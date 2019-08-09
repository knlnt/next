import PropTypes from "prop-types";
import styled from "styled-components";
import grey from "@material-ui/core/colors/grey";
import { Avatar, Typography, CardHeader, Link } from "@material-ui/core";

const StyledAvatar = styled(Avatar)`
  width: 100px;
  height: 100px;
`;
const GreyLink = styled(Link)`
  color: ${grey[500]};
`;

const PlayerHeader = ({ avatar, name, url }) => (
  <CardHeader
    avatar={<StyledAvatar src={avatar} alt={name} />}
    title={
      <Typography variant="h4" align="left" component="h4" gutterBottom>
        {name}
      </Typography>
    }
    subheader={
      <GreyLink href={url} target="_blank">
        Открыть в Steam
      </GreyLink>
    }
  />
);

PlayerHeader.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default PlayerHeader;
