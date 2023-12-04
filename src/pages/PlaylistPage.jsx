import React, { useEffect, useState } from 'react'
import "../styles/playlistpage.css"
import { fetchPlaylist } from '../backend/server'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Keyboard, EffectFade } from 'swiper/modules';
import { MdOutlineArrowBackIos } from "react-icons/md";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { RotatingLines  } from  'react-loader-spinner'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/effect-fade';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function PlaylistPage({setVisible}) {
  const [playlist, setPlaylist] = useState([])
  const [headliner, setHeadliner] = useState("")
  const [imageVisible, setImageVisible] = useState(false)
  async function getPlaylist(){
    const response = await fetchPlaylist()
    if(response.status === 200){
      setPlaylist(response.data)
      setImageVisible(true)
    }else{
      setPlaylist([])
    }
  }

  function goBack() {
    window.history.back()
  }

  useEffect(()=>{
    setVisible(true)
    getPlaylist()
    AOS.init()
  },[])

  return (
    <div className='playlistpage'>
        <MdOutlineArrowBackIos  onClick={goBack}/>
        <div className='playlistpage-container' data-aos="zoom-in" data-aos-duration="2000" >
          {/* <div>
             <img src={playlist[0]?.headliner} height="400" alt='playlist graphics'/>
          </div> */} 
           <Swiper
            modules={[Autoplay,EffectFade,Keyboard]}
            spaceBetween={50}
            slidesPerView={1}
            effect={'fade'}
            keyboard
            autoplay={
              {
              delay : 3000,
              pauseOnMouseEnter : true
            }
            }
            >
              <SwiperSlide>
                {
                  imageVisible
                  ?
                  <img src={playlist[0]?.headliner} height="400" alt='playlist graphics'/>
                  : <RotatingLines
                      strokeColor="grey"
                      strokeWidth="5"
                      animationDuration="0.75"
                      width="96"
                      visible={true}
                    />
                }
              </SwiperSlide>
              <SwiperSlide>
                {/* <LazyLoadImage
                  alt={'playlist graphics'}
                  height={"400"}
                  src={playlist[0]?.playlist} // use normal <img> attributes as props 
                /> */}
                 {
                  imageVisible
                  ?
                  <img src={playlist[0]?.playlist} height="400" alt='playlist graphics'/>
                  : <RotatingLines
                      strokeColor="grey"
                      strokeWidth="5"
                      animationDuration="0.75"
                      width="96"
                      visible={true}
                    />
                }
                {/* <img src={playlist[0]?.playlist} height="400" alt='playlist graphics'/> */}
              </SwiperSlide>
            </Swiper>
          <div>
            <p>THE 4TH NMF PLAYLIST</p>
            <ul>
              <li><span>Danny Brace, Runtown & Dj consequence</span><span>On my way</span></li>
              <li><span>DanDizzy</span><span>Igbo</span></li>
              <li><span>Tyla</span><span>Butterflies</span></li>
              <li><span>Bad Boy Timz</span><span>Up Forever</span></li>
              <li><span>Ice Prince</span><span>woke</span></li>
              <li><span>santari</span><span>Pressure</span></li>
              <li><span>Ida banton</span><span>Gbadun</span></li>
              <li><span>Iyanya ft. Berri-Tyga</span><span>Outside</span></li>
              <li><span>Timiya ft. shaggy</span><span>Joko</span></li>
              <li><span>Konstance</span><span>For you</span></li>
              <li><span>Mr. vibez</span><span>radar</span></li>
              <li><span>ODUDUMODU BLVCK</span><span>Eziokwu(uncut)</span></li>
              <li><span>Pheelz</span><span>Pheelz Good - Tribe Tape</span></li>
              <li><span>Flavour</span><span>Africa Royalty Album</span></li>
              <li><span>Moelogo</span><span>Point of view</span></li>
              <li><span>wiz khalifa</span><span>Decision album</span></li>
              <li><span>Brymo</span><span>Macabre Album</span></li>
              <li><span>PaBrymo</span><span>City boy Duluxe</span></li>
            </ul>
          </div>
          <a href={playlist[0]?.url} className='playlist-cta'>
              listen
            </a>
        </div>
    </div>
  )
}
