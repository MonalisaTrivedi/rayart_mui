import React from 'react'
import Layout from '../Common/Layout'
import { Box, Button, Typography } from '@mui/material'
import Banner from '../images/banner5.jpg'
import Products from '../Components/Products'
import Clients from '../Components/Clients'
import Products2 from '../Components/Products2'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <Layout>
        <Box sx={{backgroundImage:`url(${Banner})`,height:'80vh',textAlign:'center',py:3}} className='home'>
          <Typography variant='h2' textAlign={'center'} mt={3}>Welcome to Our Art World</Typography>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus corporis dolores neque at debitis nobis ipsam repudiandae esse odio. Dolorem.</p>
          <Button variant="contained" size='small' sx={{marginTop:'20px'}}><Link to='/Menu' className='button'>Our Product</Link></Button>

        </Box>
        <Products/>
        <Clients/>
        <Products2/>
    </Layout>
  )
}

export default Home