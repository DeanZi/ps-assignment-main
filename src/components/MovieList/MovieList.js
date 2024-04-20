import React, { useState, useEffect } from 'react';
import { fetchMovies } from '@/services/api';
import MovieItem from '@/components/MovieItem/MovieItem';
import Loading from '@/components/Loading/Loading';
import '@/App.css'; 


function MovieList({ onMovieSelect, onImageClick }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getMovies() {
      try {
        const data = await fetchMovies();
        // Sort the movies by episode_id
        const sortedMovies = data.sort((a, b) => a.episode_id - b.episode_id);
        setMovies(sortedMovies);
      } catch (error) {
        console.error("Failed fetching movies:", error);
      } finally {
        setIsLoading(false);
      }
    }

    getMovies();
  }, []);

  return (
    <div className="movie-list">
        {isLoading ? (
            <Loading message="Loading Movies..."/>
        ) : (
          movies.map(movie => (
            <MovieItem key={movie.episode_id} movie={movie} 
            onMovieSelect={onMovieSelect} onImageClick={onImageClick} 
            />
          ))
        )}
    </div>
);
}

export default MovieList;
