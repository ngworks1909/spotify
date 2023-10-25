import React,{useState,useEffect} from 'react'
import '../css/Body.css'
import {FaRegClock} from 'react-icons/fa';
import sleep from '../assets/sleep.png'
import Song from './Song';

export function getBody(){
  return document.getElementById("body-element");
}
export default function Body() {
  const [days,setDays]=useState(0);
  useEffect(()=>{
    setInterval(() => {
      setDays(days+1);
    }, 1000*60*60*24);
  },[days]);
  const songItems=[
    {
      id : 1,
      songname : "Adele",
      artist : "Wun Two",
      album : "Adele"
    },
    {
      id : 2,
      songname : "Adrift",
      artist : "Oaty.",
      album : "Adrift"
    },
    {
      id : 3,
      songname : "All Equal",
      artist : "AK & Foadial",
      album : "All Equal"
    },
    {
      id : 4,
      songname : "Allegri",
      artist : "Thulacine",
      album : "Allegri"
    },
    {
      id : 5,
      songname : "Allena",
      artist : "M. Ljungström",
      album : "Nostalgia"
    },
    {
      id : 6,
      songname : "Apricity",
      artist : "Imala Zir",
      album : "Apricity"
    },
    {
      id : 7,
      songname : "Barracuda",
      artist : "Heart",
      album : "Little Queen"
    },
    {
      id : 8,
      songname : "beneath your feet",
      artist : "yoshi the brilliant",
      album : "beneath your feet"
    },
    {
      id : 9,
      songname : "Blur",
      artist : "Samuw",
      album : "Blur"
    },
    {
      id : 10,
      songname : "Caminos",
      artist : "Rio Nilo",
      album : "Caminos"
    },
    {
      id : 11,
      songname : "Cinnamon Haze",
      artist : "Oaty.",
      album : "Cinnamon Haze"
    },
    {
      id : 12,
      songname : "Cotton Spheres",
      artist : "Lama House",
      album : "Cumulus Motion"
    },
    {
      id : 13,
      songname : "Day One",
      artist : "Hans Zimmer",
      album : "Interstellar"
    },
    {
      id : 14,
      songname : "Dreamscapes",
      artist : "Agnes Lundh",
      album : "Dreamscapes"
    },
    {
      id : 15,
      songname : "efflorescence",
      artist : "Far & Beyond",
      album : "efflorescence"
    },
    {
      id : 16,
      songname : "Engraving",
      artist : "Codewav",
      album : "Engraving"
    },
    {
      id : 17,
      songname : "Fallen Angel",
      artist : "Wolfgang Laux",
      album : "Fallen Angel"
    },
    {
      id : 18,
      songname : "Fare Wells",
      artist : "Zapati_",
      album : "Fare Wells"
    },
    {
      id : 19,
      songname : "Find You Again",
      artist : "Teho",
      album : "Infinity"
    },
    {
      id : 20,
      songname : "Fire and Light",
      artist : "Actress",
      album : "Karma & Desire"
    },
    {
      id : 21,
      songname : "Forever",
      artist : "Fridayy, Lil Baby",
      album : "It's only me"
    },
    {
      id : 22,
      songname : "Free",
      artist : "Mike Oliver",
      album : "Free"
    },
    {
      id : 23,
      songname : "Freestyle",
      artist : "Lil Baby",
      album : "Too Hard"
    },
    {
      id : 24,
      songname : "From Home",
      artist : "Vivian Roost",
      album : "From Home"
    },
    {
      id : 25,
      songname : "Gather My Thoughts",
      artist : "Josef Briem",
      album : "Gather My Thoughts"
    },
    {
      id : 26,
      songname : "Go Down",
      artist : "Don Toliver",
      album : "Go Down"
    },
    {
      id : 27,
      songname : "Greatness",
      artist : "Quavo",
      album : "Greatness"
    },
    {
      id : 28,
      songname : "Hem Of Mooncast",
      artist : "Macan Moreira",
      album : "Hem Of Mooncast"
    },
    {
      id : 29,
      songname : "Himalayas",
      artist : "Chill Cole",
      album : "Himalayas"
    },
    {
      id : 30,
      songname : "Hope Even More",
      artist : "Wavy Naps",
      album : "Hope Even More"
    },
    {
      id : 31,
      songname : "Infinite Sustain",
      artist : "Amaranth Cove",
      album : "Infinite Sustain"
    },
    {
      id : 32,
      songname : "Irises",
      artist : "Jenna Zabrosky",
      album : "Irises"
    },
    {
      id : 33,
      songname : "Kant Nobody",
      artist : "Lil Wayne",
      album : "Kant Nobody"
    },
    {
      id : 34,
      songname : "Kungsholmen",
      artist : "Anders Linros",
      album : "Staden"
    },
    {
      id : 35,
      songname : "Lastly",
      artist : "Lydtakt",
      album : "Lastly"
    },
    {
      id : 36,
      songname : "Livin' On A Prayer",
      artist : "Bon Jovi",
      album : "Slippery When Wet"
    },
    {
      id : 37,
      songname : "Infinity",
      artist : "Jaymes Young",
      album : "Feel Something"
    },
    {
      id : 38,
      songname : "London Calling",
      artist : "Akasha",
      album : "London Calling"
    },
    {
      id : 39,
      songname : "lovely",
      artist : "Billie Eilish, Khalid",
      album : "Slippery When Wet"
    },
    {
      id : 40,
      songname : "Low Jump",
      artist : "GIDDE",
      album : "Low Jump"
    },
    {
      id : 41,
      songname : "Luma Beach",
      artist : "yoranda",
      album : "Luma Beach"
    },
    {
      id : 42,
      songname : "Luna",
      artist : "Ann Clue",
      album : "FCKNG SERIOUS"
    },
    {
      id : 43,
      songname : "Lyrides",
      artist : "Josef De Schutter",
      album : "Lyrides"
    },
    {
      id : 44,
      songname : "Matter",
      artist : "Lvta",
      album : "Matter"
    },
    {
      id : 45,
      songname : "melancoly",
      artist : "H I K E",
      album : "melancoly"
    },
    {
      id : 46,
      songname : "Memorial",
      artist : "Russian Circles",
      album : "Memorial"
    },
    {
      id : 47,
      songname : "moonlights",
      artist : "Oilix,Saiko",
      album : "moonlights"
    },
    {
      id : 48,
      songname : "Morning Dance",
      artist : "Amine Ayad",
      album : "Luma Beach"
    },
    {
      id : 49,
      songname : "My beloved",
      artist : "June Allen",
      album : "My beloved"
    },
    {
      id : 50,
      songname : "neomatter",
      artist : "O k O",
      album : "neomatter"
    },
    {
      id : 51,
      songname : "Night Changes",
      artist : "One Direction",
      album : "FOUR"
    },
    {
      id : 52,
      songname : "Oaks Bluffs",
      artist : "Elinuara",
      album : "Oaks Bluffs"
    },
    {
      id : 53,
      songname : "PAINTING PICTURES",
      artist : "Superstar Pride",
      album : "PAINTING PICTURES"
    },
    {
      id : 54,
      songname : "Paris",
      artist : "The Chainsmokers",
      album : "Paris"
    },
    {
      id : 55,
      songname : "Private Landing",
      artist : "Don Toliver",
      album : "Love Sick"
    },
    {
      id : 56,
      songname : "Quand vous souriez",
      artist : "Libor Kolman",
      album : "Quand vous souriez"
    },
    {
      id : 57,
      songname : "Reconciliation",
      artist : "Hazel Adams",
      album : "Reconciliation"
    },
    {
      id : 58,
      songname : "Return of the swans",
      artist : "Genevieve Melton",
      album : "Big blue"
    },
    {
      id : 59,
      songname : "Rich Flex",
      artist : "Drake, 21 Savage",
      album : "Her Loss"
    },
    {
      id : 60,
      songname : "Ritual",
      artist : "Dentist",
      album : "Ritual"
    },
    {
      id : 61,
      songname : "Riverlight",
      artist : "Garreth Broke",
      album : "Riverlight"
    },
    {
      id : 62,
      songname : "Saying Things",
      artist : "Emanuel Fremont",
      album : "Saying Things"
    },
    {
      id : 63,
      songname : "Second Chance",
      artist : "Saiko, Joe Sunrise",
      album : "Second Chance"
    },
    {
      id : 64,
      songname : "Shape Of You",
      artist : "Ed Sheeran",
      album : "Deluxe"
    },
    {
      id : 65,
      songname : "sky high",
      artist : "eaup",
      album : "sky high"
    },
    {
      id : 66,
      songname : "So Good",
      artist : "Deauxnuts, Nokiaa",
      album : "So Good"
    },
    {
      id : 67,
      songname : "Solace",
      artist : "Claire Lerdier",
      album : "Her Loss"
    },
    {
      id : 68,
      songname : "Solatium",
      artist : "Imber Sun",
      album : "Solatium"
    },
    {
      id : 69,
      songname : "Sorry",
      artist : "Justin Bieber",
      album : "Purpose"
    },
    {
      id : 70,
      songname : "Stay With Me",
      artist : "Sam Smith",
      album : "In The Lonely Hour"
    },
    {
      id : 71,
      songname : "Threads",
      artist : "This Will Destroy You",
      album : "S/T"
    },
    {
      id : 72,
      songname : "Through the Portal",
      artist : "iasilma",
      album : "Through The Portal"
    },
    {
      id : 73,
      songname : "Thunderstruck",
      artist : "AC/Dc",
      album : "The Razors Edge"
    },
    {
      id : 74,
      songname : "ting",
      artist : "_tag",
      album : "ting"
    },
    {
      id : 75,
      songname : "Tjarnheden",
      artist : "Farsjön",
      album : "Tjärnheden"
    },
    {
      id : 76,
      songname : "touring",
      artist : "ted traver",
      album : "touring"
    },
    {
      id : 77,
      songname : "Tronntora",
      artist : "Dagahra Voi",
      album : "Tronntora"
    },
    {
      id : 78,
      songname : "Trust",
      artist : "Ann Clue",
      album : "Trust"
    },
    {
      id : 79,
      songname : "Wake Me Up",
      artist : "Avicii",
      album : "True"
    },
    {
      id : 80,
      songname : "Warm Winds",
      artist : "Cake",
      album : "Warm Winds"
    },
    {
      id : 81,
      songname : "Way Too Petty",
      artist : "Ddg",
      album : "Way Too Petty"
    },
    {
      id : 82,
      songname : "We Found Love",
      artist : "Rihanna",
      album : "We Found Love"
    },
  ]
  return (
    <div className='body' id='body-element'>
       <div className="sub-main">
          <div className="top-main-container-block">
              <div className="main-top-block display-flex align-center">
                <div className="image-segment">
                   <input type="image" src={sleep} alt="image" className='main-play-top-image' />
                </div>
                <div className="main-content-block">
                  <p className='content-paragraph color-white reduce-size'>Playlist</p>
                  <h2 className='content-theme color-white reduce-size'>Sleep</h2>
                  <p className="content-title color-white reduce-size">Gentle Ambient piano to help you fall asleep.</p>
                  <p className='playlist-info color-white reduce-size'><span className='playlist-mid-info'>Spotify .0 likes .{songItems.length} songs, </span>about 14 hours</p>
                </div>
              </div>

          </div>
          <div className="main-song-items">
                 <div className="sub-song-container">
                   <div className="sub-song-title-1 display-flex align-center justify-center reduce-size"><h5 className='grid-para'>#</h5></div>
                   <div className="sub-song-title-2 display-flex align-center reduce-size"><p className="grid-para">TITLE</p></div>
                   <div className="sub-song-title-3 display-flex align-center justify-center display-none"><p className="grid-para">ALBUM</p></div>
                   <div className="sub-song-title-4 display-flex align-center justify-center reduce-size"><FaRegClock className='clock-image'/></div>
                 </div>
                 <span className="hrtag-main"></span>
                 <div className="songs-container display-flex">
                      {songItems.map((item) => (
                          <Song key={item.id} title={item.songname} imagename={require(`../assets/${item.songname}.png`)} songnumber={item.id} singer={item.artist} album={item.album} duration={`${days} days ago`}/>
                      ))}
                               
                     <div className="final-space">
                         <span className="hrtag-main main-bottom-hr"></span>
                     </div>
                </div>
          </div>
        </div>
    </div>
  )
}
