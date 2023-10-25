import React,{useEffect,useState} from 'react'
import '../css/Top.css'
import {AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { getBody } from './Body';
import { getSideElement } from './Navbar';


export default function Top() {
  const [clickstatus,setClickStatus]=useState(true);
  useEffect(()=>{
    const sidebar=getSideElement();
    const body=getBody();
    const tophead=document.getElementById('top-head');
    const menubutton=document.getElementById('menu-button');
      menubutton.addEventListener('click',()=>{
        if(!clickstatus){
          sidebar.classList.remove('close');
          body.classList.remove('remove-body');
          tophead.classList.remove('remove-heading');
        }
        else{
          sidebar.classList.add('close');
          body.classList.add('remove-body');
          tophead.classList.add('remove-heading');
          
        }
        setClickStatus(!clickstatus);
      })
  },[clickstatus]);
  return (
    <>
       <div className="heading" id='top-head'>
          <div className="menu-block display-flex align-center justify-center">
            <button className='menu-button' id='menu-button' ><AiOutlineMenu className='top-menu-icon'/></button>
          </div>
          <div className="signup-login-buttons">
            <Link to="/signup" className='signup'>Signup</Link>
            <Link to="/login" className='login'>Login</Link> 
          </div>
       </div>
    
    </>
  )
}
