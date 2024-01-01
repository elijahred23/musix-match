const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();


const musixmatchApiKey = process.env.MUSIXMATCH_API_KEY;

const trackName = 'Bohemian Rhapsody';
const artistName = 'Queen';
const baseURL = "https://api.musixmatch.com/ws/1.1/";
axios.get(`${baseURL}matcher.lyrics.get?q_track=${trackName}&q_artist=${artistName}&apikey=${musixmatchApiKey}`)
 .then(response => {
    console.log('Response status:', response.status);
    console.log('Response data:', response.data);
 })
 .catch(error => {
    console.log('Error:', error);
 });


class MusixMatch {
   constructor() {

   }
   async chartArtists(country, page, pageSize) {
      try{2
         const response = await axios.get(`${baseURL}chart.artists.get?page=${page}&page_size=${pageSize}&county=${country}&apikey=${musixmatchApiKey}`)
         return response.data;
      } catch (error){
         console.log('ERROR: ' , error);



      }
   }
}

module.exports = {MusixMatch};