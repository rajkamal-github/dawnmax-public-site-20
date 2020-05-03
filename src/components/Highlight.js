import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '1rem 5rem',
        backgroundColor: '#F9BD3B',
        backgroundColor: '#fff'
    },
    highlightImage: {
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%'
    }
}));

export default function Highlight() {
    const classes = useStyles();

    return (
    <div className={classes.root}>
        <Grid 
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing={3}>
            <Grid item xs={4} sm={3}>
                <img src="https://hatchway.in/wp-content/uploads/2020/02/ezgif.com-webp-to-png.png" className={classes.highlightImage}/>
            </Grid>
            <Grid item xs={8} sm={9}>
                <p>
                    We are a channel Partner of Lixil – Tostem. Recognized as the leading brand for global housing and building material industry in Japan, TOSTEM provides a comprehensive range of solutions to ensure comfortable homes for everybody through advanced technologies. We do so by drawing on over a half-century of experience and expertise in developing innovative technology that anticipates not only the needs for all here and now, but also the needs for home living tomorrow.
                </p>
                {/* <Typography variant="body2">
                </Typography> */}
            </Grid>
        </Grid>
        
    </div>
    );
}