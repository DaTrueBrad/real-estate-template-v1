import React, { useState } from "react";
import { FormControl, Typography } from "@mui/material";
import { Select, MenuItem, InputLabel } from "@mui/material";
import { Box } from "@mui/system";
import homes from "../assets/homes";
import PropertyCard from "../components/resusable/PropertyCard";
import Selections from "../components/availComponents/Selections";

const AvailabilityScreen = () => {
  const [city, setCity] = useState("");
  const [price, setPrice] = useState(null);
  const [order, setOrder] = useState("");

  //TODO we will want to get rid of the hardcoded import from houses, and instead have a useEffect get info from the database.

  const homeListings = homes
    .filter((house) => {
      if (price) return house.price < price;
      return house;
    })
    .map((h, index) => {
      return <PropertyCard house={h} index={index} key={index} />;
    });

  return (
    <div className="main-page">
      <Typography variant="h2" sx={{ marginTop: 10, marginBottom: 5 }}>
        Availability
      </Typography>
      <Selections city={city} setCity={setCity} price={price} setPrice={setPrice} order={order} setOrder={setOrder}/>
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
