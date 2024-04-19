import React from 'react';
import '@/App.css'; 

function MovieDetails({ movie, onFavoriteToggle, favorites, expandedImage, onCloseImage }) {
    if (!movie) return null;
  
    return (
      <div>
        <h2>{movie.title}</h2>
        <button onClick={() => onFavoriteToggle(movie)}>
          {favorites.some(fav => fav.episode_id === movie.episode_id) ? "Dislike" : "Like"}
        </button>
        <p><strong>Episode:</strong> {movie.episode_id}</p>
        {/* Conditional rendering for expanded image */}
        {expandedImage && (
          <div className="expanded-image-overlay" onClick={onCloseImage}>
            <img src={expandedImage} alt="Expanded Movie" className="expanded-image" />
          </div>
        )}
      </div>
    );
  }

export default MovieDetails;