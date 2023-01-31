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

    return(
        <div>
            
             <Imagesslidershop url="https://kiwi-discovered-pyjama.glitch.me/imagesslider"/>
        </div>
    )
}


export default Imagesslider
