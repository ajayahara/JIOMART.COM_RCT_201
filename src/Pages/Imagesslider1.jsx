import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import axios from 'axios';


import "./imgslid.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Imagesslidershop = ({url}) => {
    const [cat, setCat] = useState([])
    useEffect(() => {
        axios.get(url)
            .then((res) => setCat(res.data))

    }, [])
    const settings = {
            arrows:true,
           slidesToShow: 6,
            slidesToScroll: 1
    
         }
  return (
    <div>
        <Box className="container" mt={"25px"} >
             
        <Slider  {...settings}>
        {
                    cat.length > 0 && cat.map(({ img, title }, index) => (

                        <div key={index}>
                            <Box>
                                <Image w={"230px"} src={img} alt="Image" h={"210px"} />
                            </Box>
                            <Text>{title}</Text>
                        </div>

                    ))
}
        </Slider>
        </Box>
    </div>
  )
}

export default Imagesslidershop