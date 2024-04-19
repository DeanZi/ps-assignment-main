import React from 'react';
import episodeIdToImage from '@/utils/episodeIdToImage';
import '@/App.css'; 

const images = require.context('../../images', true);

function MovieItem({ movie, onMovieSelect, onImageClick }) {
  const imageFileName = episodeIdToImage[movie.episode_id];
  const imagePath = images(`./${imageFileName}`);

  return (
    <div key={movie.episode_id} className="movie-item">
      <img src={imagePath} alt={movie.title} onClick={() => {onMovieSelect(movie); onImageClick(movie)}} className="movie-item img"/>
      <div className="movie-title">
        {movie.title}
      </div>
    </div>
  );
}

export default MovieItem;
