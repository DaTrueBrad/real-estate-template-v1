import React, { useState, useContext } from "react";
import { FormControl, Typography } from "@mui/material";
import { Select, MenuItem, InputLabel } from "@mui/material";
import { Box } from "@mui/system";
import PropertyCard from "../components/resusable/PropertyCard";
import Selections from "../components/availComponents/Selections";
import useScroll from '../hooks/useScroll'
import { HomeContext } from "../App";

const AvailabilityScreen = () => {
  const [city, setCity] = useState("");
  const [price, setPrice] = useState(null);
  const [type, setType] = useState("");
  const {allHomes} = useContext(HomeContext)
  useScroll()
 

  const homeListings = allHomes
    .filter((house) => {
      if (price) return house.price < price;
      return house;
    })
    .filter((house) => {
      if(type) return house.type === type
      return house
    })
    .filter((house) => {
      if(city) return house.city === city
      return house
    })
    .map((h, index) => {
      return <PropertyCard house={h} index={index} key={index} />;
    });

    

  return (
    <div className="main-page">
      <Typography variant="h2" sx={{ marginTop: 10, marginBottom: 5 }}>
        Availability
      </Typography>
      <Selections city={city} setCity={setCity} price={price} setPrice={setPrice} type={type} setType={setType}/>
      <Typography variant="h3" sx={{marginTop: 10, marginBottom: 5}}>{homeListings.length} Properties</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "2vw",
          flexWrap: "wrap",
          padding: "0px 10vw",
        }}
      >
        {homeListings}
      </Box>
    </div>
  );
};

export default AvailabilityScreen;
