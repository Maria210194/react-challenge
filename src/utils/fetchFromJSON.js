import axios from 'axios';
import { useEffect } from 'react';

// const BASE_URL = 'https://beer-live.p.rapidapi.com/top10beers';

// const options = {
//     url: BASE_URL,
//     params: {
//         maxResults: '50'
//     },
//     headers: {
//       'X-RapidAPI-Key': '5301296d1emsh020502c359e546cp1b907bjsndd603c3d87f5',
//       'X-RapidAPI-Host': 'beer-live.p.rapidapi.com'
//     }
//   };


const data = require('./beers.json');
export const beers = data.beers;
export const beer = data.beers[0];
export const image_url = data.beers[0].image_url;
console.log(image_url)

console.log("BEERS: ",beers, "BEER:", beer);

// const beersName = data.beers[i].name;
for(let i=0; i<beers.length;i++){
    const beer = beers[i];
    const onSale = beer.on_sale;
    console.log("ATTENZIONE, SINGOLA BIRRA",beer, "ON SALE: ", onSale);
}

// console.log('[-- typeof data --]', typeof beers, beers); // object

