import React from 'react'
import { FormControl, Typography } from "@mui/material";
import { Select, MenuItem, InputLabel } from "@mui/material";
import { Box } from "@mui/system";

const Selections = ({city, setCity, price, setPrice, order, setOrder}) => {

  const cityChange = (e) => setCity(e.target.value);
  const priceChange = (e) => setPrice(e.target.value);
  const orderChange = (e) => setOrder(e.target.value);

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
        sx={{ width: 300 }}
      >
        <MenuItem value={""}>None</MenuItem>
        <MenuItem value={"Spanish Fork"}>Spanish Fork</MenuItem>
        <MenuItem value={"Salt Lake City"}>Salt Lake City</MenuItem>
        <MenuItem value={"Vineyard"}>Vineyard</MenuItem>
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
        sx={{ width: 300 }}
      >
        <MenuItem value={""}>None</MenuItem>
        <MenuItem value={1000}>{"< $1,000"}</MenuItem>
        <MenuItem value={1500}>{"< $1,500"}</MenuItem>
        <MenuItem value={2000}>{"< $2,000"}</MenuItem>
      </Select>
    </FormControl>
    <FormControl>
      <InputLabel id="orderSelectLabel">Select Order</InputLabel>
      <Select
        labelId="orderSelectLabel"
        id="orderSelect"
        value={order}
        label="Select Order"
        onChange={orderChange}
        color="primary"
        variant="filled"
        sx={{ width: 300 }}
      >
        <MenuItem value={""}>None</MenuItem>
        <MenuItem value={"price low-high"}>
          {"Price (Lowest - Highest)"}
        </MenuItem>
      </Select>
    </FormControl>
  </Box>
  )
}

export default Selections