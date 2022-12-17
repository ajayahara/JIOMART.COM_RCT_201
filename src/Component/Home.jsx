
import { Box, Center, Flex, Image } from '@chakra-ui/react'
import Autocrausel from '../Pages/Autocrausel'
import Singleslider from '../Pages/Singleslider'


const Home = () => {

 
 
  return (
    <Box  h={"2500px"}>
      <Autocrausel/>
      <Center>
      <Flex direction={"column"} pt={"10px"} w={"99%"}>
       
        <Image src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1667281294_bLOCK_BUSTER_dEALS_1_Desktop.jpg"/>
        <Image src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1671215667_StaticBanner_17th_Dec_WEB.jpg"/>
       
      </Flex>
      </Center>
      <Box mt=
    {"10px"} w={"99%"}>
      <Singleslider/>
      </Box>

    </Box>
      
  )
}

export default Home