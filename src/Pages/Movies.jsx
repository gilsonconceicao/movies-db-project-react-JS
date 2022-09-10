import React, { useEffect, useState } from 'react';
//icons
import { BiSearch } from 'react-icons/bi';
import {AiFillPlayCircle} from 'react-icons/ai'; 
//routers
import loadingGif from '../assets/gif/loading_request.gif'
import { Link } from 'react-router-dom';
import './Movies.css';

export const Movies = ({ dataMovies, changePage, setChangePageMovie }) => {
    const [getMovie, setGetMovie] = useState([]);
    const [searchUser, setSearchUser] = useState('');
    const [messageSearch, setMessageSearch] = useState('Buscar por um filme...'); 
    //state envent preve code
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(null); 

    const url = `https://api.themoviedb.org/3/search/movie?api_key=6faa5e90a21586090d2be6f3b012f543&query=${searchUser}`


    const handleGetMovieSearch = async (event) => {
        event.preventDefault();
        if (searchUser == 0) {
            setError('Erro, digite umm nome válido.'); 
            return 
        }
        try {
            setMessageSearch('')
            setLoading(true); 

            const response = await fetch(url); 

            const responseData = await response.json();

            setGetMovie(responseData.results);

            setError(''); 

            setLoading(false); 

        } catch (error) {
            setError('Error')
        }

        
    }

    console.log(getMovie)
    return (
        <div>
            <div className="header_of_page">
                <div>
                    <h1 id='changes_movies' className='title_theMovies'>Movies</h1>
                    {searchUser.length > 0 && (<p>Resultados: {getMovie.length}</p>)}
                    {loading && (<img className='messageLoading' src={loadingGif} alt='loading...'/>)}
                    {error}
                </div>
                
                <form onSubmit={handleGetMovieSearch} >
                    <input
                        type="text"
                        onChange={(e) => setSearchUser(e.target.value)}
                        placeholder='Buscar por um filme'
                    />
                    <button><BiSearch /></button>
                </form>
            </div>
            <>
                {
                    searchUser.length > 0 ? (
                        <div className='container_movies'>
                            {getMovie.map(movie => (
                                <div key={movie.id} className='movie_db'>
                                    <Link to={`/infomovie/${movie.id}`}>
                                        <img src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} alt="" />
                                        <article>
                                            <h3>{movie.title}</h3>
                                        </article>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className='container_movies'>
                            {dataMovies.map(movie => (
                                <div key={movie.id} className='movie_db'>
                                    <Link to={`/infomovie/${movie.id}`}>
                                        <img src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} alt="" />
                                        <article>
                                            <h3>{movie.title}</h3>
                                        </article>

                                    </Link>
                                </div>
                            ))}

                        </div>
                    )
                }
            </>
            {searchUser.length == 0 ? 
            <button onClick={() => setChangePageMovie(changePage + 1)} className='view_more_movies' >
                <a href="#changes_movies">
                    <span className='icon_more_view'><AiFillPlayCircle/></span> 
                    <span>VER MAIS</span>
                </a>
            </button> 
            : (
            <h2 className='messgaeSearch'>
                {messageSearch} 
            </h2>)}
        </div>
    )
}
