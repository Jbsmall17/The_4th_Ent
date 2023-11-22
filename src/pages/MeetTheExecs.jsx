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
                <Execs name={"Rafiq Olayinka Salis"} position={"Founder"}/>
                <Execs name={"Derek Okorosobo"} position={"Socialite"} />
                <Execs name={"Oyedeji Komolafe"} position={"C.E.O"} />
                <Execs name={"Yusuf Obituga Opeoluwa"} position={"C.E.O"} />
                <Execs name={"Dennis Ekundayo"} position={"C.E.O"} />
                <Execs name={"Ahmed Adebayo Adedamola"} position={"C.E.O"} />
            </div>
        </div>
        <Footer />
    </div>
  )
}
