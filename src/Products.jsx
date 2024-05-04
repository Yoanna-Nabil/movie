import React, { useContext, useEffect, useState } from 'react'
import axiosInstance from './AxiosInstance';
import Cart from './Cart';

export default function Products() {

const [getMovies, setGetMovies]= useState([]);

function getmovies(){
 axiosInstance.get("/popular")
 .then( (res)=> {
  console.log(res.data.results)
  setGetMovies(res.data.results)
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
      {getMovies.map((movie) => {
        return <Cart movie={movie} key={movie.id}/>
      })}
    </div>
  )
}
