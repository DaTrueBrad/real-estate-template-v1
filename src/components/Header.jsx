import {
  AppBar,
  Badge,
  IconButton,
  InputBase,
  Stack,
  TextField,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import { Link as RouterLink, Router } from "react-router-dom";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Search from "@mui/icons-material/Search";
import logo from '../assets/logo.png'
// import { Image } from "@mui/icons-material";

const Header = (props) => {
  return (
    <AppBar
      position="static"
      color="primary"
      sx={{ height: 70, display: "flex", justifyContent: "space-between" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: 'center',
          height: "100%",
          margin: "0px 10vw",
        }}
      >
        <img src={logo} style={{height: "60px"}}/>

        <Stack sx={{ display: "flex", flexDirection: "row" }}>
          <RouterLink to="/">
            <Button color="inherit" sx={{ marginRight: "20px" }}>
              Home
            </Button>
          </RouterLink>
          <RouterLink to="/availability">
            <Button color="inherit" sx={{ marginRight: "20px" }}>
              Availability
            </Button>
          </RouterLink>
          <RouterLink to="/apply">
            <Button color="inherit" sx={{ marginRight: "20px" }}>
              Apply Now
            </Button>
          </RouterLink>
          <RouterLink to="/documents">
            <Button color="inherit" sx={{ marginRight: "20px" }}>
              Documents
            </Button>
          </RouterLink>
          <RouterLink to="/signin">
            <Button color="inherit" sx={{ marginRight: "20px" }}>
              Sign In
            </Button>
          </RouterLink>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
