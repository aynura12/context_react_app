import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div>
   <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{boxShadow:"none",background: linear-gradient(#e66465, #9198e5)}} >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Context Api/Basket
          </Typography>
        <Link to="/">Home</Link>
        <Link to="/basket">Basket</Link>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
