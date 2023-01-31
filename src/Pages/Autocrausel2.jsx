import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./crausel.css";

import { Autoplay, Pagination, Navigation } from "swiper";
import { Box } from '@chakra-ui/react'
export default function Autocrausel2() {
  return (
    <Box mt={"10px"}>
      <Swiper
     
     
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide >
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1675014035_1674923987_Never_before_deals_1680.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1675014163_1674841440_1674798765_1674756780_Kitchenware_Desktop.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1675015110_1674924685_1674841337_1674756979_MonthEndDeals_1680x320.jpg"></img> </SwiperSlide>
        <SwiperSlide>
        <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1675014461_1674841627_Samsung_Galaxy_A14_5G_Desktop.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1675015347_1674966364_Laptop-Carnival-JioMart--Carousel-Banner-13_09_2022_1680x320.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1675015568_1674927599_Sugar--jaggery_1680x320.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1675015820_1674824242_foodbanner_1680x325.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1671127591_1671037823_HOME-FURNISHING_1680x320.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1674824802_CM_HPMC_BANNER_NEW_1680.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
