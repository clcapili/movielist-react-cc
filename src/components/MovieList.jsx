import React, { useState } from 'react';
import data from "./../assets/data/data.json";
import MovieCard from './MovieCard';

export default function MovieList() {
  const [movieRating, setMovieRating] = useState(data);

  const handleRatingChange = (movieId, rating) => {
    // Find the movie with the given ID and update its rating
    setMovieRating(prevState =>
      prevState.map(movie => {
        if (movie.id === movieId) {
          return {
            ...movie,
            rating: [...movie.rating, rating],
          };
        }
        return movie;
      })
    );
  };

  const movieCards = movieRating.map((movie) => (
    <MovieCard 
      key={movie.id}
      movie={movie}
      selectedRating={movie.rating.length > 0 ? String(movie.rating[movie.rating.length - 1]) : null}
      onRatingChange={handleRatingChange}
    />
  ));

  return (
    <div className='container'>
      <div className='row'>
        <h1>Explore Movies</h1>
        <div className='col'>
          {/* display all movie cards */}
          <div className='movies'>{movieCards}</div>
        </div>
      </div>
    </div>
  );
}