import React, {useState, useEffect} from "react";
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
// import { ExpandMore } from "@mui/icons-material";

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const PropertyCard = () => {
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => setExpanded(!expanded)
  return (
    <Card className={expanded ? "propertyCardActive" : "propertyCard"}>
      <CardHeader
        title="3 Bed 2 Ba"
        subheader="123 North 456 East, Orem, UT 84057"
      />
      <CardMedia component="img" height="200" image={house} />
      <CardContent sx={{display: "flex", justifyContent: 'space-between'}}>
        <Typography variant="h4">$1,800</Typography>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>About</Typography>
          <Typography paragraph>
            This is a great property. Just look at it! Absolutely stunning!
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default PropertyCard;
