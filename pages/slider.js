import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
  return (
    <Carousel interval={2000} style={{ height: "500px" }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carousel.jpeg"
          alt="First slide"
          style={{ maxHeight: "500px", objectFit: "cover", width: "100%", height: "100%" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carousel1.jpeg"
          alt="Second slide"
          style={{ maxHeight: "500px", objectFit: "cover", width: "100%", height: "100%" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carousel3.webp"
          alt="Third slide"
          style={{ maxHeight: "500px", objectFit: "cover", width: "100%", height: "100%" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carousel4.webp"
          alt="Fourth slide"
          style={{ maxHeight: "500px", objectFit: "cover", width: "100%", height: "100%" }}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
