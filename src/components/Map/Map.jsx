import React from 'react';
import GoogleMapReact from 'google-map-react';

//importing React Component from file
import { Paper, Typography, useMediaQuery } from '@material-ui/core';

import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

import Rating from '@material-ui/lab/Rating'
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';


import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { styled } from '@mui/material/styles';

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

//To show the pins on the map, the GoogleReactMap component lets us do that
//we just need the inital array of objects that store that restuarant details/ coords
//Render them inside the component

/*//////////////////////////Notes on the any Components and parameters and what they do:
<Paper></Paper> is a div with a background 

/////////////////////////////////////REMEMMMMBBBEERRRRR////////////////////////
//parens for immediate invocation of function
//https://medium.com/airbnb-engineering/immediately-invoked-function-expressions-and-parentheses-eeea53b39e0b
/////////////////////////////////////REMEMMMMBBBEERRRRR////////////////////////

<Rating size="small" value={Number(place.rating)} readOnly />
this is the experiememtal rating component, we turn the tring into a number
readOnly so the user cant Change the rating

Heart Ratings
https://mui.com/material-ui/react-rating/


To make the Restaurant Icons on the map clickable, 
we can do something called 'Lifting the State'
we will define the state in the Map Component in Map.jsx as opposed to prop drilling
ie. defining hooks in out App component in App.js

//* Need to work onChildClick to pull info from map icons to list



////////////////////////////////*/

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47',
    },
});

const Map = ({ setCoordinates, setBounds, coordinates, bounds, places }) => {

    const classes = useStyles();
    {/*this isMobile variable will be set to false if width> 600x*/ }
    const isDesktop = useMediaQuery('(min-width:600px');



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

            >
                {places?.map((place, i) => (
                    <div
                        className={classes.markerContainer}
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                        key={i}
                    >
                        {
                            <Paper className={classes.paper} elevation={3}>
                                <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                                    {place.name}
                                </Typography>
                                <img
                                    className={classes.pointer}
                                    src={place.photo ? place.photo.images.large.url : 'https://media.giphy.com/media/hC2mA1FWFs2OowO60p/giphy.gif'}
                                    alt={place.name}
                                />
                                <StyledRating
                                    size="small"
                                    value={Number(place.rating)}
                                    icon={<FavoriteIcon fontSize="inherit" />}
                                    emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                                />
                            </Paper>
                        }
                    </div>
                ))}
            </GoogleMapReact>
        </div >
    );
}

export default Map;
