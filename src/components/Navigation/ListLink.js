import PropTypes from "prop-types";
import Link from "next/link";
import { ListItem, ListItemIcon, ListItemText, Icon } from "@material-ui/core";

const ListLink = ({ link }) => (
  <Link href={link.link}>
    <ListItem button>
      <ListItemIcon>
        <Icon>{link.icon}</Icon>
      </ListItemIcon>
      <ListItemText>{link.name}</ListItemText>
    </ListItem>
  </Link>
);

ListLink.propTypes = {
  link: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }).isRequired
};

export default ListLink;
