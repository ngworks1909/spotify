import React from 'react'
import Navbar from './Navbar'
import Top from './Top'
import '../css/Home.css'
import Bottom from './Bottom'
import Body from './Body'


export default function Home() {
  
  return (
    <>
        <div className="home" id='home'>
              <Top/>
            <div className="sub-home display-flex">
              <Navbar/>
              <Body/>
            </div>
            <Bottom/>
        </div>
      
    </>
  )
}
