import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import styles from './InfoMovie.module.css'

const InfoMovie = ({ page }) => {
  const { id } = useParams();
  const [getMovies, setGetMovieId] = useState({});
  const [genere, setGenere] = useState([]);
  const [getProduction, setGetProduction] = useState([]);
  const [error, setError] = useState(null);

  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=6faa5e90a21586090d2be6f3b012f543&language=en-US`

  const getDataMovies = async () => {
    try {
      useEffect(() => {

        const GetDataUrlSearch = async () => {

          const response = await fetch(url)
          const dataResponse = await response.json()

          setGetMovieId(dataResponse);
          /* Get data details for specific information */
          setGenere(dataResponse.genres.map(nameMovie => nameMovie.name));
          setGetProduction(dataResponse.production_companies.map(nameMovie => nameMovie.name));
        }
        GetDataUrlSearch();
      }, [])
    } catch (error) {
      console.log(error);
    }
  }
  getDataMovies();

  return (
    <div className={styles['container_about_movie']}>
      <div className={styles['box_info_movie_id']}>
        <img src={'https://image.tmdb.org/t/p/w500/' + getMovies.poster_path} alt={getMovies.title} />
        <div>
          <span className={styles['name_movie']} >
            <h3>{getMovies.title}</h3>
            <p>{getMovies.tagline}</p>
          </span>
          <span className={styles['descrition']}>
            Descrição
          </span>
          <p className='bio_movie'>{getMovies.overview}</p>
          <span className={styles['descrition']}>
            <a href={getMovies.homepage} target='_blank'>Link oficial sobre {getMovies.title}</a>
          </span>
          <div className={styles['info_flex']}>
            <div>
              <p>Duração {getMovies.runtime} min</p>
              <div className={styles['info_block']}>
                <p>Grupo de produção</p>
                <span>{getProduction[0]}</span>
                <span>{getProduction[1]}</span>
                <span>{getProduction[2]}</span>
              </div>
            </div>
            <div>
              <p>Lançamento {new Date(getMovies.release_date).toLocaleDateString('en-GB')}</p>
              <div className={styles['info_block']}>
                <p>Gêneros</p>
                <span>{genere[0]}</span>
                <span>{genere[1]}</span>
                <span>{genere[2]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoMovie