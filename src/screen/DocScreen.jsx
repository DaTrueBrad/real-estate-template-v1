import React from "react";
import { Typography, Box, TextField } from "@mui/material";
import DownloadCard from "../components/resusable/DownloadCard";
import useScroll from '../hooks/useScroll'

const DocScreen = () => {
  useScroll()
  
  return (
    <div className="main-page">
      <Typography variant="h2" sx={{ marginTop: 10, marginBottom: 5 }}>
        Documents
      </Typography>
      <TextField variant="outlined" placeholder="Search"sx={{marginBottom: 10 }} />
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, justifyContent: "center"}}>
        <DownloadCard />
        <DownloadCard />
        <DownloadCard />
        <DownloadCard />
        <DownloadCard />
        <DownloadCard />
      </Box>
    </div>
  );
};

export default DocScreen;
