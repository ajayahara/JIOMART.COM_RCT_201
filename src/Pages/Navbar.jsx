import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import SidebarData  from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { Box } from '@chakra-ui/react';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Box className='navbar'>
            <Box className='sideup'>
               
          <Box  className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
            </Box>
          </Box>
        </Box>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <div className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </div>
            </li>
            <SidebarData/>
            {/* {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  
                    {item.icon}
                    <span>{item.title}</span>
                 
                </li>
              ); */}
            {/* })} */}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;

// import { Box, Button, Center, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, IconButton, Img, Input, InputGroup, InputLeftElement, Radio, RadioGroup, SimpleGrid, Stack, Text, useDisclosure, VStack } from '@chakra-ui/react'


// import React, { useState, useEffect } from 'react';
// import BoltIcon from '@mui/icons-material/Bolt';
// import {  ChevronDownIcon, SearchIcon, } from '@chakra-ui/icons'
// import NewReleasesOutlinedIcon from '@mui/icons-material/NewReleasesOutlined';
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
// import Test from './Inputplace';
// import {FaBars,FaTimes} from "react-icons/fa"
// import sslogo from "../Resources/sslogo.png"





// const Nav = () => {
   


//     // inside component:
    
//     const { isOpen, onOpen, onClose } = useDisclosure()
//     const [placement, setPlacement] = React.useState('right')

//     const [scrollPosition, setScrollPosition] = useState(0);
//     const [overflow, setOverflow] = useState("hidden")


   

    
  
    
 

//     //
//     return (
//         <Box w='100%' h={"80px"}   top={0} zIndex={999} overflow={overflow} position={"sticky"} style={{backgroundColor:"#008ecc",}}>
//             <SimpleGrid columns={[3, 3, 3, 6]} >
//                 <Flex>
//                 <Center mt={"27px"} ml={"75px"}>
//                 <FaBars size={"32px"} color={"white"} onClick={onOpen}/>
                
//            </Center>
//            </Flex>
          
//             </SimpleGrid>
            

//         </Box>

//     )
// }

// export default Nav
// //   {/* <h1>{scrollPosition}</h1>  */}