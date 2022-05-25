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
import useMoney from "../../hooks/useMoney";
import { CheckBox } from "@mui/icons-material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

// This is a styled component that allows for a rotating arrow
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

const PropertyCard = ({house}) => {
  const [expanded, setExpanded] = useState(false)
  const navigate = useNavigate()
  const price = useMoney(house.price)
  const addressLine = `${house.address1} ${house.address2}
    ${house.city}, ${house.state} ${house.zip}`
    const subtitle = <span style={{lineHeight: ""}}>{house.address1 + " " + house.address2}<br />{house.city + " " + house.state + " " + house.zip}</span>
   
  const handleExpandClick = () => setExpanded(!expanded)

  const goToDetails = () => {
    navigate(`/details/${house.id}`)
  }
  return (
    <Card className="propertyCard" id={expanded && "propertyCardActive"}>
      <CardHeader
        title={`${house.bed} Bed ${house.bath} Bath`}
        subheader={subtitle}
      />
      {/* <Typography variant="p">{addressLine}</Typography> */}
      <CardMedia component="img" height="200" image={house.imageList[0]}  onClick={goToDetails}/>
      <CardContent sx={{display: "flex", justifyContent: 'space-between'}}>
        <Typography variant="h4">{price}</Typography>
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
          {house.garage && <Box sx={{display: 'flex', alignItems: 'center'}}><CheckBox color="success"/><Typography variant="h5">Garage</Typography></Box>}
          {house.heating && <Box sx={{display: 'flex', alignItems: 'center'}}><CheckBox color="success"/><Typography variant="h5">Heating</Typography></Box>}
          {house.laundry && <Box sx={{display: 'flex', alignItems: 'center'}}><CheckBox color="success"/><Typography variant="h5">Laundry</Typography></Box>}
          {house.pets && <Box sx={{display: 'flex', alignItems: 'center'}}><CheckBox color="success"/><Typography variant="h5">Pet Friendly</Typography></Box>}
          {house.wifi && <Box sx={{display: 'flex', alignItems: 'center'}}><CheckBox color="success"/><Typography variant="h5">Wifi</Typography></Box>}
          <Button variant="contained" onClick={goToDetails}>See More</Button>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default PropertyCard;
