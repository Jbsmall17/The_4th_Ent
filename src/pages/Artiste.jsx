import React,{useRef, useEffect} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import artiste from "../assets/artiste.jpeg"
import "../styles/artiste.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Playlist from '../components/Playlist'

export default function Artiste() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='artistepage'>
        <Header activeLink={"artiste"} />
        <div className='artistepage-container'>
            <p>Our Artiste</p>
            <div className='container'>
              <div className='artiste-container'>
                <div>
                  <img alt='artiste picture' src={artiste} data-aos="flip-left" data-aos-duration="2000" />
                </div>
                <p className='artiste-name'>Emaxee</p>
                <a href='https://linktr.ee/emaxee' target='_blank'><p className='artiste-link'>Listen </p></a>
              </div>
            </div>
        </div>
        <Playlist />
        <Footer />
    </div>
  )
}
