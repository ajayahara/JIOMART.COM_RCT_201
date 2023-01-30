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
        if (windowSize.innerWidth <= 425) {
            settings.slidesToShow = 1;
        }
        else if (windowSize.innerWidth > 425 && windowSize.innerWidth <= 600) {
            settings.slidesToShow = 3;
        }
        else if (windowSize.innerWidth > 600 && windowSize.innerWidth <= 900) {
            settings.slidesToShow = 4;
        }
        else {
            settings.slidesToShow = 6;
        }
    
  return (
    <div >
        <Box className="cont" mt={"25px"} >
        <Slider  {...settings}>
        {
                    cat.length > 0 && cat.map(({ img, title }, index) => (

                        <div key={index}>
                            <Box className='image_crausal' display="flex" justifyContent="center"  alignItems="center">
                                <Image className='scale_img' w={{base:"250px",md:"180px",lg:"180px"}} src={img} alt="Image" h={"210px"} />
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