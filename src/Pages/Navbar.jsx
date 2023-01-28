import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import logo from "../Resources/bcg-noBackground.png";
import { BiLogOut } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import "./Navbar.css";
import { IconContext } from "react-icons";
import {
  Box,
  Flex,
  Image,
  SimpleGrid,
  Stack,
  InputGroup,
  InputLeftElement,
  Text,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Center,
} from "@chakra-ui/react";
import Sidebar from "./sidebar";
import { Input } from "@chakra-ui/react";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import Navlist from "../Component/Navlist";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import axios from "axios";
import { AddIcon, EditIcon, ExternalLinkIcon, RepeatIcon } from "@chakra-ui/icons";
import { AiOutlineDown } from "react-icons/ai";
function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();
  const [log, setLog] = useState(false)
  const showSidebar = () => setSidebar(!sidebar);
  const val = JSON.parse(localStorage.getItem("Jio Mart User"));
  const token = useSelector((store) => store.AuthReducer.token);
  let cart=useSelector((store)=>store.CartReducer.cart);
  const handleGet = () => {
  setLength(cart.length)
  };
  const [length, setLength] = useState(0);
  useEffect(() => {
    handleGet();
  }, [cart,log]);
  const handleLogin=()=>{
    if(val==null)
    {
      navigate("/login")
    }
  }
  const handleLogout = () => {
    localStorage.removeItem("Jio Mart User");
setLog(true)
  };
  return (
    <Box>
      <Box style={{ display: "flex", justifyContent: "space-evenly" }}>
        {/* <IconContext.Provider value={{ color: 'yellow' }}> */}
        <Flex className="navbar">
          {/* fbars icons for side bar */}
          <Box className="sideup" ml={{base:"10px", md:"30px", lg:"50px"}}>
            <Box  className="menu-bars" >
              <FaIcons.FaBars
                onClick={showSidebar}
                color="white"
                // mt={"5px"}
                // pt={"5px"}
              />
            </Box>
          </Box>
          <Sidebar sidebar={sidebar} showSidebar={showSidebar} />
          {/* other items navbar */}
          <img
            src={logo}
            // w={"180px"}
            // h={"140px"}
            // ml={"160px"}
            className="R-input-logo"
            onClick={() => navigate("/")}
          />
          <div>
            <InputGroup>
              <input
                // bg={"white"}
                // w={"660px"}
                // color={"white"}
                // ml={"60px"}
                // style={{width:"660px"}}
                className="R-inputBox"
                type="text"
                placeholder="Search essential,goods and much more......"
              />
            </InputGroup>
          </div>
          <Flex
              gap={{ base: 1, md: 2, lg: 4 }}
              color="white"
              style={{ cursor: "pointer" }}
                className='R-icons-top'
            >
              <ShoppingCartRoundedIcon  onClick={() => navigate("/cart")} />
              <Box
                style={{
                  position: "absolute",
                  right: "20.6%",
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "40px",
                  height: "15px",
                  width: "15px",
                  fontSize: "13px",
                  lineHeight: "13px",
                  textAlign: "center",
                  top: "24px",
                }}
                className="R-icons-top"
              >
                
                {length}
              </Box>
              
              <p onClick={() => navigate("/cart")}>
                <span className="R-Text">Cart</span>
              </p>
            </Flex>
          <Flex color={"white"} ml={"30px"} gap={2}>
          
            <Center gap={2}> 
            <Person2RoundedIcon  /> 
            <p className="R-Text" display={{base:"none", md:"block"}} style={{ cursor: "pointer" }} onClick={handleLogin}>
              {val || "Sign in/ Sign Up"}
            
            </p>        
            {val!=null?
              <Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={ <AiOutlineDown/> }
    variant='outline'
  />
  <MenuList  p="0px"  color='black' boxShadow="rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px">
  <Box
                      borderRadius="5px 5px 0% 0%"
                      bgColor="#008ecc"
                      h="60px"
                      display={"flex"}
                      alignItems="center"
                      justifyContent="space-around"
                      gap={5}
                    >
                      <Center gap={35}>
                      <FaIcons.FaUserCircle  fontSize="35px" color="#fff" />

                      <Text color="#fff" fontWeight="bold">
                        {val.toUpperCase()}
                      </Text>
                      </Center>
                    </Box>
    <MenuItem icon={<AddIcon />} >
      My Order
    </MenuItem>
    <MenuItem icon={<FiShoppingCart />} onClick={() => navigate("/cart")} >
      My Cart
    </MenuItem>
    <MenuItem icon={<RiAdminLine />} onClick={() => navigate("/admin")} >
      Admin Panel
    </MenuItem>
    <MenuItem bgColor="#d63e3e"
                      h="30px" icon={<BiLogOut />} onClick={() => handleLogout()} >
      LogOut
    </MenuItem>
  </MenuList>
</Menu>:""}

</Center>
 
         
          </Flex>
        </Flex>
      </Box>
      <Box>{/* <Navlist /> */}</Box>
      <Box>
        <Navlist />
      </Box>
    </Box>
  );
}

export default Navbar;


{/* <Link to={data == "Sign In" ? "/login" : ""}>
<Center>
 
// </Center>
// </Link> */}
