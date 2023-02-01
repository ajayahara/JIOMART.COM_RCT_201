import {
  Box,
  Button,
  Center,
  Flex,
  grid,
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
  const dispatch = useDispatch();
  const [orders, setOrders] = useState([]);
  const val = JSON.parse(localStorage.getItem("Details"));
  const phone = JSON.parse(localStorage.getItem("phone"));
  const list = useSelector((store) => store.CartReducer.purchasedItems);

  useEffect(() => {
    setOrders(list);
  }, []);
  console.log("orders", orders);

  const handleLogout = () => {
    localStorage.removeItem("Jio Mart User");
    navigate("/");
  };

  return (
    <Box bg={"whitesmoke"} padding={{ lg: "50px 150px", base: "10px" }}>
      <Heading
        textAlign={{ base: "center", md: "left" }}
        mb="20px"
        fontSize="25px"
        as="h2"
      >
        My Account
      </Heading>

      <Grid
        bg={"whitesmoke"}
        templateColumns={{ lg: "repeat(2, 1fr)", base: "repeat(1, 1fr)" }}
        gap={6}
      >
        <GridItem
          p={"25px"}
          borderRadius={"10px"}
          w={{ lg: "80%", base: "95%" }}
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
            <GridItem
              ml={{ lg: "-115px", base: "-95px" }}
              w="100%"
              h="10"
              bg="#008ecc"
            >
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
              fontSize={"12px"}
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
              fontSize={{ lg: "14px", base: "12px" }}
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
          ml={{ lg: "-110px", base: "-5px" }}
          borderRadius={"10px"}
          bg={"white"}
          w={{ lg: "110%", base: "90%" }}
          h="270px"
        >
          <Text p={"30px"} fontSize={{ lg: "30px", base: "15px" }} as={"b"}>
            Account Information
          </Text>

          <Grid
            p={"30px"}
            templateColumns={{ lg: "repeat(2, 1fr)", base: "repeat(1,1fr)" }}
            gap={{ lg: "4", base: "2" }}
          
          >
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

            <GridItem w="100%" h="15" pb='10px'>
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
          <Box p={"20px"}>
            <Button
              fontSize={"sm"}
              color="red"
              onClick={() => handleLogout()}
              as={"b"}
            >
              Logout
            </Button>
          </Box>
        </GridItem>

        <GridItem w="100%" ml={{lg:"-28",base:"0"}}>
          <Center fontSize={"30px"} fontWeight="bold" mb={5}>
            {orders.length > 0 && <h1>My Order List</h1>}
          </Center>
          <Box
            display={"grid"}
            gap={"13px"}
            gridTemplateColumns={{lg:"repeat(2, 400px)",base:"repeat(1,1fr)"}}
          >
            {orders.map((el) => {
              return (
                <Flex
                  mr={15}
                  m="1rem"
                  gap="12px"
                  p="20px"
                  boxShadow=" rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"
                >
                  <Box>
                    {" "}
                    <img width="170px" height="150px" src={el.image} />
                  </Box>
                  <Box fontSize={"20px"}>
                    <b>{el.name}</b>

                    <Text>
                      {" "}
                      <span style={{ color: "red" }}>Rs.</span>
                      <span style={{ color: "green" }}>{el.price}</span>
                    </Text>
                  </Box>
                </Flex>
              );
            })}
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default AccountPage;
