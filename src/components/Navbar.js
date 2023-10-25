import React from 'react'
import '../css/Navbar.css'
import { Link } from 'react-router-dom'
import { AiFillHome,AiOutlinePlusSquare,AiFillHeart} from 'react-icons/ai'
import {FiSearch} from 'react-icons/fi';
import {BiLibrary,BiLogOut} from 'react-icons/bi';
import {SiSpotify} from 'react-icons/si';


export function getSideElement(){
  return document.getElementById("sidebar");
}

export default function Navbar() { 
  return (
    <>
      <nav className={`sidebar`} id="sidebar">
        <div className="image-text">
          <Link to='/' className='display-flex align-center decoration-none logo-items'>
           <span className="log-image">
            <SiSpotify className='logo-icon'/>
           </span>
          <span className="header-text">Spotify</span>
          </Link>
        </div>
        <div className="menu-bar">
           <div className="menu">
             <ul className="menu-links">
              <li className="nav-link display-flex align-center">
                 <Link to="/" className='nav-anchor'>
                  <AiFillHome className='link-icons'/>
                  <span className="nav-text">Home</span>
                 </Link>
              </li>
              <li className="nav-link display-flex align-center">
                 <Link to="/" className='nav-anchor'>
                  <FiSearch className='link-icons'/>
                  <span className="nav-text">Search</span>
                 </Link>
              </li>
              <li className="nav-link display-flex align-center">
                 <Link to="/" className='nav-anchor'>
                  <BiLibrary className='link-icons'/>
                  <span className="nav-text">Library</span>
                 </Link>
              </li>
              <li className="nav-link display-flex align-center">
                 <Link to="/" className='nav-anchor'>
                  <AiOutlinePlusSquare className='link-icons'/>
                  <span className="nav-text">Create Playlist</span>
                 </Link>
              </li>
              <li className="nav-link display-flex align-center">
                 <Link to="/" className='nav-anchor'>
                  <AiFillHeart className='link-icons heart'/>
                  <span className="nav-text">Liked Songs</span>
                 </Link>
              </li>
             </ul>
           </div>
           <div className="nav-bottom-content">
              <li className="nav-link display-flex align-center">
                 <Link to="/" className='nav-anchor'>
                  <BiLogOut className='link-icons'/>
                  <span className="nav-text">Logout</span>
                 </Link>
              </li>
           </div>
        </div>
      </nav>
    </>
  )
}
