import React from 'react'
import { Box, Image, Text ,Center,Button} from '@chakra-ui/react';
import axios from 'axios';

import { useState, useEffect } from 'react';
import "./imgslid.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Prodcustom = ({url}) => {
    const[tren,setTrend]=useState([])
    useEffect(()=>{
        
    axios.get(url)
    .then((res)=>setTrend(res.data))
    },[])
    const settings = {
        arrows:true,
        slidesToShow: 5,
        slidesToScroll: 1,
        gap:"5px"

    }
  return (
    <div className='container' >
    
    
     <Slider {...settings}>
    {
   tren.length>0 && tren.map(({img,title,Rs,Mrp,save},index)=>(
    <Box key={index} p={"10px"} ml={"4px"} fontSize={"18px"} fontWeight={600}>
        <Box id='trending' border={"2px solid gray"} >
    <Center>
    <Image w={"90%"}src={img} h={"160px"} alt="Image 1"  />
    </Center>
    <Text ml={"4px"} color={"black"}mt={"15px"}>{title}</Text>
   <Text ml={"4px"} color={"black"}>Rs :{Rs}</Text>
   
  <strike> <Text  ml={"4px"} color={"red.400"}>M.R.P :{Mrp}</Text></strike> 
    <Text ml={"4px"} color={'green'}>Save: {save}</Text>
    <Center>
    <Button w={"98%"} bg={"#008ecc"} color={"white"}>Add to cart <span bg={"#50c1f2"} borderRadius={"50%"}>+</span></Button>
    </Center>
    </Box>
  </Box>
   ))
}
</Slider>

    </div>
  )
}

export default Prodcustom