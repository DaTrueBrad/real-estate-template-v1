import React from 'react'
import { Typography } from '@mui/material'
import DownloadCard from '../components/resusable/DownloadCard'

const DocScreen = () => {
  return (
    <div className='main-page'>
      <Typography variant="h2" sx={{marginTop: 10, marginBottom: 5}}>Documents</Typography>
      <DownloadCard />
    </div>
  )
}

export default DocScreen