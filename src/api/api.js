import axios from "axios";
const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

// test console response.data first then
//Paste this in try block: const { data: { data } } = await axios.get(URL, options);

//this const options gives us hardcoded Restaurant Info in VN
//To use the bounds.ne/sw from our Map.js -=---> on change App.js
// const options = {
//     params: {
//       bl_latitude: '11.847676',
//       tr_latitude: '12.838442',
//       bl_longitude: '109.095887',
//       tr_longitude: '109.149359'
//     },
//     headers: {
//         //CHANGE KEY TO ENV VARIABLES LATER
//       'X-RapidAPI-Key': '704a589672msh80cccc226857297p1c1724jsnbbaed63167ba',
//       'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
//     }
//   };//we just moved this into our the second options parameter of our axios.get request

export const getPlacesData = async (sw, ne) => {
    try {
        // request successful then try code block runs 
        // destructure data from request.data then destructure data again 
        const { data: { data } } = await axios.get(URL, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng
          },
          headers: {
              //CHANGE KEY TO ENV VARIABLES LATER
            'X-RapidAPI-Key': '704a589672msh80cccc226857297p1c1724jsnbbaed63167ba',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        //try consolelog response data but will use 
        return data;
    }
    catch (error) {
        console.log("Error with api.js axios", error);
    }
}