import React, { useEffect } from 'react'
import execs from "../assets/execs.jpeg"
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Execs({name,position}) {
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <div data-aos="zoom-in" data-aos-duration="2000"> 
      <div>
        <img src={execs} alt='pictures of Execs' />
      </div>
      <p>{name}</p>
      <p>{position}</p>
    </div>
  )
}
