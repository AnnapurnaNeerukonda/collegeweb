import React from 'react';
import Slider from 'react-slick';
import { Card } from 'react-bootstrap';

const Carousel = ({ items }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000, // Speed in milliseconds
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, // Interval between slides in milliseconds
  };

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <div key={index}>
          <Card>
            <Card.Img variant="top" src={item.imageUrl} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
