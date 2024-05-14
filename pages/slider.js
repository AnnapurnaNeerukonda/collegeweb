import React from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Slider = () => {
  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
    >
      <SwiperSlide>
        <img src="https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/02/tree.jpg" alt="Image 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/02/tree.jpg" alt="Image 2" />
      </SwiperSlide>
      {/* Add more SwiperSlides with images as needed */}
    </Swiper>
  );
};

export default Slider;
