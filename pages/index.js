import React from "react";
import axios from "axios";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import styled from "styled-components";

import Link from "next/link";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";

const StyledAppBar = styled(AppBar)`
  background: red;
`;

const App = () => {
  // const getList = () => {
  //   axios
  //     .get("https://api.opendota.com/api/rankings?hero_id=23")
  //     .then(response => {
  //       console.log(response);
  //     });
  // };
  return (
    <div>
      <StyledAppBar>
        <Toolbar>
          <IconButton>
            <Icon>menu</Icon>
          </IconButton>
        </Toolbar>
      </StyledAppBar>
    </div>
    // <div>
    //   <Button onClick={getList}>GET</Button>
    //   <Link href="/page1">
    //     <Button variant="contained" color="primary">
    //       Page 1
    //     </Button>
    //   </Link>
    //   <Link href="/page2">
    //     <Button variant="contained" color="primary">
    //       Page 2
    //     </Button>
    //   </Link>
    // </div>
  );
};

export default App;
