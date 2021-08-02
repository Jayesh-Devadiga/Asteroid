import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

const Home = ({ fetchAsteroid, fetchRandomAsteroid, error }) => {
  const [asteroidId, setAsteroidId] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchAsteroid(asteroidId);
        }}
      >
        <TextField
          autoFocus
          onChange={(e) => setAsteroidId(e.target.value)}
          fullWidth
          error={!!error}
          helperText={error}
          variant="outlined"
          value={asteroidId}
          label="Asteroid ID"
          placeholder="Enter the id for the asteroid you want to search."
        />
        <Button style={{ marginTop: "10px" }} disabled={!asteroidId} fullWidth color="primary" variant="contained" type="submit">
          Search Asteroid
        </Button>
      </form>
      <Button style={{ marginTop: "10px", background: "#74b9ff" }} onClick={fetchRandomAsteroid} fullWidth variant="contained">
        Search Random Asteroid
      </Button>
    </div>
  );
};

export default Home;
