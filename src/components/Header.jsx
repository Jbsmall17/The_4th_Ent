import React, {useState, useEffect, useRef} from 'react'
import Logo from "../assets/61.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark,faHouse, faScrewdriverWrench, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import "../styles/header.css"
import { HiBars3BottomLeft } from "react-icons/hi2"


export default function Header() {
    const [isMobileOpen, setMobileOpen] = useState(false);
    const [isScreenBig, setScreenBig] = useState(true)
    const headerRef = useRef()
    const headerMobileRef = useRef()
    const lineRef = useRef()
    const lineRef2 = useRef()
    useEffect(()=>{
        var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

        // Get the height of the scrollable content.
        var contentHeight = document.documentElement.scrollHeight;
        console.log(contentHeight)
        // Calculate the ratio of the viewport height to the content height.
        var ratio = viewportHeight / contentHeight;

        // Estimate the thumb height by multiplying the viewport height by the ratio.
        var estimatedThumbHeight = viewportHeight * ratio;

        console.log("Estimated Thumb Height: " + estimatedThumbHeight + " pixels");

        const scrollAvailableArea = window.innerHeight - estimatedThumbHeight + 200        
        window.addEventListener("scroll",()=>{
            // console.log(window.scrollY, contentHeight, estimatedThumbHeight, window.innerHeight)
            if( window.innerWidth >= 768){
                setScreenBig(true)
                if(window.scrollY > 0){
                    headerRef.current.classList.add("scrolled")
                    const percentScrolled = (window.scrollY / scrollAvailableArea) * 100 
                    lineRef.current.style.width= `${percentScrolled}%`
                }
                else{
                    headerRef.current.classList.remove("scrolled")
                    lineRef.current.style.width = "0%"
                }
            }
            else{
                setScreenBig(false)
                if(window.scrollY > 0){
                    headerMobileRef.current.classList.add("scrolled")
                    const percentScrolled = (window.scrollY / scrollAvailableArea) * 100 
                    lineRef2.current.style.width= `${percentScrolled}%`
                }
                else{
                    headerMobileRef.current.classList.remove("scrolled")
                    lineRef2.current.style.width = "0%"
                }
            }
        })
    },[])
  return (
    <>
    <header className='header' ref={headerRef}>
        <div className='line' ref={lineRef}></div>
        <img src={Logo} className='logo' alt='4th entertainment website' />
      <nav className='navbar-desktop'>
        <ul className='navbar-list'>
            <li>
                <FontAwesomeIcon icon={faHouse} size="xl" style={{color: "#ffffff",}} />
                <span className='hover-text'>Home</span>
            </li>
            <li>
                <FontAwesomeIcon icon={faScrewdriverWrench} size="xl" style={{color: "#ffffff",}} />
                <span className='hover-text' >Services</span>
            </li>
            <li>
                <FontAwesomeIcon icon={faBriefcase} size="xl" style={{color: "#ffffff",}} />
                <span className='hover-text' >Meet The Execs</span>
            </li>
        </ul>
      </nav>
        <button>
            <p>Playlist</p>
        </button>
    </header>
    <header className='mobile-header' ref={headerMobileRef} >
        <div className='line' ref={lineRef2}></div>
        <div className='mobile-header-container' >
            <HiBars3BottomLeft onClick={()=>{setMobileOpen(true)}} color='ffa500' size="3.5em"/>
            <img src={Logo} className='mobile-logo' alt='The 4th Ent logo' />
        </div>
        <div className={ isMobileOpen ? 'mobile-navbar open' : 'mobile-navbar'}>
            <div className='mobile-navbar-links'>
                <FontAwesomeIcon icon={faHouse} size="2xl" style={{color: "#000000"}} />
                <span>Home</span>
            </div>
            <div className='mobile-navbar-links'>
                <FontAwesomeIcon icon={faScrewdriverWrench} size="2xl" style={{color: "#ffffff"}} />
                <span>Services</span>
            </div>
            <div className={'mobile-navbar-links' }>
                <FontAwesomeIcon icon={faBriefcase} size="2lx" style={{color: "#ffffff"}} />
                <span>Meet The Exes</span>
            </div>
            <div className='mobile-navbar-links'>
                <div>
                    Playlist
                </div>
            </div>
            <div className='mobile-navbar-links'>
                <FontAwesomeIcon  onClick={()=>{setMobileOpen(false)}} icon={faCircleXmark} size="2lx" style={{color: "#e00f0f"}}  />
            </div>
        </div>
    </header>
    
    </>
  )
}
