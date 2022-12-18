import { Box, Flex, SimpleGrid,  Stack, Link, Heading,Image,Text, Divider } from "@chakra-ui/react"
import { Container } from "@chakra-ui/react"
import { grey, yellow } from "@mui/material/colors"

import React from 'react'

import app from "../Resources/app.png"
import play from "../Resources/play.png"
const footer = () => {
  return (
    <Box 
         style={{backgroundColor:"rgba(21, 27, 57, 0.08)"}}
      color={"grey.200"} w={"100vw"} pos={'relative'} bottom={0} m={"auto"}>
      <Container as={Stack} maxW={'6xl'} py={14} >
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={29}  >
          <Stack align={'flex-start'} marginRight={"150px"}>
          <Heading as='h5' size='md'fontSize={14} >MOST POPULAR CATEGORIES</Heading>
            <Link href={'#'} fontSize={14} >Staples</Link>
            <Stack direction={'row'} align={'center'} spacing={10}>
              <Link href={'#'} fontSize={14} >Beverages</Link>
              
            </Stack>
            <Link href={'#'} fontSize={14} >Personal Care</Link>
            <Link href={'#'} fontSize={14} >Home Care</Link>
            <Link href={'#'} fontSize={14} >Fruits and Vegetables</Link>
            
           
           {/* first row */}
          </Stack>
          <Stack align={'flex-start'} w={"200px"} marginLeft={"170px"}>
            <Heading as='h4' size='md' fontSize={15} >CUSTOMER SERVICES</Heading>
            <Link href={'#'} fontSize={14} >About Us</Link>
            <Link href={'#'} fontSize={14} >FAQ</Link>
            <Link href={'#'} fontSize={14} >Terms and conditions</Link>
            <Link href={'#'} fontSize={14} >Privacy policy</Link>
            <Link href={'#'} fontSize={14} >E-waste Policy</Link>
            <Link href={'#'} fontSize={14} >Cancellation and return policy</Link>
           
            
          </Stack>
         
          <Stack align={'flex-end'} w={"350px"} marginLeft={"220px"} >
            <Heading as='h4' size='md' fontSize={14}>CONTACT US</Heading>
            <p style={{fontSize:"13px"}}>WhatsApp us : <span className='side-color'>70003 70003 </span></p>
            <br />
            <p style={{fontSize:"13px"}}>8:00 AM to 8:00 PM, 365 days</p>
            <br />
            <p style={{fontSize:"13px"}}>Please note that you are accessing the BETA</p>
            <p style={{fontSize:"13px"}}>Version of www.jiomart.com</p>

            <br />
            <p style={{fontSize:"13px"}}>Should you encounter any bugs, glitches, lack of functionality, delayed deliveries, billing errors or other problems on the beta website, please email us on cs@jiomart.com

</p>
<br />
<Heading as='h4' size='md' fontSize={14}>DOWNLOAD APP</Heading>
            <Flex w={"300px"}>
                <Image  w={"130px"} mt={"-40px"}src={play}/>
                <Image  w={"130px"} mt={"-40px"}src={app}/>
            </Flex>
            </Stack>
          </SimpleGrid>
          </Container>
          <Flex align={"flex-start"} marginLeft={"160px"}>
          <Divider></Divider>
          </Flex>
          <Box
      bg={yellow}
      color={grey}>
       
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
        >
        <Text>Best viewed on Microsoft Edge 81+, Mozilla Firefox 75+, Safari 5.1.5+, Google Chrome 80</Text>
            </Container>
        </Box>
        </Box>
  )
}

export default footer