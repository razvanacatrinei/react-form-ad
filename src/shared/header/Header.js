import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Button
          variant="contained"
          color="default"
          style={{ marginRight: "10px" }}
        >
          <Link to="/"style={{ textDecoration: 'none' }}>Create</Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
