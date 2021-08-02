import { Card, CardContent, Link, Typography } from "@material-ui/core";
import React from "react";

const Asteroid = ({ asteroidDetails }) => {
  const { name, nasa_jpl_url, is_potentially_hazardous } = asteroidDetails;
  return (
    <Card>
      <CardContent>
        <Typography>
          <span style={{ fontWeight: "bold" }}>Name: </span> {name}
        </Typography>
        <Typography>
          <span style={{ fontWeight: "bold" }}>Nasa JPL URL: </span>
          <Link href={nasa_jpl_url}>{nasa_jpl_url}</Link>
        </Typography>
        <Typography>
          <span style={{ fontWeight: "bold" }}>Hazardous: </span>
          {is_potentially_hazardous ? "Yes" : "No"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Asteroid;
