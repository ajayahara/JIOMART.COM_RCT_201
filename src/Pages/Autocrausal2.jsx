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
        <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1675014461_1674841627_Samsung_Galaxy_A14_5G_Desktop.jpg"></img> </SwiperSlide>
        <SwiperSlide>
        <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1675012450_1673459553_Masala--Spices_1680x320.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1674824802_CM_HPMC_BANNER_NEW_1680.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1675014323_1674841079_1674797556_1674794009_HPMC_-1_1680x320_copy_32.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1675014878_1673978068_1673226856_1672942714_Desktop_LaundryFest-min.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1675015820_1674824242_foodbanner_1680x325.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1674625802_Web_Mumbai_PremiumFruits.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
