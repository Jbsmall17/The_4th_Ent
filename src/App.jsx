import { Routes, Route } from "react-router-dom"
import { useState, lazy, Suspense, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faXmark } from '@fortawesome/free-solid-svg-icons'
import './App.css'


const Home = lazy(()=> import("./pages/Home"))
const Artiste = lazy(()=> import("./pages/Artiste"))
const MeetTheExecs = lazy(()=> import("./pages/MeetTheExecs"))
const Blog = lazy(()=> import("./pages/Blog"))

function App() {
  const [count, setCount] = useState(0)
  const [modal, setModal] = useState(false)
  
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
          <div>
            <input type="text" placeholder="email" />
            <button>Join</button>
          </div>
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
