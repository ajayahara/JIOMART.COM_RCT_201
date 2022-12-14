// import Navbar from "./navbar";

import React from "react"

import {Box,Image,Text,Input} from "@chakra-ui/react"

export default function Login(){
    return(
        <>
        {/* <Navbar/> */}
        <br />
        <br />
        <Box w="90%" m="auto" display="flex">
         <Image  src= "https://www.jiomart.com/msassets/images/login-banner.jpg"/>
        <Box ml="200px" mt="100px">
        <Text ml={-300} fontSize="27px" fontWeight="bold">Sign in</Text>
        <Text fontSize={18} color={'rgb(112,117,121)'}>Sign in to access your Orders, Offers and Wishlist.</Text>
        <br/>

        <Input mr={220} placeholder="Enter your mobile no"/>
        </Box>
        </Box>
    </>
        )
}