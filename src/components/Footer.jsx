import React from 'react'
import logo from "../assets/61.png"
import { FaInstagram, FaFacebookF,FaSquareXTwitter,FaPinterestP,FaLinkedin, FaArrowRight} from "react-icons/fa6";
import "../styles/footer.css"

export default function Footer() {
  return (
    <footer className='footer'>
        <div className='footer-container'>
            <div className='footer-container-left'>
                <img className='logo' src={logo} alt='the fouth enternment logo at the footer' />
                <div className='socials-container'>
                    <FaInstagram size={"2em"}/>
                    <FaSquareXTwitter size={"2em"}/>
                    <FaFacebookF size={"2em"} />
                    <FaPinterestP size={"2em"} />
                    <FaLinkedin size={"2em"} />
                </div>
                <p className='coypright'><span>&copy;copyright</span><span>The 4TH ENT</span> </p>
            </div>
            <div className='footer-container-right'>
                <p>subscribe for The 4th Newletter</p>
                <form className='subscribe-form'>
                    <div>
                        {/* <label className='label'>Email Address</label> */}
                        <input type='text' />
                        <label className='label'>Email Address</label>
                        <p className='form-icon-container'>
                          <button type='submit'  className='subscribe'>sign up</button>
                          <FaArrowRight  className='arrow1'/>
                          <p className='form-icon-container2'>
                            <button type='submit'  className='subscribe2'>sign up</button>
                            <FaArrowRight  className='arrow2'/>
                          </p>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </footer>
  )
}
