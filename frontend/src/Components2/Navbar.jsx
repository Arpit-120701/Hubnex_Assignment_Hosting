import React ,{ useState }  from 'react'
import { Box, Link } from "@chakra-ui/react"
import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

function Navbar() {

    const navigate = useNavigate()
    
      const onClick = async() =>{
        navigate('/sign')
      }

  return (
    <>
        <Box background="#FFFFFF" display='flex' justifyContent={"space-between"} width='100%' height='87px'>
                <Box height='20px' width='20%'>
                <img src='/Assets/logo.jpg' alt="logo"  />
                </Box>
                <Box display='flex' justifyContent="space-evenly" alignItems={'center'} width='40%' >
                  <Link to={"/"}  style={{textDecoration:"none", color:"black" , fontSize:'21px' }} >Home</Link> 
                  <Link style={{textDecoration:"none", color:"black" , fontSize:'21px'}}>Pricing</Link>
                  <Link style={{textDecoration:"none", color:"black", fontSize:'21px'}}>Feature</Link>
                  <Link to='/dashboard' style={{textDecoration:"none", color:"black", fontSize:'21px'}}>About Us</Link>
                  <Button size='lg' backgroundColor={'green'} colorScheme={'green'} onClick={onClick}>Enroll Now</Button>
                </Box>
            </Box>
    </>
  )
}

export default Navbar
