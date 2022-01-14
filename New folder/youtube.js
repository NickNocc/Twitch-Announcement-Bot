require('dotenv').config();
const axios = require('axios').default;

let yApi = `https://www.googleapis.com/youtube/v3/${process.env.YOUTUBE_USER}/messages&key=${process.env.YOUTUBE_KEY}`;
let testApi = `https://www.googleapis.com/youtube/v3/channels?part=${process.env.YOUTUBE_USER}&mine=true&key=${process.env.YOUTUBE_KEY}`

async function apiCaller() { 
    axios.get(testApi)
        .then(youtubeData => {
            console.log(youtubeData);
        })
        .catch(err => {
            console.log(err);
        })
}

apiCaller();