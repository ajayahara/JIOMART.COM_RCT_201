import {
    Box,
    Button,
    Flex,
    Grid,
    GridItem,
    Heading,
    Spacer,
    Text,
  } from "@chakra-ui/react";
  import React, { useEffect, useState } from "react";
  import { CgProfile } from "react-icons/cg";
  import { BsCalendar2Check } from "react-icons/bs";
  import { MdLocationOn } from "react-icons/md";
  import { BsCreditCardFill } from "react-icons/bs";
  import { useDispatch, useSelector } from "react-redux";
  import { useNavigate } from "react-router-dom";
  
  const AccountPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [orders, setOrders] = useState([])
    const val = JSON.parse(localStorage.getItem("Details"));
    const phone = JSON.parse(localStorage.getItem("phone"));
   console.log(val)

  

    const handleLogout = () => {
      localStorage.removeItem("Jio Mart User")
      navigate('/')
    };
  
    return (
      <Box bg={"whitesmoke"} padding={"50px 150px"}>
        <Heading mb="20px" fontSize="25px" as="h2">
          My Account
        </Heading>
  
        <Grid bg={"whitesmoke"} templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem
            p={"25px"}
            borderRadius={"10px"}
            w="80%"
            h="240px"
            bg="#008ecc"
          >
            <Grid
              color={"white"}
              bg="#008ecc"
              templateColumns="repeat(2, 1fr)"
              gap={2}
            >
              <GridItem fontSize={"60px"} w="30%" h="50" bg="#008ecc">
                {" "}
                <CgProfile />{" "}
              </GridItem>
              <GridItem ml="-135px" w="100%" h="10" bg="#008ecc">
                <Text as={"b"}>{`${val.firstName} `}</Text> <br />
                <Text as={"i"} color={"#cecece"} fontSize={"12px"}>
                  {val.email}
                </Text>
                <Text color={"#cecece"} fontSize={"12px"}>
                  {phone}
                </Text>
              </GridItem>
  
              <GridItem
                mt={"25px"}
                fontSize={"14px"}
                fontWeight={"bold"}
                borderRadius={"5px"}
                w="100%"
                p={"15px"}
                h="50px"
                bg="#66bbe0"
              >
                <Flex>
                  <Box fontSize={"25px"} mr="15px">
                    <BsCreditCardFill />
                  </Box>
                  <Box>Payment Method</Box>
                </Flex>
              </GridItem>
              <GridItem
                mt={"25px"}
                fontSize={"14px"}
                fontWeight={"bold"}
                borderRadius={"5px"}
                p={"15px"}
                w="100%"
                h="50px"
                bg="#66bbe0"
              >
                <Flex>
                  <Box fontSize={"25px"} mr="15px">
                    <BsCalendar2Check />
                  </Box>
                  <Box>Order history</Box>
                </Flex>
              </GridItem>
  
              <GridItem
                fontSize={"14px"}
                fontWeight={"bold"}
                borderRadius={"5px"}
                p={"15px"}
                w="204%"
                h="50px"
                bg="#66bbe0"
              >
                <Flex>
                  <Box fontSize={"25px"} mr="15px">
                    <MdLocationOn />
                  </Box>
                  <Box> Delivery Addresses</Box>
                </Flex>
              </GridItem>
            </Grid>
          </GridItem>
  
          <GridItem
            pt={"20px"}
            ml={"-110px"}
            borderRadius={"10px"}
            bg={"white"}
            w="120%"
            h="240px"
          >
            <Text p={"30px"} fontSize={'30'} as={"b"}>
              Account Information
            </Text>
  
            <Grid p={"30px"} templateColumns="repeat(2, 1fr)" gap={4}>
              <GridItem w="100%" h="10">
                <Text fontSize={"xs"} as={"p"}>
                  Full Name
                </Text>
                <Text fontSize={"14px"} as={"b"}>
                {`${val.firstName} ${val.lastName}`}
                </Text>
              </GridItem>
              <GridItem w="100%" h="10">
                <Text fontSize={"xs"} as={"p"}>
                  Age
                </Text>
                <Text fontSize={"14px"} as={"b"}>
                  24
                </Text>
              </GridItem>
  
              <GridItem w="100%" h="10">
                <Text fontSize={"xs"} as={"p"}>
                  Email id
                </Text>
                <Text fontSize={"14px"} as={"b"}>
                  {val.email}
                </Text>
              </GridItem>
  
              <GridItem w="100%" h="10">
                <Text fontSize={"xs"} as={"p"}>
                  Mobile Number
                </Text>
                <Text fontSize={"14px"} as={"b"}>
                  {phone}
                </Text>
              </GridItem>
            </Grid>
          </GridItem>
  
          <GridItem mt={"-10px"} borderRadius={"10px"} bg={"white"} w="80%">
            <Box p={"20px"}>
              <Text fontSize={"sm"} as={"b"}>
                My List
              </Text>
            </Box>
            <hr />
            <Box p={"20px"}>
              <Text fontSize={"sm"} as={"b"}>
                WishList
              </Text>
            </Box>
            <hr />
            <Box p={"20px"}>
              {" "}
              <Text fontSize={"sm"} as={"b"}>
                PAN Card Information
              </Text>
            </Box>
            <hr />
            <Box p={"20px"}>
              {" "}
              <Text fontSize={"sm"} as={"b"}>
                Legal Information
              </Text>
            </Box>
            <hr />
            <Box p={"20px"}>
              <Text fontSize={"sm"} as={"b"}>
                Need Help
              </Text>
            </Box>
            <hr />
            <Box p={"20px"}>
              <Text fontSize={"sm"} as={"b"}>
                Contact us
              </Text>
            </Box>
            <hr />
            <Box p={"20px"} >
              <Button fontSize={"sm"} color="red"  onClick={() => handleLogout()} as={"b"}>
                Logout
              </Button>
            </Box>
          </GridItem>
  
          {/* <GridItem w="120%" ml='-28' >
            {orders.map((order,index)=> <OrderList key={index} order={order} visible={false}/>)}
          </GridItem> */}
        </Grid>
      </Box>
    );
  };
  
  export default AccountPage;