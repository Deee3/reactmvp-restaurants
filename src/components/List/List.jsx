import React, { Component, useState } from 'react';
//CircularProgress is the loading bar
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import RestaurantDetails from '../RestaurantDetails/RestaurantDetails'

import useStyles from './styles'



//when we pass in place as a prop in App.js, destructure the prop in our List Component
const List = ({ places, setBookmarkClicked, bookmarkClicked, favoritesList, setfavoritesList }) => {
    const classes = useStyles();
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');

    return (
        <div className={classes.container}>
            <Typography variant='h4'>Restaurants</Typography>

            < Grid container spacing={3} className={classes.list}>

                {/*COMMENT/////////////Each Restaurant is a Restaurant detail and we are passing all data, an arra
                 * an array of objects into our place variable, need to access it via map then 
                 * access each key to access it where we want to on the card
                */////////////////////
                }

                {places?.map((place, i) => (
                    <Grid item key={i} xs={12}>
                        <RestaurantDetails
                            place={place}
                            setBookmarkClicked={setBookmarkClicked}
                            bookmarkClicked={bookmarkClicked}
                            favoritesList={favoritesList}
                            setfavoritesList={setfavoritesList}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    );

};

export default List;
