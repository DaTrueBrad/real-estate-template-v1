import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import house from "../../assets/house.jpeg";
import useMoney from "../../hooks/useMoney";
import { CheckBox, Download } from "@mui/icons-material";
import { Box } from "@mui/system";

const DownloadCard = () => {
  return (
    <Card className="download-card">
      <CardHeader
        title="Google Fiber Sign-up Document"
        subheader="Updated: 04/15/2021"
      />
      <CardContent>
        <CardActions disableSpacing>
          <Download fontSize="large" color="success"/>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default DownloadCard;
