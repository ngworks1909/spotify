import React,{useEffect} from 'react'
import '../css/Bottom.css'
import defaultsong from '../assets/tjarnheden.m4a'
import {RiShuffleFill,RiForward10Fill,RiReplay10Fill} from 'react-icons/ri'
import {FiRepeat} from 'react-icons/fi'

var playstatus=false;
var replay=false;
let currentSong = new Audio(defaultsong);
export  function playSong(song) {
  if (currentSong) {
    currentSong.pause();

  }
  const newSong = new Audio(song);
  
  playstatus=true;
  document.getElementById('toggle-play-pause').className="bottom-sppause-icon";
  newSong.play();
  currentSong = newSong;
}

export  function playCurrentSong(){
    playstatus=true;
    document.getElementById('toggle-play-pause').className="bottom-sppause-icon";
    currentSong.play();
}

export function pauseCurrentSong() {
  if (currentSong) {
    
    playstatus=false;
    document.getElementById('toggle-play-pause').className="bottom-spplay-icon";
    currentSong.pause();
  }
}

export function getPlayStatus() {
  return playstatus;
}

export function playForward(){
  if(!currentSong.paused && currentSong.duration-currentSong.currentTime>=10){
    currentSong.currentTime+=10;
  }
  else if(!currentSong.paused && currentSong.duration-currentSong.currentTime<10){
    currentSong.currentTime=currentSong.duration;
    
  }
}
export function setPlayTrue(){
  playstatus=true;
  document.getElementById('toggle-play-pause').className="bottom-sppause-icon";
}

export function playBackward(){
  if(!currentSong.paused && currentSong.currentTime>=10){
    currentSong.currentTime-=10;
  }
  else if(!currentSong.paused && currentSong.currentTime<10){
    currentSong.currentTime=0;
  }
}
currentSong.addEventListener('ended',()=>{
  if(replay){
    replay=false;
    document.getElementById('bottom-replay-button').style.color="white";
    replaySong();
  }
   else{
     playstatus=false;
   }
})

export function replaySong(){
  currentSong.currentTime=0;
  currentSong.play()
}







export default function Bottom() {
    



    const toggleStatus=()=>{
        if(getPlayStatus()){
          pauseCurrentSong();
        }
        else{
          playCurrentSong();
        }

    }

    useEffect(() => {
      const playpausebutton = document.getElementById('bottom-spplay-button');
  
      if (playpausebutton) {
        playpausebutton.addEventListener('click', toggleStatus);
        return () => {
          playpausebutton.removeEventListener('click', toggleStatus);
        };
      }
    }, []); 
   

  useEffect(() => {
    const forwardButton = document.getElementById('forwardButton');

    if (forwardButton) {
      forwardButton.addEventListener('click', playForward);
      return () => {
        forwardButton.removeEventListener('click', playForward);
      };
    }
  }, []); 

  useEffect(() => {
    const backwardButton = document.getElementById('backwardButton');

    if (backwardButton) {
      backwardButton.addEventListener('click', playBackward);
      return () => {
        backwardButton.removeEventListener('click', playBackward);
      };
    }
  }, []);

  const handleReplay=()=>{
    if(playstatus){
      replay=true;
    document.getElementById('bottom-replay-button').style.color="#1ed760";
    }
  }
  return (
    <>
    <div className="total-bottom">
      
      <div className="mid-bottom">
      
      <div className="sub-bottom">
          <button className='shuffle-song bottom-button'><RiShuffleFill className='shuffle-button bottom-icon'/></button>
          <button className='backward-play bottom-button' id='backwardButton'><RiReplay10Fill className='forward-play-button bottom-icon'/></button>
          <button className="bottom-spplay-button"id='bottom-spplay-button'>
              <div className={'bottom-spplay-icon'} id='toggle-play-pause'></div>
          </button>
          <button className='forward-play bottom-button' id='forwardButton'><RiForward10Fill className='forward-play-button bottom-icon'/></button>
      <button className='svg-replay-button bottom-button' onClick={handleReplay}><FiRepeat id='bottom-replay-button' className="bottom-replay-button bottom-icon" />
      </button>
      </div>
    
    </div>
    </div>
    
    
    
    </> 
   )
   
}



