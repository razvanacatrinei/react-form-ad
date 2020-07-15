import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";

const Header = (props) => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Button variant="contained" color="default" style={{marginRight:"10px"}}>
          Create
        </Button>
        <Button variant="contained" color="default">
          View
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
