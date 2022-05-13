import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Banner from '../components/homeComponents/Banner'
import Dropdown from '../components/resusable/Dropdown'
import PropertyCard from '../components/resusable/PropertyCard'
import homes from '../assets/homes'

const HomeScreen = () => {

  const homeListings = homes.map((house, index) => {
    return <PropertyCard />
  })
  return (
    <div className='main-page'>
      <Banner />
      <Typography variant="h2">Recent Properties</Typography>
      <Box sx={{display: 'flex', justifyContent: "center", gap: "2vw", flexWrap: "wrap", padding: "0px 10vw"}}>

      {homeListings}
      </Box>
      <Typography variant="h2">FAQ</Typography>
      <Dropdown />
      <Dropdown />
      <Dropdown />
      <Dropdown />
    </div>
  )
}

export default HomeScreen