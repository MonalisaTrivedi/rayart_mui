import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getClient } from '../redux/clientSlice'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material'

const Clients = () => {
    const dispatch=useDispatch()
    const {res:Clients,status}=useSelector((state)=>{
        return state. client
    })
    useEffect(()=>{
        dispatch(getClient())
    },[])
  return (
    <Box sx={{backgroundColor:'black',paddingBottom:'20px'}}>
    <Container>
    <Box sx={{textAlign:'center',marginTop:'30px',color:'white',paddingTop:'20px'}}>
    <Typography variant='h2'>Our Clients</Typography>
    <Typography variant="h5" align="center" marginTop={4}>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
     </Typography>
    </Box>
    <Box className='client_card'>
      {
        Clients?.TeamMember?.map((item,key)=>{
            return (<>
      <Card sx={{ maxWidth: 345,mt:2 }}>
      <CardMedia
        sx={{ height: 340 }}
        image={`https://restapinodejs.onrender.com/api/team/photo/${item._id}`}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
            </>)
        })
      }
    </Box>
    
   </Container>
   </Box>
  )
}

export default Clients