import { AppBar, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <AppBar
      position="static"
      color="primary"
      sx={{ height: 70, width: '100vw', display: "flex", justifyContent: "center", alignItems: "center", position: "absolute", bottom: 0 }}
    >
      <Typography variant="p" color="white" align="center">Template by Brady Bott<br />All rights reserved</Typography>
    </AppBar>
  );
};

export default Footer;
