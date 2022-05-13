import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import building from "../../assets/building.jpg";

const Banner = () => {
  return (
      <div className="banner">
        <Typography variant="h3" color="white">Now accepting Applications for</Typography>
        <Typography variant="h1" color="white">Fall 2022</Typography>
        <Button variant="contained" color="secondary" size="large">I'm Interested</Button>
      </div>
  );
};

export default Banner;
