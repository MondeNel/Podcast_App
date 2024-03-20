import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Button from '@mui/material/Button';
import styles from './Cards.module.css'; 

import { showsData } from '../Data'; 

function ShowCard({ show }) {
  const [iconColor, setIconColor] = useState('grey');

  const handleIconClick = () => {
    setIconColor(iconColor === 'grey' ? 'red' : 'grey');
  };

  
  const genreMapping = {
    1: "Personal Growth",
    2: "True Crime and Investigative Journalism",
    3: "History",
    4: "Comedy",
    5: "Entertainment",
    6: "Business",
    7: "Fiction",
    8: "News",
    9: "Kids and Family"
};

  return (
    <div className={styles.card}>
      <img src={show.image} alt={show.title} />
      <div className={styles.cardBody}>
        <h3 className={styles.title}>{show.title}</h3>
        <p className={styles.seasons}>Seasons: {show.seasons}</p>
        <p className={styles.episodes}>Episodes: {show.episodes}</p>
        <p className={styles.date}>Last Updated: {new Date(show.updated).toLocaleDateString()}</p>
        <p className={styles.genres}>
                {show.genres.map((genreId) => {
                  const genreName = genreMapping[genreId];
                  return genreName.length > 10 ? genreName.slice(0, 10) + '...' : genreName;
                })}
              </p>
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
  const [showAll, setShowAll] = useState(false);
  const totalShows = showsData.length;
  const initialLimit = 4;
  const remainingShows = totalShows - initialLimit;
  const showLimit = showAll ? totalShows : initialLimit;

  return (
    <div className={styles.cardList}>
      {showsData.slice(0, showLimit).map((show) => (
        <ShowCard key={show.id} show={show} />
      ))}
      {!showAll && (
        <Button onClick={() => setShowAll(true)} className={styles.showMoreButton}>
          Show more ({remainingShows} remaining)
        </Button>
      )}
      {showAll && (
        showsData.slice(initialLimit).map((show) => (
          <ShowCard key={show.id} show={show} />
        ))
      )}
    </div>
  );
}



const Cards = () => {
  const [showAll, setShowAll] = useState(false);
  const totalShows = showsData.length;
  const initialLimit = 4;
  const remainingShows = totalShows - initialLimit;
  const showLimit = showAll ? totalShows : initialLimit;

  return (
    <div className={styles.container}>
      <h1 className={styles.heading_title}>Shows to Listen and Browse...</h1>
      <div className={styles.cardList}>
        {showsData.slice(0, showLimit).map((show) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
      {!showAll && (
        <Button onClick={() => setShowAll(true)} className={styles.showMoreButton}>
          Show more ({remainingShows} remaining)
        </Button>
      )}
    </div>
  );
};



export default Cards;
