import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './CarouselCard.module.css';
import FavoriteIcon from '@mui/icons-material/Favorite';

const showsData = [
  {
    id: "10716",
    title: "Something Was Wrong",
    seasons: 14,
    image: "https://content.production.cdn.art19.com/images/cc/e5/0a/08/cce50a08-d77d-490e-8c68-17725541b0ca/9dcebd4019d57b9551799479fa226e2a79026be5e2743c7aef19eac53532a29d66954da6e8dbdda8219b059a59c0abe6dba6049892b10dfb2f25ed90d6fe8d9a.jpeg",
    updated: "2022-11-03T07:00:00.000Z"
  },
  {
    id: "5675",
    title: "This Is Actually Happening",
    seasons: 12,
    image: "https://content.production.cdn.art19.com/images/5a/4f/d4/19/5a4fd419-11af-4270-b31c-2c7ed2f563a5/bc913bc926be23d04c9a4d29a829269a753be3d2612dad91f7e92ba4618fefc5c8802af29a1d32b3261eb03f83613e2535e3c574469b0cb510c32cd8d94cfaa1.png",
    updated: "2022-11-01T10:00:00.000Z"
  },
  {
    id: "5279",
    title: "American History Tellers",
    seasons: 51,
    image: "https://content.production.cdn.art19.com/images/a4/8f/53/79/a48f5379-a90e-4197-915c-c0645e0d9336/8d9e6ebc4d65a9575fa626318e426fcf8be7f98ea0c1b7b103de2b32def46ded57537627d80b36f55edf7c9a8ad639bd9816f68c79b56845203a0b5bc4a63a55.png",
    updated: "2022-11-02T07:01:00.000Z"
  },
  {
    id: "10539",
    title: "Scamfluencers",
    seasons: 3,
    image: "https://content.production.cdn.art19.com/images/19/f4/f9/af/19f4f9af-4a18-44e1-a622-726f43feb79d/539a50f79529628dbde7aa116778056619b802bfa0247cb739db907085e0b595a5521efc78faa831ebddc235d69beb27e1e36fd51f825bc888f0c11cccbd9cd8.png",
    updated: "2022-10-24T07:01:00.000Z"
  },
  {
    id: "9177",
    title: "Killer Psyche",
    seasons: 2,
    image: "https://content.production.cdn.art19.com/images/68/4e/03/af/684e03af-29c5-4a35-b84a-d929f114caee/4f60eec3fabd62251d0cdbd1af11b79c43fb1465dbc5ec3371328fbddadee597e9f115c31b079e20266648ee07a80a93c01cecdb81ab3545d872393997594ef3.png",
    updated: "2022-11-01T07:03:00.000Z"
  },
  {
    id: "6807",
    title: "Even the Rich",
    seasons: 33,
    image: "https://content.production.cdn.art19.com/images/c3/55/d2/da/c355d2da-f845-47df-a4e6-22b70a5082bb/c290fe89d3a699dd5c316f5f4cfe2ca942183cef5d6ac4fc2d7d6df296690c9e7183f79422dcb0b37af7c7e7e59de0e36cddd3b01500bf066a470614c9a0af6d.png",
    updated: "2022-11-01T07:08:00.000Z"
  }
];

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

  const [iconColor, setIconColor] = useState('grey');

  const handleIconClick = () => {
    setIconColor(iconColor === 'grey' ? 'red' : 'grey');
  };

  return (
    <>
      <h2 className={styles.heading}>Trending Shows...</h2>
      <div className={styles.carousel_container}>
      <Slider {...settings}>
        {showsData.map((show) => (
          <div className={styles.card} key={show.id}>
            <h3>{show.title}</h3>
            <img src={show.image} alt={show.title} className={styles.card_image} />
            <p>Seasons: {show.seasons}</p>
            <p>Last Updated: {new Date(show.updated).toLocaleDateString()}</p>
            <div className={styles.bottom}>
              <button className={styles.button}>View Details</button>
              <FavoriteIcon
                className={styles.icon}
                style={{ color: iconColor }}
                onClick={handleIconClick}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </>
    
  );
};

export default CarouselCard;
