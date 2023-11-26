import React from 'react'
import Header from '../components/Header'
import Execs from '../components/Execs'
import Footer from '../components/Footer'
import "../styles/meettheexecs.css"
import Playlist from '../components/Playlist'


export default function MeetTheExecs() {
  return (
    <div className='meet-the-execs'>
        <Header activeLink={"execs"}/>
        <div className='meet-the-execs-container'>
            <p>Meet The Execs</p>
            <div className='execs-container'>
                <Execs name={"Rafiq Olayinka Salis"} position={"C.E.O, Head Of Talent Management"}/>
                <Execs name={"Derek Okorosobo"} position={"Head of Social Operations"} />
                <Execs name={"Oyedeji Komolafe"} position={"Head of Digitial Media and Operations"} />
                <Execs name={"Yusuf Obituga Opeoluwa"} position={"A&R, DJ and Executive Producer"} />
                <Execs name={"Dennis Ekundayo"} position={"COO, Head of A&R"} />
                <Execs name={"Ahmed Adebayo Adedamola"} position={"Creative Writer"} />
            </div>
        </div>
        <Playlist />
        <Footer />
    </div>
  )
}
