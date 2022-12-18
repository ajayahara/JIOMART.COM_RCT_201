import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import logo from "../Resources/sslogo.png";
import "./Navbar.css";
// import { IconContext } from 'react-icons';
import {
  Box,
  Flex,
  Image,
  SimpleGrid,
  Stack,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import Sidebar from "./sidebar";
import { Input } from "@chakra-ui/react";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import Navlist from "../Component/Navlist";
import { useNavigate } from "react-router";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <SimpleGrid coloums={10}>
      <Box>
        {/* <IconContext.Provider value={{ color: 'yellow' }}> */}
        <Flex className="navbar">
          {/* fbars icons for side bar */}
          <Box className="sideup">
            <Box className="menu-bars">
              <FaIcons.FaBars
                onClick={showSidebar}
                color="white"
                mt={"5px"}
                pt={"5px"}
              />
            </Box>
          </Box>
          <Sidebar sidebar={sidebar} showSidebar={showSidebar} />
          {/* other items navbar */}
          <Image src={logo} w={"120px"} h={"80px"} ml={"260px"} />
          <Stack spacing={4}>
            <InputGroup>
              <Input
                bg={"white"}
                w={"660px"}
                color={"white"}
                ml={"60px"}
                type="text"
                placeholder="Search essential,goods and much more......"
              />
              <InputLeftElement
                ml={"660px"}
                pointerEvents="none"
                children={<FaIcons.FaBars color="grey" />}
              />
            </InputGroup>
          </Stack>
          <Flex color={"white"} ml={"30px"} gap={2}>
            <Person2RoundedIcon />
            <p style={{ cursor: "pointer" }} onClick={() => navigate("/login")}>
              Sign in / Sign up
            </p>
            <Flex ml={"30px"} gap={2} style={{cursor:"pointer"}} >
              <ShoppingCartRoundedIcon onClick={()=> navigate('/cart')}/>
              <p onClick={()=> navigate('/cart')}>Cart</p>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <Box>
        {/* <Navlist /> */}
      </Box>
    </SimpleGrid>
  );
}

export default Navbar;
