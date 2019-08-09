import PropTypes from "prop-types";
import Link from "next/link";
import { ListItem, ListItemIcon, ListItemText, Icon } from "@material-ui/core";

const ListLink = ({ name, link, icon }) => (
  <Link href={link}>
    <ListItem button>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText>{name}</ListItemText>
    </ListItem>
  </Link>
);

ListLink.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default ListLink;
