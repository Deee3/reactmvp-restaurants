import React from 'react';
import ReactDOM from'react-dom';
//import { Provider } from'react-redux';

//CssBaseLine will auto fix some minor styling
//Grid is the layout grid that creates visual consistency between 
//

import { CssBaseline, Grid } from '@mui/material';



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
    return (
        <>
            <CssBaseline />
            <Header />

            <Grid container spacing={3} style={{width: '100%'}}>
                <Grid item xs={12} md={4}>
                    <List />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map />
                </Grid>
            </Grid>
        </>
    )
}

export default App;