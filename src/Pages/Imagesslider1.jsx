import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";


import "./imgslid.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Imagesslidershop = ({url}) => {
    const navigate=useNavigate()
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
    <div >
        <Box className="cont" mt={"25px"} >
        {/* onClick={()=>navigate('/electronicProducts')}   */}
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