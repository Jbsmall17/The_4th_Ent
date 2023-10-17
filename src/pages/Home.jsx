import React from 'react'
import "../styles/home.css"
import Services from "../components/Services"
import Footer from '../components/Footer'
import Header from "../components/Header"

export default function Home() {
  return (
    <>
      <Header />
      <div className='homepage'>
        <span className='services'>Talent Management</span>
        <span className='services'>Music Business</span>
        <span className='services'>Creative Development</span>
        <span className='services'>Branding</span>
        <span className='services'>Music Distribution</span>
        <span className='services'>Event Management</span>
        <span className='services'>Playlisting</span>
        <span className='services'>Promotion</span>
        <p className='title'>The 4th Entertainment</p>
      </div>
      <div className='home-services'>
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
      <Footer />
    </>
  )
}
