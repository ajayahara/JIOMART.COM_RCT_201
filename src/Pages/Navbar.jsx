import React, { useEffect, useState, useCallback, useRef } from "react";
import * as FaIcons from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import logo from "../Resources/bcg-noBackground.png";
import { BiLogOut } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import "./Navbar.css";
import {
  Box,
  Flex,
  Image,
  InputGroup,
  Text,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  Center,
  Button,
  MenuItem,
  useDisclosure,
  InputRightAddon,
  Hide,
  useToast,
} from "@chakra-ui/react";
import Sidebar from "./sidebar";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import Navlist from "../Component/Navlist";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  AddIcon
} from "@chakra-ui/icons";
import { AiOutlineDown } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { AddToCart } from "../redux/Cart/action";

const CurrentIndivisualData = (payload) => {
  return axios.put(
    "https://kiwi-discovered-pyjama.glitch.me/indivisualPageData",
    payload
  );
};


const getAllData = () => {
  return axios.get("https://kiwi-discovered-pyjama.glitch.me/alldata");
};

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [searchbar, setSearchbar] = useState(false);
  const navigate = useNavigate();
  const [log, setLog] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const val = JSON.parse(localStorage.getItem("Jio Mart User"));
  const token = useSelector((store) => store.AuthReducer);
  let cart = useSelector((store) => store.CartReducer.cart);
  const [arr, setArr] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const input_value = useRef();
  const toast = useToast();
  const dispatch = useDispatch();
  const handleGet = () => {
    setLength(cart.length);
  };
  const [length, setLength] = useState(0);
  useEffect(() => {
    handleGet();
  }, [cart, log]);
  const handleLogin = () => {
    if (val == null) {
      navigate("/login");
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("Jio Mart User");
    setLog(true);
  };

  const handleGetAllData = () => {
    getAllData().then((res) => {
      console.log(res, "setarr res");
      setArr(res.data);
    });
  };

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 0);
    };
  };

  const handleChange = async (value) => {
    if (value == "") {
      setSearchbar(true);
    } else {
      setSearchbar(false);
    }
    let x = await getAllData().then((res) => res.data);
    // console.log(x,"x data")

    return setFilteredData(
      x.filter((el) => {
        if (el.name.split(" ").join("").includes(value)) {
          return el;
        }
      })
    );
  };

  const handleCurrentData = (item) => {
    // console.log(item)
    CurrentIndivisualData(item).then((res) =>
      // console.log(res.data)
      navigate("/indivisualPage")
    );
  };

  const optimizedFn = useCallback(debounce(handleChange), []);
  // console.log(filteredData);

  useEffect(() => {
    handleGetAllData();
  }, [filteredData]);

  return (
    <Box>
      <Box style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Flex className="navbar">
          <Box className="sideup" ml={{ base: "10px", md: "30px", lg: "50px" }}>
            <Box className="menu-bars">
              <FaIcons.FaBars
                onClick={showSidebar}
                color="white"
              />
            </Box>
          </Box>
          <Sidebar sidebar={sidebar} showSidebar={showSidebar} />
          {/* other items navbar */}
          <img
            src={logo}
            className="R-input-logo"
            onClick={() => navigate("/")}
          />
          <div border={"1px solid black"}>
            <InputGroup>
              <input
                ref={input_value}
                // bg={"white"}
                // w={"660px"}
                // color={"white"}
                // ml={"60px"}
                // style={{width:"660px"}}
                style={{ borderRadiusTopLeft: "20px", border: "transparent" }}
                borderRadiusLeft={"20px"}
                bgColor="white"
                // border={"1px solid red"}
                className="R-inputBox"
                type="text"
                placeholder="Search essential,goods and much more......"
                onChange={(e) => optimizedFn(e.target.value)}
              />

              
              <Button bg={"white"} _hover={{backgroundColor:"red"}} ml={-130} p={"27px 20px"} zIndex="1000" onClick={()=>{
                
                input_value.current.value="";

              <Button
                bg={"white"}
                _hover={{ backgroundColor: "red" }}
                display={{ base: "none", md: "none" }}
                ml={-130}
                p={"27px 20px"}
                zIndex="1000"
                onClick={() => {
                  input_value.current.value = "";

                  setSearchbar(true);
                }}
              >
                <ImCross />
              </Button>
            </InputGroup>
            {filteredData.length !== 0 ? (
              <Hide below="md">
                <Box
                  w={"543px"}
                  h={"280px"}
                  pos="absolute"
                  overflow={"scroll"}
                  top={"9%"}
                  bg="white"
                  border={"3px solid grey"}
                  zIndex="2000"
                  className={searchbar == true ? "searchbarbox" : null}
                >
                  {filteredData.length > 0 &&
                    filteredData.map((el, i) => {
                      return (
                        <Box
                          pt={2}
                          pl={5}
                          _hover={{ bg: "gray", color: "white" }}
                        >
                          <Box display={"flex"} key={i} gap={10}>
                            <Image
                              w={"50px"}
                              h={"50px"}
                              mb={2}
                              src={el.image}
                              onClick={() => handleCurrentData(el)}
                              _hover={{ cursor: "pointer" }}
                            ></Image>
                            <h1
                              onClick={() => handleCurrentData(el)}
                              _hover={{ cursor: "pointer" }}
                            >
                              <b>{el.name}</b>
                            </h1>
                          </Box>
                        </Box>
                      );
                    })}
                </Box>
              </Hide>
            ) : (
              ""
            )}
          </div>
          <Flex
            gap={{ base: 1, md: 2, lg: 4 }}
            color="white"
            style={{ cursor: "pointer" }}
            className="R-icons-top"
          >
            <p onClick={() => navigate("/cart")}>
              <span className="R-Text">Cart</span>
            </p>
            <ShoppingCartRoundedIcon onClick={() => navigate("/cart")} />
            <Box
              style={{
                position: "absolute",
                right: "21.3%",
                backgroundColor: "red",
                color: "white",
                borderRadius: "40px",
                height: "15px",
                width: "15px",
                fontSize: "13px",
                lineHeight: "13px",
                textAlign: "center",
                top: "16.8px",
              }}
              className="R-icons-top"
            >
              {length}
            </Box>
          </Flex>
          <Flex color={"white"} ml={"30px"} gap={2}>
            <Center gap={2}>
              <Person2RoundedIcon />
              <p
                className="R-Text"
                display={{ base: "none", md: "block" }}
                style={{ cursor: "pointer" }}
                onClick={handleLogin}
              >
                {val || "Sign in/ Sign Up"}
              </p>
              {val != null ? (
                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<AiOutlineDown />}
                    variant="outline"
                  />
                  <MenuList
                    zIndex="2000"
                    p="0px"
                    color="black"
                    boxShadow="rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
                  >
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
                        <FaIcons.FaUserCircle fontSize="35px" color="#fff" />

                        <Text color="#fff" fontWeight="bold">
                          {val.toUpperCase()}
                        </Text>
                      </Center>
                    </Box>
                    <MenuItem icon={<AddIcon />}>My Order</MenuItem>
                    <MenuItem
                      icon={<FiShoppingCart />}
                      onClick={() => navigate("/cart")}
                    >
                      My Cart
                    </MenuItem>
                    <MenuItem
                      icon={<RiAdminLine />}
                      onClick={() => navigate("/admin")}
                    >
                      Admin Panel
                    </MenuItem>
                    <MenuItem
                      bgColor="#d63e3e"
                      h="30px"
                      icon={<BiLogOut />}
                      onClick={() => handleLogout()}
                    >
                      LogOut
                    </MenuItem>
                  </MenuList>
                </Menu>
              ) : (
                ""
              )}
            </Center>
          </Flex>
        </Flex>
      </Box>
      <Box>
        <Navlist />
      </Box>
    </Box>
  );
}

export default Navbar;


