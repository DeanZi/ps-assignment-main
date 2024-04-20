import React, { useState, useEffect } from 'react';
import MovieList from '@/components/MovieList/MovieList';
import MovieDetails from '@/components/MovieDetails/MovieDetails';
import episodeIdToImage from '@/utils/episodeIdToImage';

function App() {
  const initialFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const [favorites, setFavorites] = useState(initialFavorites);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [expandedImage, setExpandedImage] = useState(null); 
  const images = require.context('./images', true);


  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [selectedMovie, favorites]);

  useEffect(() => {
    // Set default selection to Episode 1
    const defaultEpisode = { episode_id: 1, title: "The Phantom Menace" };
    setSelectedMovie(defaultEpisode);

    // Set default expanded image to Episode 1 image
    const imageFileName = episodeIdToImage[defaultEpisode.episode_id];
    const imagePath = images(`./${imageFileName}`);
    setExpandedImage(imagePath);
  }, [images]);

  const handleFavorite = (movie) => {
    if (favorites.some(fav => fav.episode_id === movie.episode_id)) {
      setFavorites(favorites.filter(fav => fav.episode_id !== movie.episode_id));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  function handleMovieSelect(movie) {
    setSelectedMovie(movie);
  }

  function handleImageClick(movie) {
    const imageFileName = episodeIdToImage[movie.episode_id];
    const imagePath = images(`./${imageFileName}`);
    setExpandedImage(imagePath);
  }

  function handleCloseImage() {
    setExpandedImage(null);
  }

  return (
    <div className="App">
      <div className="backdrop" style={{ backgroundImage: `url(${expandedImage})` }}></div>
      <MovieDetails movie={selectedMovie} favorites={favorites} onFavoriteToggle={handleFavorite} 
      expandedImage={expandedImage} onCloseImage={handleCloseImage}/>
      <MovieList onMovieSelect={handleMovieSelect} onImageClick={handleImageClick}/>
    </div>
  );

}

export default App;