import { Routes, Route } from "react-router-dom"
import { useState, lazy, Suspense } from 'react'
import './App.css'


const Home = lazy(()=> import("./pages/Home"))
const Artiste = lazy(()=> import("./pages/Artiste"))
const MeetTheExecs = lazy(()=> import("./pages/MeetTheExecs"))
const Blog = lazy(()=> import("./pages/Blog"))

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
