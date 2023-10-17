import { Routes, Route } from "react-router-dom"
import { useState, lazy, Suspense } from 'react'
import './App.css'


const Home = lazy(()=> import("../src/pages/Home"))

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
      </Routes>
    </>
  )
}

export default App
