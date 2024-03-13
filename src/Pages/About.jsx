import React from 'react'
import Layout from '../Common/Layout'
import Clients from '../Components/Clients'
import { Box, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material'
import pic from '../images/factory2.webp'

const About = () => {
  return (
   <Layout>
    <Box>
      <Container sx={{marginTop:'10px'}}>
        <Typography variant='h2' textAlign={'center'}>About Us</Typography>
      <Card sx={{ maxWidth: '100%',marginTop:'10px' }}>
      <CardMedia
        sx={{ height: 440 }}
        image={pic}
        title="green iguana"
      />
      <CardContent>
        {/* <Typography gutterBottom variant="h5" component="div">
          Fan Brush
        </Typography> */}
        <Typography variant="h6" color="text.secondary" >
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica Lizards are a 
          widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
      </Container>
    </Box>
    <Clients/>
   </Layout>
  )
}

export default About