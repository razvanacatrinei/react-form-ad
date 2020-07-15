import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = (props) => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit">
          Rentals
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
