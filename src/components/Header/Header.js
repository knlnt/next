import PropTypes from "prop-types";
import { AppBar, Toolbar, IconButton, Icon } from "@material-ui/core";

const Header = ({ onClick }) => {
  const handleClick = () => {
    onClick && onClick();
  };
  return (
    <AppBar>
      <Toolbar>
        <IconButton onClick={handleClick}>
          <Icon>menu</Icon>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Header;
