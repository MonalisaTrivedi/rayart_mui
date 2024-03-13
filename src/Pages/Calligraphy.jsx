import React from 'react'
import Layout from '../Common/Layout'
import { Box, Card, CardContent, CardMedia, Container, Typography } from '@mui/material'

const Calligraphy = () => {
  return (
    <Layout>
        <Box>
      <Container sx={{marginTop:'10px',marginBottom:'20px'}}>
        <Typography variant='h2' textAlign={'center'}>Calligraphy Holders</Typography>
      <Card sx={{ maxWidth: '100%',marginTop:'10px' }}>
      <CardMedia
        sx={{ height: 440 }}
        image='https://halfapx.com/wp-content/uploads/2017/03/DSC2821.jpg'
        title="calligraphy image"
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
    </Layout>
  )
}

export default Calligraphy