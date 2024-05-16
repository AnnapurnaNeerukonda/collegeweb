// pages/index.js

import React from 'react';
import Carousel from '../pages/cards;ider';

const Card = () => {
  const items = [
    {
      title: 'Item 1',
      description: 'Description for item 1',
      imageUrl: '/images/carousel.jpeg',
    },
    {
      title: 'Item 2',
      description: 'Description for item 2',
      imageUrl: '/images/item2.jpg',
    },
    // Add more items as needed
  ];

  return (
    <div>
      <h1>Card Carousel</h1>
      <Carousel items={items} />
    </div>
  );
};

export default Card;
