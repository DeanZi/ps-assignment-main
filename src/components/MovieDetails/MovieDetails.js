import React from 'react';
import episodeIdToImage from '@/utils/episodeIdToImage';
import { FaStar } from 'react-icons/fa'; // Import star icon
import '@/App.css'; 

function MovieDetails({ movie, onFavoriteToggle, favorites }) {
    if (!movie) return null;
  
    const imageFileName = episodeIdToImage[movie.episode_id];
    const imagePath = require(`../../images/${imageFileName}`);

    return (
      <div className="movie-details">
        <div className="movie-image-container">
          <img src={imagePath} alt={movie.title} className="expanded-image" />
          <div className="movie-title">
            {movie.title.split(" ").map((word, index) => (
              <div key={index}>{word}</div>
            ))}
          </div>
          <div className="favorite-mark">
            <FaStar color={favorites.some(fav => fav.episode_id === movie.episode_id) ? "yellow" : "transparent"} onClick={() => onFavoriteToggle(movie)} />
          </div>
        </div>
      </div>
    );
}

export default MovieDetails;
