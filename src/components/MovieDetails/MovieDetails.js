import React from 'react';
import episodeIdToImage from '@/utils/episodeIdToImage';
import '@/App.css'; 

function MovieDetails({ movie, onFavoriteToggle, favorites }) {
    if (!movie) return null;
  
    const imageFileName = episodeIdToImage[movie.episode_id];
    const imagePath = require(`../../images/${imageFileName}`);

    return (
      <div className="movie-details">
        <img src={imagePath} alt={movie.title} className="expanded-image" />
        <div className="favorite-mark" onClick={() => onFavoriteToggle(movie)}>
          <i className={favorites.some(fav => fav.episode_id === movie.episode_id) ? "fas fa-star" : "far fa-star"}></i>
        </div>
      </div>
    );
  }

export default MovieDetails;