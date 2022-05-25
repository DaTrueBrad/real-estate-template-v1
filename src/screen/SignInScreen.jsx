import React from 'react'
import { Typography } from '@mui/material'
import useScroll from '../hooks/useScroll'

const SignInScreen = () => {
  useScroll()
  return (
    <div className='main-page'>
      <Typography variant="h2" sx={{marginTop: 10, marginBottom: 5}}>Sign In</Typography>
    </div>
  )
}

export default SignInScreen