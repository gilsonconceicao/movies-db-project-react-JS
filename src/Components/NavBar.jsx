import React from 'react'
import { NavLink, Link} from 'react-router-dom'; 
import {MdOutlineLocalMovies} from 'react-icons/md'
import './NavBar.css'; 

const NavBar = () => {
  return (
    <nav>
      <h2><Link to='/'><MdOutlineLocalMovies/></Link></h2>
        <ul>
          <NavLink to='/'>Movies</NavLink>
        </ul>
    </nav>
  )
}

export default NavBar