import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function BlogPost({title,desc}) {
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <div data-aos="fade-up"  data-aos-duration="2000">
        <p>{title}</p>
        <p>{`${desc.substring(0,100)}...`}<a href='#'>Readmore</a></p>
    </div>
  )
}
