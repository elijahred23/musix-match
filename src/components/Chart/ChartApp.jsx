import { useState, useEffect } from 'react'
import './Chart.css';
import ArtistChart from './ArtistChart';

const musicMatchURL = import.meta.env.VITE_API_URL; 

function ChartApp() {
  const artistSearch = async (country,page, pageSize) => {
    try {
      const response = await fetch(`${musicMatchURL}chartArtists?page=${page}&pageSize=${pageSize}&country=${country}`);
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
        <h2>Chart</h2>
        <ArtistChart />
      </div>
    </>
  )
}

export default ChartApp; 
