import React from 'react';
// import { Link as GatsbyLink } from 'gatsby';
import Container from '@material-ui/core/Container';
import TopNav from './TopNav';
import BottomNav from './BottomNav';
import { Box, Paper, CssBaseline, makeStyles } from '@material-ui/core';

const Layout = (props) => {
    return (
        <div>
            <CssBaseline />
            <TopNav />
            <main>
                <Container maxWidth="lg">
                    <Paper elevation={0}>
                        <Box m={4} height="100%">
                            {props.children}
                        </Box>
                    </Paper>
                </Container>
            </main>
            <BottomNav />
        </div>
    )
}

export default Layout;