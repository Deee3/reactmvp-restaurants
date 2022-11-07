import React from 'react';

/*Our place prop is being passsed in with data because of our useEffect in App.js
App.js/ useEffect calls our getPlacesData() from our api.js
getPlacesData is an async function that uses axios.get request to pull data of all restaurants
in the ne/sw bounds of the map
*/

//need to import more from material ui to make the card look ok
import { Box, Typography, Button, Card, CardMedia, CardContent, CardAction, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import Rating from '@material-ui/lab/Rating'

import useStyles from './styles';



const RestaurantDetails = ({ place }) => {
    const classes = useStyles();

    /*//////////////////////////Notes on the Card props and what they do:
    <CardMedia/>
    https://smartdevpreneur.com/four-examples-of-material-ui-cardmedia/#CardMedia_Image_Example
       elevation: set a shadow effect  
       CardMedia is a self closing tag with properties of
           style:
           image: need to use ternary to see if the object actually has image

    <Typography gutterBottom></Typography>
    //gutterBottom goves extra margin at the bottom of element

    <CardContent></CardContent>
    https://www.youtube.com/watch?v=M75MUZ1zVYM

    <Box></Box>
    https://v4.mui.com/components/box/
    use spcae between since we will have two Typography

    {place?.awards?.map(() => {
                    
                })}
                You can use parentheses instead or curly braces after the arrow to instantly return

    AlignItems vs JustifyContent
    https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container
    -Basically align-items aligns on the y-axis, justifyContent aligns on the x-axis

    <Chip />
    Chips are compact elements that represent an input, attribute, or action
    https://mui.com/material-ui/react-chip/

    {place?.address && (
        <Typography gutterBottom variant="body2" color="textSecondary">
                        
        </Typography>
    )}    if place.address exists then return this typography


       ///////////////////////////////*/


    return (



        <Card elevation={6}>
            <CardMedia
                component='img'
                style={{ height: 350 }}
                image={place.photo ? place.photo.images.large.url : 'https://media.giphy.com/media/hC2mA1FWFs2OowO60p/giphy.gif'}
                title={place.name}
            />
            <CardContent>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Restaurant Name</Typography>
                    <Typography variant="h5" gutterBottom> {place.name} </Typography>
                </Box>

                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Price</Typography>
                    <Typography variant="subtitle1" gutterBottom>{place.price_level}</Typography>
                </Box>

                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Ranked</Typography>
                    <Typography variant="subtitle1" gutterBottom>{place.ranking}</Typography>
                </Box>

                {place?.cuisine?.map(({ name }) => (
                    <Chip key={name} size="small" label={name} className={classes.chip} variant="outlined" />
                ))}

                {place?.address && (
                    <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
                        <LocationOnIcon /> {place.address}
                    </Typography>
                )}

                {place?.phone && (
                    <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
                        <PhoneIcon /> {place.phone}
                    </Typography>
                )}
            </CardContent>

        </Card>


    );

}

export default RestaurantDetails;
