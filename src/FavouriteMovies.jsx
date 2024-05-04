import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

const FavouriteMovies = () => {
  const favorites = useSelector((state) => state.favorites.favorites);

  return (
    <div className='row'>
      <h2>Favorite Movies</h2>
      {favorites.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default FavouriteMovies;