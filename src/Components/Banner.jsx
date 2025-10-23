import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import coc from '../assets/coc.webp';
import cod from '../assets/cod.webp';
import pubg from '../assets/pubg.webp';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <>
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
                <SwiperSlide><img src={coc} className='w-full max-w-full h-auto max-h-[80vh]'/></SwiperSlide>
                <SwiperSlide><img src={cod} className='w-full max-w-full h-auto max-h-[80vh]'/></SwiperSlide>
                <SwiperSlide><img src={pubg} className='w-full max-w-full h-auto max-h-[80vh]'/></SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;