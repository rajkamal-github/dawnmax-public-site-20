import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Logo from './Logo';
import Copyright from '../components/Copyright';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: '2rem 5rem',
        backgroundColor: '#F9BD3B',
        color: '#45484D'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
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
            spacing={3}>
            {/* <Grid item xs={3} sm={3}>
                <Logo />
            </Grid> */}
            <Grid item xs={12} sm={12}>
                <Copyright />
            </Grid>
        </Grid>
    </div>
    );
}