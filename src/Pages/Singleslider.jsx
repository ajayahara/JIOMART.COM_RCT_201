import { Image } from '@chakra-ui/react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import '@splidejs/react-splide/css';
import "./All.css"


const Singleslider = () => {
    const[single,setSingle]=useState([])
    useEffect(()=>{
         axios.get("https://kiwi-discovered-pyjama.glitch.me/Singleimage")
    .then((res)=>setSingle(res.data))

    },[])
   
  return (
    <div>
     <Splide aria-label="My Favorite Images" options={{
        perPage: 2,
        height: '130px',
        rewind: true,
        gap: '25px'
       
      }}>
    {
   single.length>0 && single.map(({img},index)=>(
    <SplideSlide key={index}>
    
    <Image w={"180%"}src={img} alt="Image1" h={"100px"} />
   
  </SplideSlide>
   ))
}
</Splide>
    </div>
  )
}

export default Singleslider