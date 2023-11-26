import React, {useEffect} from 'react'
import "../styles/playlist.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Playlist() {

    useEffect(() => {
        AOS.init();
    }, [])     
    
  return (
    <div className='playlist' data-aos="zoom-in-down"  data-aos-duration="2000">
        <div>
            <p>Give a listen to the playlist for this week</p>
            <button>Click Me</button>
        </div>
    </div>
  )
}
