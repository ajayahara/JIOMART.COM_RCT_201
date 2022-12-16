import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import logo from "../Resources/sslogo.png"
import './Navbar.css';
import { IconContext } from 'react-icons';
import { Box,Flex,Image,SimpleGrid,Stack,InputGroup,InputLeftElement} from '@chakra-ui/react';
import Sidebar from './sidebar';
import { Input } from '@chakra-ui/react'
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';



function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <SimpleGrid coloums={10} >
      <Box>
      {/* <IconContext.Provider value={{ color: 'yellow' }}> */}
        <Flex className='navbar'>
          {/* fbars icons for side bar */}
        <Box className='sideup'>
        <Box  className='menu-bars' >
        <FaIcons.FaBars onClick={showSidebar} color='white' mt={"5px"}/>
          </Box>
          </Box>
          <Sidebar sidebar={sidebar} showSidebar={showSidebar}/> 
          {/* other items navbar */}
           <Image src={logo} w={"120px"} h={"80px"} ml={"260px"}/> 
           <Stack spacing={4}>
  <InputGroup>
   
    <Input bg={"white"} w={"660px"} color={"white"} ml={"60px"} type='text' placeholder='Search essential,goods and much more......' />
    <InputLeftElement
     ml={"660px"}
      pointerEvents='none'
      children={<FaIcons.FaBars color='grey' />}
    />
  </InputGroup>
</Stack>
 <Flex color={"white"}  ml={"30px"} gap={2}>
 <Person2RoundedIcon  />
 <p >Sign in / Sign up</p>
 <Flex ml={"30px"} gap={2} >
  <ShoppingCartRoundedIcon/>
  <p>Cart</p>
 </Flex>
 </Flex>  
 </Flex>
 
 
</Box>
{/* <ul>
  <li><a href="#">Home</a></li>
  <li>
    <a href="#">Language </a>
    <ul className='dropdown'>
    <a href="#">HTML </a>
    <a href="#">JAVASCRIPT </a>
    <a href="#">Language </a>
    </ul>
    </li>
    <li><a href="#">About Us</a></li>
    <li><a href="#">contact Us</a></li>
 </ul>  */}

 

    </SimpleGrid>
  );
}

export default Navbar;

