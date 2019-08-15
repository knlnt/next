import PropTypes from "prop-types";
import Router from "next/router";
import { AppBar, Toolbar, IconButton, Icon } from "@material-ui/core";

const Header = ({ onClick, btnBackVisible }) => {
  const handleClick = () => {
    onClick && onClick();
  };
  return (
    <AppBar>
      <Toolbar>
        <IconButton onClick={handleClick}>
          <Icon>menu</Icon>
        </IconButton>
        {btnBackVisible && (
          <IconButton onClick={() => Router.back()}>
            <Icon>arrow_back_ios</Icon>
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

Header.defaultProps = {
  btnBackVisible: false
};
Header.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Header;
