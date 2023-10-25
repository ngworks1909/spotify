import React from 'react'
import '../css/Top.css'
import {AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom';


export default function Top() {
  var menustatus=false;
  const handleMenu=()=>{
    if(!menustatus){
      document.getElementById('sidebar').style.left="0px";
      document.getElementById('nav-link-group').style.opacity="1";
    }
    else{
      document.getElementById('sidebar').style.left="-300px";
      document.getElementById('nav-link-group').style.opacity="0";
    }
    menustatus=!menustatus;
  }
  return (
    <>
       <div className="heading" id='top-head'>
          <div className="menu-block display-flex align-center justify-center">
            <button className='menu-button' id='menu-button' onClick={handleMenu} ><AiOutlineMenu className='top-menu-icon'/></button>
          </div>
          <div className="signup-login-buttons">
            <Link to="/signup" className='signup'>Signup</Link>
            <Link to="/login" className='login'>Login</Link> 
          </div>
       </div>
    
    </>
  )
}
