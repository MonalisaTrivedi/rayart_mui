import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material'
import React from 'react'
import pic1 from '../images/paint_brush2.jpg'
import pic3 from '../images/shoe_brush.jpg'
import pic2 from '../images/banner2.avif'


const Products2 = () => {
  return (
    <Container sx={{marginBottom:'20px'}}>
    <Box sx={{textAlign:'center',mt:2}}>
    <Typography variant='h3'>Upcoming Products</Typography>
    <Typography variant="h5" align="center" marginTop={4}>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
     </Typography>
    </Box>
    <Box className='product_card'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 440 }}
        image={pic1}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Paint Brush
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Details</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 440 }}
        image={pic2}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          MakeUp Brush
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Details</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 440 }}
        image={pic3}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Shoe Brush
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Details</Button>
      </CardActions>
    </Card>
    </Box>
    </Container>
  )
}

export default Products2