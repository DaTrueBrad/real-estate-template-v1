import React, { useState, useEffect } from "react";
import { FormControl, Typography } from "@mui/material";
import { Select, MenuItem, InputLabel } from "@mui/material";
import { Box } from "@mui/system";
import homes from "../../assets/homes";

const Selections = ({ city, setCity, price, setPrice, type, setType }) => {
  const [cityList, setCityList] = useState([])
  
  const cityChange = (e) => setCity(e.target.value);
  const priceChange = (e) => setPrice(e.target.value);
  const typeChange = (e) => setType(e.target.value);
  
  const cityOptions = cityList.map((value, index) => {
    return <MenuItem value={value}>{value}</MenuItem>
  })

  useEffect(() => {
    let newList = []
    for(let home of homes) {
      newList.push(home.city)
    }
    let list = [...new Set(newList)]
    setCityList(list)
  }, [])
  
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: 10 }}>
      <FormControl>
        <InputLabel id="citySelectLabel">Select a City</InputLabel>
        <Select
          labelId="citySelectLabel"
          id="citySelect"
          value={city}
          label="Select a City"
          onChange={cityChange}
          color="primary"
          variant="filled"
          sx={{ width: 200 }}
        >
          <MenuItem value={""}>None</MenuItem>
          {cityOptions}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="priceSelectLabel">Select a Price</InputLabel>
        <Select
          labelId="priceSelectLabel"
          id="priceSelect"
          value={price}
          label="Select a Price"
          onChange={priceChange}
          color="primary"
          variant="filled"
          sx={{ width: 200 }}
        >
          <MenuItem value={""}>None</MenuItem>
          <MenuItem value={1000}>{"< $1,000"}</MenuItem>
          <MenuItem value={1500}>{"< $1,500"}</MenuItem>
          <MenuItem value={2000}>{"< $2,000"}</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="typeSelectLabel">Select Type</InputLabel>
        <Select
          labelId="typeSelectLabel"
          id="typeSelect"
          value={type}
          label="Select Order"
          onChange={typeChange}
          color="primary"
          variant="filled"
          sx={{ width: 200 }}
        >
          <MenuItem value={""}>None</MenuItem>
          <MenuItem value={"Student"}>Student Housing</MenuItem>
          <MenuItem value={"Rent"}>Rent</MenuItem>
          <MenuItem value={"Sale"}>Sale</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Selections;
