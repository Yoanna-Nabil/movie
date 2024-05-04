import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { addToFavorites, removeFromFavorites } from './MoviesSlice';

export default function Cart({movie}) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const isFavorite = favorites.some((favMovie) => favMovie.id === movie.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(movie.id));
    } else {
      dispatch(addToFavorites(movie));
    }
  };

  return (
    <div className='col-md-3  mt-5 position-relative'>
      <Link to={'/productDetails/'+ movie.id} className='movie'>
           <img src={'https://image.tmdb.org/t/p/w500'+ movie.poster_path} className='w-100'/>
           <h3>{movie.original_title}</h3>
           <p>{movie.overview.split(" ").slice(0,10).join(" ")}</p>
      </Link>

      {isFavorite ? (
        <span className=' position-absolute top-0 right-0' onClick={handleToggleFavorite}><i class="fa-solid fa-star fs-1 text-warning"></i></span>
      ) : (
        <span className=' position-absolute top-0 right-0' onClick={handleToggleFavorite}><i class="fa-regular fa-star fs-1 text-warning"></i></span>
      )}
    </div>
  )
}
