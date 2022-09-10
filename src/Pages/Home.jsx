import React, { useEffect, useState } from 'react'; 
import InfoMovie from './InfoMovie';
import { Movies } from './Movies';

const Home = () => {
  //states
  const [movies, setMovies] = useState([]); 
  const [changePageMovie, setChangePageMovie] = useState(1); 
  //request api
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=6faa5e90a21586090d2be6f3b012f543&language=en-US&page=${changePageMovie}`; 

  //request      
  useEffect(() => {
    const getDataMovies = async () => {
        const response = await fetch(url)
        const dataResponse = await response.json()

        setMovies(dataResponse.results); 
    }
    getDataMovies()
  },[changePageMovie]);

  return (
    <>
      <Movies 
      dataMovies={movies} 
      changePage={changePageMovie}
      setChangePageMovie={setChangePageMovie} />
    </>
  )
}

export default Home