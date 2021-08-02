import { CssBaseline } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { fetchAsteroid, fetchRandomAsteroid, backToHome } from "../redux/actions";
import Asteroid from "./Asteroid";
import Home from "./Home";
import TitleBar from "./TitleBar";

const PageContent = (props) => {
  const { fetchAsteroid, fetchRandomAsteroid, backToHome, asteroidDetails, showingAsteroidDetails, error } = props;
  return (
    <div style={{ background: "#ecf0f1", height: "100vh" }}>
      <CssBaseline />
      <TitleBar showingAsteroidDetails={showingAsteroidDetails} backToHome={backToHome} />
      <div style={{ padding: "20px" }}>
        {showingAsteroidDetails ? (
          <Asteroid asteroidDetails={asteroidDetails} />
        ) : (
          <Home fetchAsteroid={fetchAsteroid} fetchRandomAsteroid={fetchRandomAsteroid} error={error} />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ asteroidReducer }) => {
  return {
    asteroidDetails: asteroidReducer.asteroidDetails,
    showingAsteroidDetails: asteroidReducer.showingAsteroidDetails,
    error: asteroidReducer.error,
  };
};

export default connect(mapStateToProps, { fetchAsteroid, fetchRandomAsteroid, backToHome })(PageContent);
