import React from 'react';
import episodeIdToImage from '@/utils/episodeIdToImage';
import { LuStar } from "react-icons/lu";
import '@/App.css'; 

function MovieDetails({ movie, onFavoriteToggle, favorites }) {
    if (!movie) return null;
  
    const imageFileName = episodeIdToImage[movie.episode_id];
    const imagePath = require(`../../images/${imageFileName}`);

    return (
      <div className="movie-details">
        <div className="movie-image-container">
          <img src={imagePath} alt={movie.title} className="expanded-image" />
          <div className="movie-title" style={{ lineHeight: '0.9' }}>
            {movie.title.split(" ").map((word, index) => (
              <div key={index}>{word}</div>
            ))}
          </div>
          <div className="favorite-mark">
            <LuStar color="white" size={20} fill={favorites.some(fav => fav.episode_id === movie.episode_id) ? "yellow" : "transparent"} 
            onClick={() => onFavoriteToggle(movie)} style={{ transform: 'rotate(15deg)' }} />
          </div>
        </div>
      </div>
    );
}

export default MovieDetails;
