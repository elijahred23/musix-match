const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const {MusixMatch} = require('./musix-match');

const musicMatch = new MusixMatch();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({origin:"*"}));


app.get('/', (req,res)=>{
    res.send('hello world!')
})


app.get('/chartArtists', async (req,res)=>{
    const {country, page, pageSize} = req.query;
    let chartArtists = await musicMatch.chartArtists(country,page, pageSize );
    console.log({chartArtists})
    res.send({chartArtists});
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
});