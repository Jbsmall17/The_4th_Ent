import React, { useEffect,useRef } from 'react'
import "../styles/home.css"
import Services from "../components/Services"
import Footer from '../components/Footer'
import Header from "../components/Header"
import Testimonials from "../components/Testimonials.jsx"
import picture1 from "../assets/picture1.jpeg"
import picture2 from "../assets/picture2.jpeg"
import picture3 from "../assets/picture3.jpeg"
import picture4 from "../assets/picture4.jpeg"
import picture5 from "../assets/picture5.jpeg"
import picture6 from "../assets/picture6.jpeg"
import picture7 from "../assets/picture7.jpeg"
import picture8 from "../assets/picture8.jpeg"
import picture9 from "../assets/picture9.jpeg"
import picture10 from "../assets/picture10.jpeg"
import picture11 from "../assets/picture11.jpeg"
import picture12 from "../assets/picture12.jpeg"
import picture13 from "../assets/picture13.jpeg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import {fetchEvent} from "../backend/server.js"
import { useNavigate } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';




export default function Home() {
  const navigate = useNavigate()
  const homeDiv = useRef()
  const the4thDiv = useRef()
  const servicesRef = useRef(null)

  function mouseMoveHandler(e){
    const homeDivNode = homeDiv.current;
    const the4thDivNode = the4thDiv.current
    const cursorX = e.clientX;
    const cursorY = e.clientY;

    const homeDivNodeLeft = homeDivNode.getBoundingClientRect().left
    const homeDivNodeTop = homeDivNode.getBoundingClientRect().top
    let NewcursorX 
    let NewCursorY 
    
    the4thDivNode.classList.add("appear")
      NewcursorX =  cursorX - homeDivNodeLeft
      NewCursorY = cursorY - homeDivNodeTop

    the4thDivNode.style.top = `${NewCursorY}px`;
    the4thDivNode.style.left = `${NewcursorX}px`;
  }

  function mouseLeaveHandler(){
    const the4thDivNode = the4thDiv.current
    the4thDivNode.classList.remove("appear")
  }

async function getEvent(){
  const response = await fetchEvent()
  console.log(response)
}

function handleClick(section){
  navigate("/")
  setTimeout(()=>{
      const servicesDiv = document.querySelector(section)
      servicesDiv.scrollIntoView({
       behavior: 'smooth',
       block: 'start',  // Align the top of the element with the top of the viewport
       inline: 'start',
      //  offsetTop : -navbarHeight
      })
  },50)
}
  useEffect(()=>{
    getEvent()
  },[])

  useEffect(()=>{
    const homeDivNode = homeDiv.current

    homeDivNode.addEventListener("mousemove", mouseMoveHandler)
    homeDivNode.addEventListener("mouseleave", mouseLeaveHandler)
    return ()=>{
      homeDivNode.removeEventListener("mousemove", mouseMoveHandler)
      homeDivNode.removeEventListener("mouseleave", mouseLeaveHandler)
    }
  },[])

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Header  activeLink={"home"}/>
      <div ref={homeDiv} className='homepage'>
        <p className='slogan' >THE MEDIA HUB</p>
        <p className='slogan1'>THE BEST AT WHAT WE DO</p>
        {/* <div onClick={()=>handleClick("#services")} className='theent' ref={the4thDiv} >
          <span>The</span><span>4th</span> <span>Ent.</span>
        </div> */}
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          autoplay={
            {
              delay: 3000,
  
            }
          }
        >
          <SwiperSlide>
            <img className='slide-img' alt='picture 1' src={picture1}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img className='slide-img' alt='picture 2' src={picture2}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img className='slide-img' alt='picture 3' src={picture3}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img className='slide-img' alt='picture 4' src={picture4}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img className='slide-img' alt='picture 5' src={picture5}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img className='slide-img' alt='picture 6' src={picture6}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img className='slide-img' alt='picture 7' src={picture7}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img className='slide-img' alt='picture 8' src={picture8}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img className='slide-img' alt='picture 9' src={picture9}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img className='slide-img' alt='picture 10' src={picture10}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img className='slide-img' alt='picture 11' src={picture11}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img className='slide-img' alt='picture 12' src={picture12}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img className='slide-img' alt='picture 13' src={picture13}></img>
          </SwiperSlide>
        </Swiper>
        <p className='title'>The 4th Entertainment</p>
      </div>
      <div className='home-services' id="services" ref={servicesRef}>
        <h3>WHAT WE DO!!</h3>
        <div className='services-container'>
          <Services 
            name={"Talent Management"}
            desc={"Eiusmod consequat ex sit commodo amet.Dolore qui dolor labore dolor minim quis do aliquip do adipisicing."}
          />
          <Services 
            name={"Music Business"}
            desc={"Eiusmod consequat ex sit commodo amet.Dolore qui dolor labore dolor minim quis do aliquip do adipisicing."}
          />
          <Services 
            name={"Creative Develoment"}
            desc={"Eiusmod consequat ex sit commodo amet.Dolore qui dolor labore dolor minim quis do aliquip do adipisicing."}
          />
          <Services 
            name={"Branding"}
            desc={"Eiusmod consequat ex sit commodo amet.Dolore qui dolor labore dolor minim quis do aliquip do adipisicing."}
          />
          <Services 
            name={"Music Distribution"}
            desc={"Eiusmod consequat ex sit commodo amet.Dolore qui dolor labore dolor minim quis do aliquip do adipisicing."}
          />
          <Services 
            name={"Events Management"}
            desc={"Eiusmod consequat ex sit commodo amet.Dolore qui dolor labore dolor minim quis do aliquip do adipisicing."}
          />
          <Services 
            name={"Playlisting"}
            desc={"Eiusmod consequat ex sit commodo amet.Dolore qui dolor labore dolor minim quis do aliquip do adipisicing."}
          />
          <Services 
            name={"Promotion"}
            desc={"Eiusmod consequat ex sit commodo amet.Dolore qui dolor labore dolor minim quis do aliquip do adipisicing."}
          />
        </div>
      </div>
      <div className='event-container' id='event'>
        <h3>Our Event</h3>
          <div className='event' data-aos="fade-left" data-aos-duration="2000">
            <div className='event-date'>11/05/23</div>
            <div className='event-main'>
              <p className='event-name'>Event</p>
              <p className='event-desc'>
                Magna officia sint deserunt quis exercitation cupidatat. 
                Quis nulla anim dolore sint cupidatat ipsum ullamco ad. 
                Proident fugiat deserunt ullamco ipsum culpa.
              </p>
              <a href='javascript:void(0)'>see more</a>
              <FontAwesomeIcon icon={faArrowRight} rotation={45} />
            </div>
          </div>
          <div className='event' data-aos="fade-right" data-aos-duration="2000">
            <div className='event-date'>11/05/23</div>
            <div className='event-main'>
              <p className='event-name'>Event</p>
              <p className='event-desc'>
                Magna officia sint deserunt quis exercitation cupidatat. 
                Quis nulla anim dolore sint cupidatat ipsum ullamco ad. 
                Proident fugiat deserunt ullamco ipsum culpa.
              </p>
              <a href='javascript:void(0)'>see more</a>
              <FontAwesomeIcon icon={faArrowRight} rotation={45} />
            </div>
          </div>
          <div className='event' data-aos="fade-left" data-aos-duration="2000">
            <div className='event-date'>11/05/23</div>
            <div className='event-main'>
              <p className='event-name'>Event</p>
              <p className='event-desc'>
                Magna officia sint deserunt quis exercitation cupidatat. 
                Quis nulla anim dolore sint cupidatat ipsum ullamco ad. 
                Proident fugiat deserunt ullamco ipsum culpa.
              </p>
              <a href='javascript:void(0)'>see more</a>
              <FontAwesomeIcon icon={faArrowRight} rotation={45} />
            </div>
          </div>
      </div>
      <Testimonials />
      <Footer />
    </>
  )
}
