import { Routes, Route } from "react-router-dom"
import { useState, lazy, Suspense, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faXmark } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import { Oval } from  'react-loader-spinner'
import { postSubscriber } from "./backend/server"
import toast, { Toaster } from 'react-hot-toast';



const Home = lazy(()=> import("./pages/Home"))
const Artiste = lazy(()=> import("./pages/Artiste"))
const MeetTheExecs = lazy(()=> import("./pages/MeetTheExecs"))
const Blog = lazy(()=> import("./pages/Blog"))

const emailRegexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function App() {
  const [count, setCount] = useState(0)
  const [modal, setModal] = useState(false)
  const [isLoading,setIsLoading] = useState(false)
  const [email, setEmail] = useState('')


  async function postEmail(e){
    e.preventDefault()
    setIsLoading(true)
    const validEmail = emailRegexPattern.test(email)
    if(!validEmail) return
    const response = await postSubscriber(email)
    if(response.message == "Record created successfully"){
      setIsLoading(false)
      toast.success('Successfully subscribed!');
    }
    else if(response.message == "Email Already Exist"){
      toast.error('Email Already Exist!');
      setIsLoading(false)
    }
    else{
      toast.error('This is an error!');
      setIsLoading(false)
    }
    setEmail("")
  }

  useEffect(()=>{
    setTimeout(()=>{
      setModal(true)
    },5000)
  },[])
  return (
    <>
      { modal &&
      <div className="modal-container">
        <div className="modal">
          <FontAwesomeIcon icon={faEnvelope} size="3x" beatFade style={{color : "#008080"}} />
          <p>Signup to Our Newsletter</p>
          <p>be part of a community of Music Enthusiast</p>
          <form onSubmit={postEmail}>
            <input 
              type="text" 
              placeholder="email" 
              value={email}
              name="email"
              onChange={(e)=>{setEmail(e.target.value)}}
              required
              />
            <button type="submit">{
            !isLoading
            ? "Join"
            : (
              <Oval
                height={25}
                width={25}
                color="#fff"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            )
            }
            </button>
          </form>
          <FontAwesomeIcon 
            icon={faXmark} size="lg" 
            style={{color : "#008080"}}className="svg-cancel"
            onClick={()=> setModal(false)}  
          />
        </div>
      </div>
      }
      <Routes >
        <Route 
          index
          element={
            <Suspense fallback={<div>Loading....</div>}>
              <Home />
            </Suspense>
          }
        />

      <Route 
        path="/artiste"
        element={
          <Suspense fallback={<div>Loading....</div>}>
            <Artiste />
          </Suspense>
          }
        />

      <Route 
        path="/execs"
        element={
          <Suspense fallback={<div>Loading....</div>}>
            <MeetTheExecs />
          </Suspense>
          }
        />
      </Routes>

      <Routes>
        <Route 
          path="/blog"
          element={
            <Suspense fallback={<div>Loading....</div>}>
              <Blog />
            </Suspense>
            }
        />
      </Routes>
    </>
  )
}

export default App
