import React from 'react';
import GoogleMapReact from 'google-map-react';

//importing React Component from file
import { Paper, Typography, useMediaQuery } from '@material-ui/core';

import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

import Rating from '@material-ui/lab'

import useStyles from './styles';

// {/*place holder for coordinates till we have real ones*/ }
// const coordinates = { lat: 33.7, lng: 84.3 };

//Fix to error with map not initally loading cuase of default states of center, default center
//https://github.com/google-map-react/google-map-react/issues/1016

//after making the useStates, pass in setCoordinates, coordinates, setBounds into <Map />

//Now question is how do we know when coordinates and bounds are changed
//Google Map react tells me
//need to call a onChange function: onchange={(e) => {
//                    setCoordinates({ lat: e.center.lat, lng: e.center.lng})
//                }}
//How do we know this event has the center, lat, etc
//Console.log it

const Map = ({ setCoordinates, setBounds, coordinates, bounds }) => {

    const classes = useStyles();
    {/*this isMobile variable will be set to false if width> 600x*/ }
    const isMobile = useMediaQuery('(min-width:600px');
    const atlCoordinates = { lat: 33.782469918048406, lng: -84.38538973491664 }


    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAMIxIBN0BnafCTtt-n1WLkkTMxnXoHxeE' }}

                center={coordinates}
                defaultZoom={12}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e) => {
                    console.log("e.center.lat", e.center.lat, "e.center.lng", e.center.lng);
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
                onChildClick={''}
            >
            </GoogleMapReact>
        </div >
    );
}

export default Map;
