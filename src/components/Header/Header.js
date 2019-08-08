import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

const Header = ({ onClick }) => {
  const handleClickHeaderButton = () => {
    onClick();
  };
  return (
    <AppBar>
      <Toolbar>
        <IconButton onClick={handleClickHeaderButton}>
          <Icon>menu</Icon>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  onClick: PropTypes.func
};

export default Header;
