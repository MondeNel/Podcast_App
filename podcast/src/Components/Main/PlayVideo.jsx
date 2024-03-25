import React, { useState } from 'react';


const PlayVideo = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    // Example episode data
    const episode = {
        episodeNumber: 1,
        file: 'https://example.com/episode1.mp3',
    };

    const handleClose = () => {
        setIsPlaying(false);
    };

    const handlePlay = () => {
        console.log('Audio is playing');
    };

    return (
        <div>
            <h1>Your Component</h1>
            <PlayVideo
                episode={episode}
                isPlaying={isPlaying}
                onClose={handleClose}
                onPlay={handlePlay}
            />
        </div>
    );
};

export default PlayVideo;
