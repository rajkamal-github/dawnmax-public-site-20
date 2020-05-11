import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Copyright from '../components/Copyright';
import { Box } from '@material-ui/core';
import FacebookIcon from './FacebookIcon';
import TwitterIcon from './TwitterIcon';
import LinkedInIcon from './LinkedInIcon';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: '.5rem 8rem',
        [theme.breakpoints.down('xs')]:{
            padding: '.5rem 2rem',
        },
        backgroundColor: '#F9BD3B',
        color: '#45484D',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    socialIcons: {
        justifyContent: 'flex-end'
    }
}));

export default function BottomNav() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid 
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                spacing={3}
                >
                <Grid item xs={12} sm={6}>
                    <Copyright />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box display="flex" className={classes.socialIcons}>
                        <FacebookIcon />
                        <TwitterIcon />
                        <LinkedInIcon />
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}