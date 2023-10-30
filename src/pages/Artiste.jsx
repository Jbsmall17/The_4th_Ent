import React,{useRef, useEffect} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import artiste from "../assets/artiste.jpeg"
import "../styles/artiste.css"

export default function Artiste() {
  return (
    <div className='artistepage'>
        <Header activeLink={"artiste"} />
        <div className='artistepage-container'>
            <p>Our Artiste</p>
            <div className='container'>
              <div className='artiste-container'>
                <div>
                  <img alt='artiste picture' src={artiste} />
                </div>
                <p className='artiste-name'>Emaxee</p>
                <a href='#'><p className='artiste-link'>Listen on Spotify</p></a>
              </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
