import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
// import logo from "../Resources/smstr.png";
import logo from "../Resources/bcg-noBackground.png";
// import logo from "../Resources/sslogo.png";
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
function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();
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
  }, [cart]);
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
          <Flex color={"white"} gap={{ base: 1, md: 2, lg: 4 }} className='R-icons-top' >
            <Person2RoundedIcon
              className="accountIcon"
              onClick={() => navigate("/login")}
            />
            <p style={{ cursor: "pointer" }} onClick={() => navigate("/login")}>
              {/* className='R-Text' */}
              <span className="R-Text">{val || "Sign in/ Sign Up"}</span>
            </p>
            <Flex
              gap={{ base: 1, md: 2, lg: 4 }}
              color="white"
              style={{ cursor: "pointer" }}
                className='R-icons-top'
            >
              <ShoppingCartRoundedIcon onClick={() => navigate("/cart")} />
              <Box
                style={{
                  position: "absolute",
                  right: "7%",
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "40px",
                  height: "15px",
                  width: "15px",
                  fontSize: "13px",
                  lineHeight: "13px",
                  textAlign: "center",
                  top: "25px",
                }}
                className="R-icons-top"
              >
                {length}
              </Box>
              
              <p onClick={() => navigate("/cart")}>
                <span className="R-Text">Cart</span>
              </p>
            </Flex>
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
