import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const musicMatchURL = "http://localhost:3000"; 

function App() {
  const artistSearch = async (country,page, pageSize) => {
    try {
      const response = await fetch(`${musicMatchURL}/chartArtists?page=${page}&pageSize=${pageSize}&country=${country}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching artist search:", error);
    }
  };
  
  useEffect(()=>{
    artistSearch('it', 1, 3);
  }, [])
  return ( 
    <>
      <div>
      
      </div>
    </>
  )
}

export default App
