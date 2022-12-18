import { Box, Image, Text ,Center,Button} from '@chakra-ui/react';
import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import "./imgslid.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Prodcustom from './Prodcustom';

const ProdItems = () => {
//     const[trend,setTrending]=useState([])
//     useEffect(()=>{
        
//     axios.get("http)
//     .then((res)=>setTrending(res.data))
//     },[])
//     const settings = {
//         arrows:true,
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         gap:"5px"

//     }

    
//   return (
//     <div className='container'>
//     <Text textAlign={"left"} ml={"40px"} fontSize={"25px"} fontWeight= {'bold'}>Top Picks</Text>
    
//      <Slider {...settings}>
//     {
//    trend.length>0 && trend.map(({img,title,Rs,Mrp,save},index)=>(
//     <Box key={index}>
//         <Box id='trending' border={"1px solid black"} >
//     <Center>
    
//     <Image w={"95%"}src={img} h={"160px"} alt="Image 1"  />
   
   
//     </Center>
   
//     <Text color={"black"}mt={"15px"}>{title}</Text>
   
   
//    <Text color={"black"}>Rs :{Rs}</Text>
   
//   <strike> <Text color={"red.400"}>M.R.P :{Mrp}</Text></strike> 
//     <Text color={'green'}>Save: {save}</Text>
//     <Center>
//     <Button w={"98%"} bg={"#008ecc"} color={"white"}>Add to cart <span bg={"#50c1f2"} borderRadius={"50%"}>+</span></Button>
//     </Center>
//     </Box>
//   </Box>
//    ))
// }
// </Slider>

//     </div>
  return (
    <Prodcustom url="https://kiwi-discovered-pyjama.glitch.me/prod_top"/>
  )
}

export default ProdItems