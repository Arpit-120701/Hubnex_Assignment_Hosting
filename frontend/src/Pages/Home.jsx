import React, { useState } from 'react'
import { Box, Link } from "@chakra-ui/react"
import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components2/Navbar';




function Home() {
  const [hover, setHover] = useState(false);

  const textStyle = {
    color: hover ? 'green' : 'black',
    cursor: 'pointer', 
  };

  return (
    <>
    <Navbar />
    <Box background="green" width='100%' >
      <img src='/Assets/Frame1.png'></img>
    </Box>
    <Box display='flex' justifyContent="space-evenly" alignItems={'center'} width='100%'>
    <Box width="621.92px" height='521px'><img src='/Assets/Frame15.jpg' ></img></Box>
    <Box width="621px" height='521px'><img src='/Assets/Group1690.jpg'></img></Box>

    </Box>

    <Box display='flex' justifyContent="center" alignItems='center' width='100%' marginTop='40px'>
      <img src='/Assets/Partnered.jpg' ></img>
    </Box>

    <Box display='flex' justifyContent="center" alignItems='center' width='100%'>
    <img src='/Assets/Component31.png' style={{marginTop:'40px'}}></img>
    </Box>

    <Box display='flex' justifyContent="center" alignItems='center' width='100%' marginTop='40px'>
      <img src='/Assets/Group1321.jpg'></img>
    </Box>

    <Box display='flex' justifyContent="center" alignItems='center' width='100%' marginTop='40px'>
    </Box>
    </>
  )
}

export default Home
