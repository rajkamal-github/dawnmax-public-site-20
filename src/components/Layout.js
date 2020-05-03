import React from 'react';
// import { Link as GatsbyLink } from 'gatsby';
import Container from '@material-ui/core/Container';
import TopNav from './TopNav';
import BottomNav from './BottomNav';
import { Box, Paper, CssBaseline, makeStyles, BottomNavigation } from '@material-ui/core';
import Main from './Main';
import FindUs from './FindUs';

const useStyles = makeStyles((theme) => ({
    root: {
        // padding: '0rem 2rem'
    }
}));

const Layout = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <TopNav />
            <Main>
                {props.children}
            </Main>
            <FindUs />
            <BottomNav />
        </div>
    )
}

export default Layout;