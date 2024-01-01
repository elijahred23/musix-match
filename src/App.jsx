import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import ChartApp from './components/Chart/ChartApp'

function App() {
  
  useEffect(()=>{
  }, [])
  return ( 
    <>
      <div>
        <BrowserRouter>
          <div>
            <h1>Musix Match API</h1>
            <div className="nav-links">
              <NavLink to="/">Home</NavLink>
            </div>
            <div className="nav-links">
              <NavLink to="/chart">Chart</NavLink>
            </div>
          </div> 
          <Routes>
            <Route path="/chart" element={<ChartApp />} />
            <Route path="/" element={<div><h2>Home</h2></div>} />
          </Routes>
        </BrowserRouter> 
      </div>
    </>
  )
}

export default App
