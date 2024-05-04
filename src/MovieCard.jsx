import React from 'react'

export default function MovieCard({movie}) {

  return (
    <div className='col-md-3'>
      <div className='movie mt-3'>
           <img src={'https://image.tmdb.org/t/p/w500'+ movie.poster_path} className='w-100'/>
           <h3>{movie.original_title}</h3>
           <p>{movie.overview?.split(" ").slice(0,10).join(" ")}</p>
      </div>
    </div>
  )
}
