import React, { Component, useState } from 'react';
//CircularProgress is the loading bar
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import RestaurantDetails from '../RestaurantDetails/RestaurantDetails'

import useStyles from './styles'



//when we pass in place as a prop in App.js, destructure the prop in our List Component
const List = ({ places }) => {
    const classes = useStyles();
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');

    //placeholder var



    return (
        <div className={classes.container}>
            <Typography variant='h4'>Restaurants</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel> </InputLabel>
                {/*if you click on the type it will change to value to restaurant*/}
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                {/*if you click on the type it will show a list of rating options*/}
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value={0}>All Restaurants</MenuItem>
                    <MenuItem value={3}>All Above 3 Stars</MenuItem>
                    <MenuItem value={4}>All Above 4 Stars</MenuItem>
                    <MenuItem value={4.5}>All Above 4.5 Stars</MenuItem>
                </Select>
            </FormControl>
            < Grid container spacing={3} className={classes.list}>

                {/*COMMENT/////////////Each Restaurant is a Restaurant detail and we are passing all data, an arra
                 * an array of objects into our place variable, need to access it via map then 
                 * access each key to access it where we want to on the card
                */////////////////////
                }

                {places?.map((place, i) => (
                    <Grid item key={i} xs={12}>
                        <RestaurantDetails place={place} />
                    </Grid>
                ))}
            </Grid>
        </div>



    );

}

export default List;
