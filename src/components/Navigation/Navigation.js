import PropTypes from "prop-types";
import styled from "styled-components";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListLink from "./ListLink";

const Logo = styled.img`
  width: 340px;
  padding: 30px 80px;
  background: #141414;
`;
const links = [
  { id: 1, name: "Топ игроков по героям", link: "/", icon: "star" }
];

const Navigation = ({ isOpen, onClick }) => {
  const handleCloseDrawer = () => {
    onClick();
  };
  return (
    <Drawer anchor="left" open={isOpen} onClick={handleCloseDrawer}>
      <Logo src="http://cdn.dota2.com/apps/dota2/images/nav/logo.png" />
      <List>
        {links.map(link => (
          <ListLink link={link} key={link.id} />
        ))}
      </List>
    </Drawer>
  );
};

Navigation.propTypes = {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func
};

export default Navigation;
