import React from 'react';
import { playSong ,setPlayTrue} from './Bottom';
import '../css/Song.css'
import { Link } from 'react-router-dom'

export default function Song(props) {
  
  const handlePlay = (song) => {
    playSong(song);
    setPlayTrue();
  }
  return (
    <>
   
      <div  className="spot-playlist decoration-none"  onClick={() => handlePlay(require(`../songs/${props.title}.m4a`))} >
            <div className="select-song" id={`play-${props.songnumber}`}>
                <div id="button-number" className="button-number display-flex align-center justify-center"><button className='button-value color-white reduce-size'>{props.songnumber}</button></div>
                <div id="song-title" className="song-main-block display-flex align-center">
                    <img src={props.imagename} className='song-image-logo' alt="aria-block" />
                    <div className="song-block display-flex">
                       <Link to={`/`}  className='song-title decoration-none color-white reduce-size'>{props.title}</Link>
                       <Link to={`/`} className='song-singer decoration-none color-shaded reduce-size'>{props.singer}</Link>
                    </div>
                </div>
                <div id="date-block" className="playlist-items display-flex align-center justify-center reduce-size display-none"><p className='song-paragraph color-white'>{props.album}</p></div>
                <div id="final-paras" className="playlist-items display-flex align-center justify-center reduce-size"><p className='song-paragraph color-white'>{props.duration}</p></div>
            </div>
      </div>
    
    </>
  )
}
