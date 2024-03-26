import React, { useState, useEffect } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { DialogContent, Select, MenuItem } from '@mui/material';
import styles from './Cards.module.css';
import { showsData } from '../Data';


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

function ShowCard({ show, onShowDetails }) {
  const [iconColor, setIconColor] = useState('grey');
  const [openDialog, setOpenDialog] = useState(false);

  const handleIconClick = () => {
    setIconColor(iconColor === 'grey' ? 'red' : 'grey');
  };

  const handleShowDetails = () => {
    setOpenDialog(true);
    onShowDetails(show);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
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
          <Button onClick={handleShowDetails}>Show Details</Button>
        </div>
        {openDialog && (
          <ShowDialog showId={show.id} onClose={handleCloseDialog} />
        )}
      </div>
    </div>
  );
}

function ShowDialog({ showId, onClose }) {
  const [show, setShow] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch(`https://podcast-api.netlify.app/id/${showId}`)
      .then((response) => response.json())
      .then((data) => {
        setShow(data);
        setSelectedSeason(data.seasons[0]);
      })
      .catch((error) => console.error('Error fetching show data:', error));
  }, [showId]);

  const handleSeasonChange = (event) => {
    setSelectedSeason(event.target.value);
  };

  const toggleFavorite = (episode) => {
    const index = favorites.findIndex((fav) => fav.id === episode.id);
    if (index === -1) {
      setFavorites([...favorites, episode]);
    } else {
      const updatedFavorites = [...favorites];
      updatedFavorites.splice(index, 1);
      setFavorites(updatedFavorites);
    }
  };

  return (
    <Dialog open={true} onClose={onClose}>
      {show && (
        <>
          <div className={styles.dialogTitle}>{show.title}</div>
          <img src={show.image} alt={show.title} className={styles.showImage} />
          <DialogContent className={styles.dialogContent}>
            <div className={styles.description}>{show.description}</div>
            <div className={styles.seasons_title}>Seasons:</div>
            <Select value={selectedSeason} onChange={handleSeasonChange} className={styles.customSelect}>
              {show.seasons.map((season, index) => (
                <MenuItem key={index} value={season}>
                  Season {index + 1}: {season.episodes.length} episodes
                </MenuItem>
              ))}
            </Select>
            {selectedSeason && (
              <div className={styles.episodeList}>
                <ol>
                  {selectedSeason.episodes.map((episode, index) => (
                    <li key={index} className={styles.episodeItem}>
                      {episode.title}
                      <FavoriteIcon
                        className={styles.favoriteIcon}
                        style={{ color: favorites.some((fav) => fav.id === episode.id) ? 'red' : 'grey' }}
                        onClick={() => toggleFavorite(episode)}
                      />
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </DialogContent>
        </>
      )}
    </Dialog>
  );
}





function ShowList() {
  const [showAll, setShowAll] = useState(false);
  const totalShows = showsData.length;
  const initialLimit = 4;
  const remainingShows = totalShows - initialLimit;
  const showLimit = showAll ? totalShows : initialLimit;

  return (
    <div className={styles.container}>
    <div className={styles.cardList}>
      {showsData.slice(0, showLimit).map((show) => (
        <ShowCard key={show.id} show={show} onShowDetails={(show) => {}} />
      ))}
     
      {showAll && (
        showsData.slice(initialLimit).map((show) => (
          <ShowCard key={show.id} show={show} onShowDetails={(show) => {}} />
        ))
      )}
    </div>
  
    <div className={styles.showMoreContainer}>
      {!showAll && (
        <Button onClick={() => setShowAll(true)} className={styles.showMoreButton}>
          Show more ({remainingShows} remaining)
        </Button>
      )}
    </div>
  </div>
  
  );
}

const Cards = () => {
  const [selectedShow, setSelectedShow] = useState(null);

  const handleShowDetails = (show) => {
    setSelectedShow(show);
  };

  const handleCloseDialog = () => {
    setSelectedShow(null);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading_title}>Shows to Watch and Browse...</h1>
      <ShowList />
      {selectedShow && (
        <ShowDialog showId={selectedShow.id} onClose={handleCloseDialog} />
      )}
    </div>
  );
};

export default Cards;
