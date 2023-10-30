import React from 'react'
import Header from '../components/Header'
import Execs from '../components/Execs'
import Footer from '../components/Footer'
import "../styles/meettheexecs.css"


export default function MeetTheExecs() {
  return (
    <div className='meet-the-execs'>
        <Header activeLink={"execs"}/>
        <div className='meet-the-execs-container'>
            <p>Meet The Execs</p>
            <div className='execs-container'>
                <Execs name={"Rofeeq Salis"} position={"C.E.O"}/>
                <Execs name={"Rofeeq Salis"} position={"C.E.O"} />
                <Execs name={"Rofeeq Salis"} position={"C.E.O"} />
                <Execs name={"Rofeeq Salis"} position={"C.E.O"} />
                <Execs name={"Rofeeq Salis"} position={"C.E.O"} />
                <Execs name={"Rofeeq Salis"} position={"C.E.O"} />
            </div>
        </div>
        <Footer />
    </div>
  )
}
