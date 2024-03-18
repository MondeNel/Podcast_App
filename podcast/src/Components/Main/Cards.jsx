import React from 'react';
import styles from './Cards.module.css'; // Assuming you have a CSS module for styling

import { showsData } from '../Data'; // Assuming showsData is exported from '../Data'

function ShowCard({ show }) {
  return (
    <div className={styles.card}>
      <img src={show.image} alt={show.title} />
      <div className={styles.cardBody}>
        <h3>{show.title}</h3>
        <p>Seasons: {show.seasons}</p>
        <p>Episodes: {show.episodes}</p>
        <p>Last Updated: {new Date(show.updated).toLocaleDateString()}</p>
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
