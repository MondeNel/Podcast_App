import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './CarouselCard.module.css';

import image from '../../assets/faviconio-logo/image.jpg'; // Update the path to your image

const CarouselCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '20px',
        },
      },
    ],
  };

  // Array of placeholder text for cards
  const cardData = ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5'];

  return (
    <div className={styles.carousel_container}>
      <h2>Trending Shows...</h2>
      <Slider {...settings}>
        {cardData.map((text, index) => (
          <div className={styles.card} key={index}>
            <img src={image} alt={text} className={styles.card_image} />
            <h3>{text}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselCard;
