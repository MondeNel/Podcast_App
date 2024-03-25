import React, { useState, useEffect, useRef } from 'react';
import styles from './Search.module.css';
import Fuse from 'fuse.js';
import Dialog from '@mui/material/Dialog';
import { DialogContent, Select, MenuItem } from '@mui/material';
import { PlayCircleOutline } from '@mui/icons-material';

const API_URL = 'https://podcast-api.netlify.app/shows';

const Search = () => {
    const [input, setInput] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [selectedShow, setSelectedShow] = useState(null);
    const [fuse, setFuse] = useState(null);
    const searchRef = useRef(null);

    useEffect(() => {
        const fetchAndSetFuseData = async () => {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setFuse(new Fuse(data, { keys: ['title'], includeScore: true }));
        };

        fetchAndSetFuseData();
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowResults(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const fetchData = (value) => {
        if (!fuse) return;
        const result = fuse.search(value);
        const filteredShows = result.map((show) => show.item);
        setFilteredData(filteredShows);
        setShowResults(true); // Show results when data is fetched
    };

    const handleChange = (value) => {
        setInput(value);

        if (value.trim() !== '') {
            fetchData(value);
        } else {
            setFilteredData([]);
            setShowResults(false); // Hide results when input is empty
        }
    };

    const handleShowClick = (show) => {
        setSelectedShow(show);
        setShowResults(false); // Hide results when show is clicked
    };

    const handleCloseDialog = () => {
        setSelectedShow(null);
    };

    const ShowDialog = ({ showId, onClose }) => {
        const [show, setShow] = useState(null);
        const [selectedSeason, setSelectedSeason] = useState(null);

        useEffect(() => {
            fetch(`https://podcast-api.netlify.app/id/${showId}`)
                .then(response => response.json())
                .then(data => {
                    setShow(data);
                    setSelectedSeason(data.seasons[0]);
                })
                .catch(error => console.error('Error fetching show data:', error));
        }, [showId]);

        const handleSeasonChange = (event) => {
            setSelectedSeason(event.target.value);
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
                                                <PlayCircleOutline style={{ color: 'red' }} />
                                                <span className={styles.episodeTitle}>{episode.title}</span>
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
    };

    return (
        <div className={styles.input__wrapper} ref={searchRef}>
            <input
                type="text"
                className={styles.input}
                placeholder="Type to search..."
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
            {showResults && (
                <div className={styles.result__box}>
                    {filteredData.map((show) => (
                        <div key={show.id} className={styles.dropdown__item} onClick={() => handleShowClick(show)}>
                            {show.title}
                        </div>
                    ))}
                </div>
            )}
            {selectedShow && (
                <ShowDialog showId={selectedShow.id} onClose={handleCloseDialog} />
            )}
        </div>
    );
};

export default Search;
