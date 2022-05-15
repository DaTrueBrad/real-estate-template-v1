import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Banner from '../components/homeComponents/Banner'
import Dropdown from '../components/resusable/Dropdown'
import PropertyCard from '../components/resusable/PropertyCard'
import homes from '../assets/homes'

const HomeScreen = () => {

  //TODO To have this page function correctly, you'll need to alter the homelistings. When you grad data from the database, you will want to order by listing date, then filter for the first 8 properties.

  const homeListings = homes.map((house, index) => {
    return <PropertyCard house={house} index={index} key={index}/>
  })
  return (
    <div className='main-page'>
      <Banner />
      <Typography variant="h2" sx={{marginTop: 10, marginBottom: 5}}>Recent Properties</Typography>
      <Box sx={{display: 'flex', justifyContent: "center", gap: "2vw", flexWrap: "wrap", padding: "0px 10vw"}}>

      {homeListings}
      </Box>
      <Typography variant="h2" sx={{marginTop: 10, marginBottom: 5}}>FAQ</Typography>
      <Dropdown />
      <Dropdown />
      <Dropdown />
      <Dropdown />
    </div>
  )
}

export default HomeScreen