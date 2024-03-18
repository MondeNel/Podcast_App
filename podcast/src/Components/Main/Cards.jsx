import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import styles from './Cards.module.css'; 

import { showsData } from '../Data'; 

function ShowCard({ show }) {

    const [iconColor, setIconColor] = useState('grey');

  const handleIconClick = () => {
    setIconColor(iconColor === 'grey' ? 'red' : 'grey');
  };

    return (
      <div className={styles.card}>
        <img src={show.image} alt={show.title} />
        <div className={styles.cardBody}>
          <h3 className={styles.title}>{show.title}</h3>
          <p className={styles.seasons}>Seasons: {show.seasons}</p>
          <p className={styles.episodes}>Episodes: {show.episodes}</p>
          <p className={styles.date}>Last Updated: {new Date(show.updated).toLocaleDateString()}</p>
          <div className={styles.icons}>
            <PlayCircleOutlineIcon className={styles.playButton} />
            <FavoriteIcon
                className={styles.favoriteIcon}
                style={{ color: iconColor }}
                onClick={handleIconClick}
              />
          </div>
        </div>
      </div>
    );
  }
  

function ShowList() {
  return (
    <div className={styles.cardList}>
      {showsData.map((show) => (
        <ShowCard key={show.id} show={show} />
      ))}
    </div>
  );
}

const Cards = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading_title}>Shows to Listen and Browse...</h1>
      <ShowList />
    </div>
  );
};

export default Cards;
