import PropTypes from "prop-types";
import Link from "next/link";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";

const ListLink = ({ link }) => {
  return (
    <Link href={link.link}>
      <ListItem button>
        <ListItemIcon>
          <Icon>{link.icon}</Icon>
        </ListItemIcon>
        <ListItemText>{link.name}</ListItemText>
      </ListItem>
    </Link>
  );
};

ListLink.propTypes = {
  link: PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
    icon: PropTypes.string
  })
};

export default ListLink;
