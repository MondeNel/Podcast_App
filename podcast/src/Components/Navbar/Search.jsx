import React, { useState, useEffect, useRef } from 'react';
import styles from './Search.module.css';
import Fuse from 'fuse.js';

const API_URL = 'https://podcast-api.netlify.app/shows';

const Search = () => {
    const [input, setInput] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [showResults, setShowResults] = useState(false);
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
                        <div key={show.id} className={styles.dropdown__item} onClick={() => setInput(show.title)}>
                            {show.title}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;
