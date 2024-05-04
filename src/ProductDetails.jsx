import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axiosInstance from './AxiosInstance';

export default function ProductDetails() {
  const {id}= useParams();
  const [getMovies, setGetMovies]= useState([]);

function getmovies(){
 axiosInstance.get(`/${id}`)
 .then( (res)=> {
  console.log(res.data)
  setGetMovies(res.data)
 })
 .catch((err) => {
  console.log(err)
 })
}

useEffect( () => {
  getmovies()
}, [])

  return (
    <div className='row'>
      <div className='col-md-3'>
      <div className='movie mt-3'>
           <img src={'https://image.tmdb.org/t/p/w500'+ getMovies.poster_path} className='w-100'/>
           <h3>{getMovies.original_title}</h3>
           <p>{getMovies.overview?.split(" ").slice(0,10).join(" ")}</p>
      </div>
    </div>
    </div>
  )
}
