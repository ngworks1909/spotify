import React from 'react'
import '../css/Navbar.css'
import { Link } from 'react-router-dom'
import {FaSpotify} from 'react-icons/fa';
import { AiFillHeart, AiFillHome, AiOutlinePlusSquare } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { BiLibrary } from 'react-icons/bi';

export default function Navbar() {
  return (
   <>
      <div className="sidebar" id="sidebar">
          <div className="logo-block">
              <Link to={'/'} className='decoration-none display-flex align-center nav-logo'>
               <FaSpotify className='color-white logo-icon'/>
               <span className="logo-text color-white">Spotify</span>
               </Link> 
          </div>
          <div className="menu-items">
              <ul className="nav-link-group display-flex" id='nav-link-group'>
                 <li className="nav-item list-none">
                    <Link className="nav-anchor display-flex align-center decoration-none">
                        <AiFillHome className='nav-icon'/>
                        <span className="nav-text">Home</span>
                    </Link>
                 </li>
                 <li className="nav-item list-none">
                    <Link className="nav-anchor display-flex align-center decoration-none">
                        <FiSearch className='nav-icon'/>
                        <span className="nav-text">Search</span>
                    </Link>
                 </li>
                 <li className="nav-item list-none">
                    <Link className="nav-anchor display-flex align-center decoration-none">
                        <BiLibrary className='nav-icon'/>
                        <span className="nav-text">Library</span>
                    </Link>
                 </li>
                 <li className="nav-item list-none">
                    <Link className="nav-anchor display-flex align-center decoration-none">
                        <AiOutlinePlusSquare className='nav-icon'/>
                        <span className="nav-text">Create Playlist</span>
                    </Link>
                 </li>
                 <li className="nav-item list-none">
                    <Link className="nav-anchor display-flex align-center decoration-none">
                        <AiFillHeart className='nav-icon'/>
                        <span className="nav-text">Liked Songs</span>
                    </Link>
                 </li>
              </ul>
          </div>
      </div>
   </>
  )
}

