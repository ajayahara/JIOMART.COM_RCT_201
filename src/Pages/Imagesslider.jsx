import { Box, Image, Text } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import "./imgslid.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Imagesslidershop from './Imagesslider1';
const Imagesslider = () => {
    // const [cate, setCate] = useState([])
    // useEffect(() => {
    //     axios.get("https://kiwi-discovered-pyjama.glitch.me/imagesslider")
    //         .then((res) => setCate(res.data))

    // }, [])
    // const settings = {
    //     arrows:true,
    //     slidesToShow: 5,
    //     slidesToScroll: 1

    // }
    // return (
    //     <Box className="container" mt={"25px"}>
    //         <Text textAlign={"left"} ml={"40px"} fontSize={"20px"} fontWeight={500} mt={"5px"}>Trending Brands</Text>

    //         <Slider {...settings}>
    //             {
    //                 cate.length > 0 && cate.map(({ img, title }, index) => (

    //                     <div key={index}>
    //                         <Box>
    //                             <Image w={"250px"} src={img} alt="Image" h={"180px"} borderRadius={"15px"} mt={"25px"} border={"1px solid black"} />
    //                         </Box>
    //                         <Text>{title}</Text>
    //                     </div>

    //                 ))
    //             }
    //         </Slider>
    //     </Box>
    // )
    return(
        <div>
            
             <Imagesslidershop url="https://kiwi-discovered-pyjama.glitch.me/imagesslider"/>
        </div>
    )
}


export default Imagesslider
//shop by categories