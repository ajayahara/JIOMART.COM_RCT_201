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
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
      function handleWindowResize() {
  
        setWindowSize(getWindowSize());
      }
  
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);
 
    function getWindowSize() {
      const { innerWidth, innerHeight } = window;
      return { innerWidth, innerHeight };
  
    }
    if (windowSize.innerWidth <= 623) {
      settings.slidesToShow = 1;
    }
    else if (windowSize.innerWidth > 623 && windowSize.innerWidth <= 800) {
      settings.slidesToShow = 3;
    }
    else if (windowSize.innerWidth > 800 && windowSize.innerWidth <= 1000) {
      settings.slidesToShow = 3;
    }
    else {
      settings.slidesToShow = 6;
    }
  
  



  return (
    <div className='cont' >
    
    
     <Slider {...settings}>
    {
   tren.length>0 && tren.map(({img,title,Rs,Mrp,save},index)=>(
    <Box key={index} gap={1} ml={"4px"} fontSize={"18px"} fontWeight={600} bg={"white"} >
        <Box id='trending' border={"1px solid gray"} p="20px"  >
    <Center>
    <Image className='scale_img' w={"80%"}src={img} h={"160px"} alt="Image 1"  />
    </Center>
    <Text fontSize={["10px","10px","15px","15px"]} ml={"4px"} color={"black"}mt={"15px"}>{title}</Text>
   <Text ml={"4px"} color={"black"}>Rs :{Rs}</Text>
   
  <strike> <Text  ml={"4px"} color={"red.400"}>M.R.P :{Mrp}</Text></strike> 
    <Text ml={"4px"} color={'green'}>Save: {save}</Text>
    <Center>
    <Button fontSize={["10px","10px","15px","15px"]} w={"98%"} bg={"#008ecc"} color={"white"}>Add to cart <span bg={"#50c1f2"} borderRadius={"50%"}>+</span></Button>
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