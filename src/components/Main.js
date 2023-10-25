import React from 'react'
import '../css/Main.css'
import Song from './Song'
import {FaRegClock} from 'react-icons/fa';
import sleep from '../assets/sleep.png'



export function getMain(){
  return document.getElementById("main");
}

export default function Main() {

  

 
  
  return (
    
    <> 
    <div className="main remove-main" id="main">
        <div className="sub-main">
          <div className="top-main-container-block">
          <div className="main-top-block display-flex align-center">
            <div className="image-segment">
              <input type="image" src={sleep} alt="image" className='main-play-top-image' />
            </div>
            <div className="main-content-block">
              <p className='content-paragraph color-white'>Playlist</p>
              <h2 className='content-theme color-white'>Sleep</h2>
              <p className="content-title color-white">Gentle Ambient piano to help you fall asleep.</p>
              <p className='playlist-info color-white'><span className='playlist-mid-info'>Spotify .0 likes .{songItems.length} songs, </span>about 14 hours</p>
            </div>
                
          </div>
          </div>
          <div className="main-song-items">
                 <div className="sub-song-container">
                   <div className="sub-song-title-1 display-flex align-center justify-center"><h5 className='grid-para'>#</h5></div>
                   <div className="sub-song-title-2 display-flex align-center"><p className="grid-para">TITLE</p></div>
                   <div className="sub-song-title-3 display-flex align-center justify-center"><p className="grid-para">ALBUM</p></div>
                   <div className="sub-song-title-4 display-flex align-center justify-center"><FaRegClock className='clock-image'/></div>
                 </div>
                 <span className="hrtag-main"></span>
                 <div className="songs-container display-flex">
                      {songItems.map((item) => (
                          <Song key={item.id} title={item.songname} imagename={require(`../assets/${item.songname}.png`)} songnumber={item.id} singer={item.artist} album={item.album} duration={'2:36'}/>
                      ))}
                               
                     <div className="final-space">
                         <span className="hrtag-main main-bottom-hr"></span>
                     </div>
                </div>
          </div>

        </div>

    </div>
      
    </>
  )
}
