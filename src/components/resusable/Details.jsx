import { Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
// import homes from "../../assets/homes";
import useMoney from '../../hooks/useMoney'
import useScroll from "../../hooks/useScroll";
import { HomeContext } from "../../App";

const Details = (props) => {
  const [value, setValue] = useState(0)
  const {allHomes} = useContext(HomeContext);
  const { id } = useParams();
  useScroll()
  
  const home = allHomes.find((house) => house.id === id);
  const {
    bed,
    bath,
    price,
    address1,
    address2,
    city,
    state,
    zip,
    available,
    type,
    deposit,
    sqFeet,
    heating,
    garage,
    pets,
    wifi,
    laundry,
    imageList,
  } = home;
  const newPrice = useMoney(price)
  return (
    <Box sx={{ width: "60vw" }}>
      <Typography
        variant="h2"
        align="center"
        sx={{ marginTop: 10, marginBottom: 5 }}
      >
        Details
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 3,
          width: "100%",
          justifyContent: "space-around",
        }}
      >
        <Box>
          <Typography variant="h5">{bed} Bed | {bath} Bath | {sqFeet}sqft</Typography>
          <Typography variant="h6">
            {address1} {address2}, {city}, {state} {zip}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h4" align="center">
            {newPrice}{type === "Rent" && "/mo"}
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button variant="outlined" color="secondary">
              Request a Tour
            </Button>
            <Button variant="contained" color="secondary">
              Apply Now
            </Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: "100%", marginTop: 2 }}>
        <img
          src={imageList[value]}
          style={{ width: "100%", aspectRatio: "16 / 9", borderRadius: 3 }}
        />
        <Box sx={{ height: 80, width: "100%", overflowX: 'scroll', display: "flex", gap: 1}}>
          {imageList.map((pic, index) => {
            return (
              <img
                src={pic}
                style={{
                  height: "100%",
                  aspectRatio: "16 / 9",
                  borderRadius: 2,
                }}
                index={index}
                onMouseEnter={() => setValue(index)}
              />
            );
          })}
        </Box>
      </Box>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042.9365222536517!2d-111.67226208422994!3d40.2993683706919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d9aa657f0d4a1%3A0x6ce5918867f09a22!2s123%20N%201080%20E%20456%20e%2C%20Orem%2C%20UT%2084097!5e0!3m2!1sen!2sus!4v1653054697242!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
    </Box>
  );
};

export default Details;
