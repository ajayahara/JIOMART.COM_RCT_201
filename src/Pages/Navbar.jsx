import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import logo from "../Resources/smstr.png";
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
import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from "@chakra-ui/icons";
const getData = () => {
  return axios.get("https://kiwi-discovered-pyjama.glitch.me/cart");
};
function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();
  const showSidebar = () => setSidebar(!sidebar);
  const val = JSON.parse(localStorage.getItem("Jio Mart User"));
  const token = useSelector((store) => store.AuthReducer.token);
  console.log(token);
  const handleGet = () => {
    getData().then((res) => setLength(res.data.length));
  };
  const [length, setLength] = useState(0);
  useEffect(() => {
    handleGet();
  }, []);
  // setText(val.firstName || "Sign in / Sign up");
  // console.log(length);
  const handleLogin=()=>{
    if(val==null)
    {
      navigate("/login")
    }
    else{

      // <Menu>
      //  <MenuButton
      //   border={"none"}
      //   backgroundColor={"transparent"}
      //   fontWeight={"500"}
      //   as={IconButton}
      //   aria-label="Options"
    //     icon={
    //       <Tag bg={"#ff645f"} color={"white"} h={10}>
    //         {data !== "SIGN IN" ? data.toUpperCase() : "Sign In"}
    //       </Tag>
    //     }
    //     variant="outline"
    //   />
    //   <MenuList
    //     p="0px"
    //     boxShadow="rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
    //   >
    //     <Box
    //       borderRadius="5px 5px 0% 0%"
    //       bgColor="#24A3B5"
    //       h="65px"
    //       display="flex"
    //       alignItems="center"
    //       justifyContent="center"
    //       gap={5}
    //     >
    //       <FaIcons.FaUserCircle fontSize="35px" color="#fff" />
    //       {/* <Img
    //         w="40px"
    //         h="40px"
    //         borderRadius="50%"
    //         src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
    //         alt="error in url"
    //       /> */}
    //     <Text color="#fff" fontWeight="bold">
    //         {data.toUpperCase()}
    //      </Text>
    //   </Box>
  
        
    //        <MenuItem
    //         p="8px 15px"
    //         fontSize="18px"
    //         onClick={AuthorisedOrNot}
    //         icon={<RiAdminLine />}
    //       >
    //         Admin Page
    //       </MenuItem>
        
        
    //     <MenuItem
    //       p="8px 15px"
    //       fontSize="18px"
    //       icon={<FaRegHeart />}
    //     >
    //       WishList
    //     </MenuItem>
    //     <MenuItem
    //       p="8px 15px"
    //       fontSize="18px"
    //       icon={<MdOutlineSwitchAccount />}
    //     >
    //       My Profie
    //     </MenuItem>
    //     <MenuItem
    //       p="8px 15px"
    //       fontSize="18px"
    //       icon={<FiShoppingCart />}
    //     >
    //       <Link href="/cart">My Cart</Link>
    //     </MenuItem>
    //     <MenuItem
    //       p="8px 15px 15px 15px"
    //       onClick={() => handleLogout()}
    //       fontSize="18px"
    //       icon={<BiLogOut />}
    //     >
    //       Logout
    //     </MenuItem>
    //   </MenuList>
    // </Menu>
    }
  }
  return (
    <SimpleGrid coloums={10}>
      <Box>
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
          <Image
            src={logo}
            w={{base:"120px", md:"140px", lg:"180px"}}
            h={{base:"80px", md:"80px", lg:"120px"}}
            ml={{base:"20px", md:"40px", lg:"160px"}}
            onClick={() => navigate("/")}
          />
          <Stack spacing={4}>
            <InputGroup>
              <Input
                bg={"white"}
                w={{base:"150px", md:"380px", lg:"660px"}}
                color={"white"}
                ml={{base:"10px", md:"30px", lg:"60px"}}
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
            {/* <Person2RoundedIcon  /> */}
            <Center gap={2}>          
            {val!=null?
              <Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={ <Person2RoundedIcon  />}
    variant='outline'
  />
  <MenuList boxShadow="rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px">
    <MenuItem icon={<AddIcon />} >
      My Order
    </MenuItem>
    <MenuItem icon={<ExternalLinkIcon />} >
      My Cart
    </MenuItem>
    <MenuItem icon={<RepeatIcon />} >
      Admin Panel
    </MenuItem>
    <MenuItem icon={<EditIcon />} >
      LogOut
    </MenuItem>
  </MenuList>
</Menu>:""}
<p display={{base:"none", md:"block"}} style={{ cursor: "pointer" }} onClick={handleLogin}>
              {val || "Sign in/ Sign Up"}
             
            </p>
</Center>
 
           
            <Flex ml={"30px"} gap={2} style={{ cursor: "pointer" }}>
              <ShoppingCartRoundedIcon onClick={() => navigate("/cart")} />
              <Box
                style={{
                  position: "absolute",
                  right: "11.1%",
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "40px",
                  height: "20px",
                  width: "20px",
                  lineHeight: "22px",
                  textAlign: "center",
                  top: "12.6px",
                }}
              >
                {length}
              </Box>
              <p onClick={() => navigate("/cart")}>Cart</p>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <Box>
        <Navlist />
      </Box>
      <Box>{/* <Navlist /> */}</Box>
    </SimpleGrid>
  );
}

export default Navbar;


{/* <Link to={data == "Sign In" ? "/login" : ""}>
<Center>
 
// </Center>
// </Link> */}
