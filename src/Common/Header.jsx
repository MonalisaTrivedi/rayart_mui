import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import ColorLensIcon from '@mui/icons-material/ColorLens';
import BrushIcon from '@mui/icons-material/Brush';
import { Link } from 'react-router-dom';
import '../Style/HeaderStyle.css'
import MenuIcon from '@mui/icons-material/Menu';
const Header = () => {
    const [mobileOpen,setMobileOpen]=useState(false)

    //handel menu click
    const handelDrawerToggle=()=>{
        setMobileOpen(!mobileOpen)
    }
    //menu drawer
    const drawer=(
        <Box onClick={handelDrawerToggle} sx={{textAlign:'center'}}>
             <Typography variant='h6' color={'goldenrod'} component={'div'} sx={{flexGrow:'1',my:2}}>
            <ColorLensIcon/>
            <BrushIcon/>
            <span style={{fontWeight:'bold'}}>RayArt</span>
            </Typography>
            <Divider/>
                <ul className='mobile_nav'>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/Menu'}>Menu</Link>
                    </li>
                    <li>
                        <Link to={'/About'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/Contact'}>Contact</Link>
                    </li>
                </ul>
        </Box>
    )
  return (
    <>
    <Box>
    <AppBar component={'nav'} sx={{bgcolor:'black'}}>
        <Toolbar>
            <IconButton color='inherit' aria-level={'open drawer'} 
            edge='start' sx={{mr:'2', display:{sm:'none'}}}
            onClick={handelDrawerToggle}> 
                <MenuIcon/>
            </IconButton>
        <Typography variant='h6' color={'goldenrod'} component={'div'} sx={{flexGrow:'1'}}>
            <ColorLensIcon/>
            <BrushIcon/>
            <span style={{fontWeight:'bold'}}>RayArt</span>
            </Typography>
            <Box sx={{display:{xs:'none',sm:'block'}}}>
                <ul className='nav_menu'>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/Menu'}>Menu</Link>
                    </li>
                    <li>
                        <Link to={'/About'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/Contact'}>Contact</Link>
                    </li>
                </ul>
            </Box>
        </Toolbar>
    </AppBar>
    <Box component={'nav'}>
        <Drawer 
        variant='temporary' open={mobileOpen}
         onClose={handelDrawerToggle} 
         sx={{display:{xs:'block',sm:'none'},"& .MuiDrawer-paper":{
            boxSizing:'border-box',
            width:'240px'
         }}}>
            {drawer}
        </Drawer>
    </Box>
    <Box>
    <Toolbar/>
    </Box>
    </Box>
    </>
  )
}

export default Header