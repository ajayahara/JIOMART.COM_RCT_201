import { Image } from '@chakra-ui/react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import '@splidejs/react-splide/css';
import "./All.css"


const Singleslider = () => {
    const[single, setSingle]=useState([])
    useEffect(()=>{
         axios.get("https://kiwi-discovered-pyjama.glitch.me/Singleimage")
    .then((res)=>setSingle(res.data))

    },[])
   
  return (
    <div bg={"white"}>
     <Splide aria-label="My Favorite Images" options={{
        perPage: 2,
        height: '140px',
        rewind: true,
        gap: '0px'
       
      }}>
    {
   single.length>0 && single.map(({img},index)=>(
    <SplideSlide key={index}>
    
    <Image w={"96%"}src={img} alt="Image1" h={"90px"} mt={"18px"} ml={"20px"} mr={"20px"}/>
   
  </SplideSlide>
   ))
}
</Splide>
    </div>
  )
}

export default Singleslider