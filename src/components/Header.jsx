import React, {useState, useEffect, useRef} from 'react'
import Logo from "../assets/61.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic,faNewspaper,faCircleXmark,faHouse, faScrewdriverWrench, faBriefcase,faXmark } from '@fortawesome/free-solid-svg-icons'
import "../styles/header.css"
import { HiBars3BottomLeft } from "react-icons/hi2"
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll';


export default function Header({activeLink}) {
    const [isMobileOpen, setMobileOpen] = useState(false);
    const [isScreenBig, setScreenBig] = useState(true);
    const [navbarHeight, setNavbarHeight] = useState(0);
    const [page, setPage] = useState(activeLink);
    const [cancel, setCancel] = useState(false)
    const headerRef = useRef()
    const headerMobileRef = useRef()
    const lineRef = useRef()
    const lineRef2 = useRef()
    const navigate = useNavigate()

    function homeClick(){
        setPage("home")
        navigate("/")
        setMobileOpen(false)
        window.scrollTo({ 
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }
    
    function artisteClick(){
        setPage("artiste")
        navigate("/artiste")
        window.scrollTo({ 
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }

    function execsClick(){
        setPage("execs")
        navigate("/execs")
        window.scrollTo({ 
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }

    function blogClick(){
        setPage("bloggg")
        navigate("/blog")
        window.scrollTo({ 
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }

    function handleClick(){
        navigate("/")
        setMobileOpen(false)
        setTimeout(()=>{
            const servicesDiv = document.querySelector("#services")
            servicesDiv.scrollIntoView({
             behavior: 'smooth',
             block: 'start',  // Align the top of the element with the top of the viewport
             inline: 'start',
             offsetTop : -navbarHeight
            })
        },50)
    }
    useEffect(()=>{
        const headerRefnode =  headerRef.current
        const navOffset = headerRefnode.getBoundingClientRect().height
        setNavbarHeight(navOffset)
        window.addEventListener("scroll",()=>{
            // console.log(window.scrollY, contentHeight, estimatedThumbHeight, window.innerHeight)
            if( window.innerWidth >= 768){
                setScreenBig(true)
                if(window.scrollY > 0){
                    headerRef.current.classList.add("scrolled")
                    lineRef.current.classList.add("motion")
                    lineRef2.current.classList.add("motion")
                }
                else{
                    headerRef.current.classList.remove("scrolled")
                    lineRef.current.classList.remove("motion")
                    lineRef2.current.classList.remove("motion")
                }
            }
            else{
                setScreenBig(false)
                if(window.scrollY > 0){
                    headerMobileRef.current.classList.add("scrolled")
                    lineRef.current.classList.add("motion")
                    lineRef2.current.classList.add("motion")
                }
                else{
                    headerMobileRef.current.classList.remove("scrolled")
                    lineRef.current.classList.remove("motion")
                    lineRef2.current.classList.remove("motion")
                }
            }
        })
    },[isScreenBig])
  return (
    <>
    <header className='header' ref={headerRef}>
        <div className='line' ref={lineRef}></div>
        <img onClick={homeClick} style={{cursor : "pointer"}} src={Logo} className='logo' alt='4th entertainment website' />
      <nav className='navbar-desktop'>
        <ul className='navbar-list'>
            <li onClick={homeClick} className={page === "home" ? "active" : null}>
                <FontAwesomeIcon icon={faHouse} size="xl" style={{color: page === "home"? "#ffa500" :"#ffffff"}} />
                <span className='hover-text'>Home</span>
            </li>
            <li onClick={artisteClick} className={page === "artiste" ? "active" : null} >
                <FontAwesomeIcon icon={faMusic} size="xl" style={{color: page === "artiste"? "#ffa500" :"#ffffff"}} />
                <span className='hover-text' >Artiste</span>
            </li>
            <li  onClick={handleClick}>
                {/* <Link
                    onClick={handleClick}
                    to="services" // Replace with the ID of the section you want to scroll to
                    spy={true}
                    smooth={true}
                    offset={-170} // Adjust this value if needed to control the scroll offset
                    duration={500}
                > */}
                    <FontAwesomeIcon icon={faScrewdriverWrench} size="xl" style={{color: "#ffffff",}} />
                    <span className='hover-text' >Services</span>
                {/* </Link> */}
            </li>
            <li onClick={execsClick} className={page === "execs" ? "active" : null}>
                <FontAwesomeIcon icon={faBriefcase} size="xl" style={{color: page === "execs"? "#ffa500" : "#ffffff"}} />
                <span className='hover-text' >Meet The Execs</span>
            </li>
            <li onClick={blogClick} className={page === "bloggg" ? "active" : null} >
                <FontAwesomeIcon icon={faNewspaper} size="xl" style={{ color: page === "bloggg"? "#ffa500" : "#ffffff"}} />
                <span className='hover-text' >Blog</span>
            </li>
        </ul>
      </nav>
        <button>
            <p>Playlist</p>
            <span className='hover-text'>playlist</span>
        </button>
        <div className='prompt' style={{display: cancel ? "none" : "block"}}>
            <div>
                <a href='javascript:void(0)'>listen to this week's playlist!</a>
                <a href='javascript:void(0)'>listen to this week's playlist!!</a>
                <a href='javascript:void(0)'>listen to this week's playlist!!!</a>
                <a href='javascript:void(0)'>listen to this week's playlist!!!!</a>
            </div>
            <FontAwesomeIcon 
                className='cancel' 
                size='xl' 
                icon={faXmark} style={{color: "#000000"}} 
                onClick={()=> setCancel(true)}      
            />
        </div>
    </header>
    <header className='mobile-header' ref={headerMobileRef} >
        <div className='line' ref={lineRef2}></div>
        <div className='mobile-header-container' >
            <HiBars3BottomLeft onClick={()=>{setMobileOpen(true)}} color='ffa500' size="3.5em"/>
            <img onClick={homeClick} style={{cursor: "pointer"}} src={Logo} className='mobile-logo' alt='The 4th Ent logo' />
        </div>
        <div className={ isMobileOpen ? 'mobile-navbar open' : 'mobile-navbar'}>
            <div onClick={homeClick} className='mobile-navbar-links'>
                <FontAwesomeIcon icon={faHouse} size="2xl" style={{color: "#000000"}} />
                <span>Home</span>
            </div>
            <div onClick={artisteClick} className={'mobile-navbar-links' }>
                <FontAwesomeIcon icon={faMusic} size="2lx" style={{color: "#fffff"}} />
                <span>Artistes</span>
            </div>
            <div  onClick={handleClick} className='mobile-navbar-links'>
                <FontAwesomeIcon icon={faScrewdriverWrench} size="2xl" style={{color: "#ffffff"}} />
                <span>Services</span>
            </div>
            <div onClick={execsClick} className={'mobile-navbar-links' }>
                <FontAwesomeIcon icon={faBriefcase} size="2lx" style={{color: "#000000"}} />
                <span>Meet The Exes</span>
            </div>
            <div onClick={blogClick} className={'mobile-navbar-links' }>
                <FontAwesomeIcon icon={faNewspaper} size="2lx" style={{color: "#000000"}} />
                <span>Blog</span>
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
        <div className='prompt' style={{display: cancel ? "none" : "block"}}>
            <div>
                <a href='javascript:void(0)'>listen to this week's playlist!</a>
                <a href='javascript:void(0)'>listen to this week's playlist!!</a>
            </div>
            <FontAwesomeIcon 
                className='cancel' 
                size='xl' 
                icon={faXmark} style={{color: "#000000"}} 
                onClick={()=> setCancel(true)}      
            />
        </div>
    </header>
    
    </>
  )
}
