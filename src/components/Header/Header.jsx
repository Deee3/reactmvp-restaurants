import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import { ClassNames } from '@emotion/react';
import SearchIcon from '@material-ui/icons/Search';

//All these classes will be defined in styles.js
import useStyles from './styles';

const Header = () => {

    { /*call the hook then invoke*/ }
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>

                </Typography>
                {/*Box is just a div but you can put display properties*/}
                <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                        WiP
                    </Typography>
                    {/*<Autocomplete>*/}
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                    </div>
                    {/*</Autocomplete>*/}
                </Box>
            </Toolbar>
        </AppBar>
    );

}

export default Header;
