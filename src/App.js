import React, { useEffect, useState } from 'react';
import ReactDOM from'react-dom';
//import { Provider } from'react-redux';

//CssBaseLine will auto fix some minor styling
//Grid is the layout grid that creates visual consistency between 
//

import { CssBaseline, Grid } from '@mui/material';


import { getPlacesData } from './api/api.js';
import Header from './components/Header/Header.jsx';
import List from './components/List/List.jsx';
import Map from './components/Map/Map.jsx';
import RestaurantDetails from './components/RestaurantDetails/RestaurantDetails.jsx';
//Grid item xs={12}, grid will take full width on mobile devices
// on md devices and larger will only take 4 spaces, the list was taking 
//much less space than map
//<Grid container spacing={3} style={{width: '100%'}}> inline styling means it needs 
//to be in a object
const App = () => {
    const [places, setPlaces] = useState([]);
    const [coordinates,setCoordinates] = useState({lat: 33.77209421050259 , lng: -84.38946016044085});
    const [bounds,setBounds] = useState( {ne:{lat:33.95454822603392, lng:-84.05128724784319}, sw:{lat:33.58925082294, lng:-84.7276330730385}} );

    //Syntax that will take in this useState, object of keys with values of objects const [bounds,setBounds] = useState( {ne:{lat:33.837781674693105, lng:-84.19507144608393}, sw:{lat:33.65507825555835, lng:-84.53736423172846}} ); 

    //on start of app, this useEffect does a GET request for restuarant data
    //data is an array of objs of restaurants
    //, and gets stored in Places variable by setter function
    //its now ready to be accessed and used by components

    //passing bounds. into getPlacesData will let us access this in api.js
    //passing the paramenters in the array tells to update setPlace everytime
    //coordinates and bounds change


    useEffect(() => {
        console.log("trying to console coords ", coordinates, "trying to console bounds ", bounds);

        //////////////////////I WAS STUCK ON THIS GO BACK AND REVIEW, I could not pass in data to setPlaces because I was using a default useState of null for var bounds //////////////////////////////////////////////////////////////////////////////////
        //I need to hard code a start bounds or pass in dynamically somehow, i went with hardcoding ATLs bounds

        //bounds is an object nesting objects .....bounds: {ne: {…}, sw: {…}}
        //we need to pass in the value the bounds keys, which are lat/long for ne/sw

            getPlacesData(bounds.ne, bounds.sw)
            .then((data) => {
                console.log(data);
                setPlaces(data);
            })
        }, [coordinates, bounds]);

        //We need to pass bounds and coordinates into getPlacesData()


        //this useEffect will give user location from the start
        // useEffect(() => {
        //     navigator.geolocation.getCurrentPosition(({coordinates: {latitude, longitude}}) => {
        //         setCoordinates({lat: latitude, lng: longitude});
        //     })
        //     }, [coordinates, bounds]);

    // Now we need to get real info from map position, and call the correct restaurants
    //within the bounds
    //we will need to pass more info into setPlaces function
    //make a useState or coordinates ( object of key lat and lng)
    //make a useState or bounds ( top left bottom right of map) ( object of top left and bottom right)
    // pass the setter functions: setCoordinates and setBounds into Map Component
    //pass coordinates var because map wll be using this
    // this way when we pull map data we need from the map position we can set state 
    //to search for the appropriate RestaurantDetails
    return (
        <>
            <CssBaseline />
            <Header />
            {/* containers is like a flex container*/ }
            {/* items are the elements contained in the container grid*/ }
            <Grid container spacing={3} style={{width: '100%'}}>
                {/*md4 means this will be the list size on md devices*/}
                <Grid item xs={12} md={4}>
                    <List places={places}/>
                </Grid>
                {/*this is the map*/}
                <Grid item xs={12} md={8}>
                    <Map
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                     />
                </Grid>
            </Grid>
        </>
    )
}

export default App;