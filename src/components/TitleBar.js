import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { KeyboardBackspace } from "@material-ui/icons";
import React from "react";

const TitleBar = ({ showingAsteroidDetails, backToHome }) => {
  const renderHeading = () => {
    if (showingAsteroidDetails) {
      return (
        <>
          <IconButton onClick={backToHome} color="inherit">
            <KeyboardBackspace />
          </IconButton>
          <Typography style={{ fontWeight: "bold" }} variant="h6">
            Asteroid Details
          </Typography>
        </>
      );
    }
    return (
      <>
        <Typography style={{ fontWeight: "bold" }} variant="h6">
          Search Asteroid
        </Typography>
      </>
    );
  };
  return (
    <AppBar position="static" style={{ background: "#e67e22" }}>
      <Toolbar>{renderHeading()}</Toolbar>
    </AppBar>
  );
};

export default TitleBar;
