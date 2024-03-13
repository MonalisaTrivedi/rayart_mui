import { Box, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
   <>
   <Box sx={{textAlign:'center',backgroundColor:'black',height:'100px',color:'white',paddingTop:'15px'}}>
    <Box>
      <InstagramIcon/>
      <FacebookIcon/>
      <TwitterIcon/>
      <WhatsAppIcon/>
    </Box>
        <Typography variant='h6'>
            all right reserved &copy; RayArt
        </Typography>
   </Box>
   </>
  )
}

export default Footer