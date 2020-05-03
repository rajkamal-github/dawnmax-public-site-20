import React from 'react';
// import { Link as GatsbyLink } from 'gatsby';
import Container from '@material-ui/core/Container';
import { Box, Paper, CssBaseline, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    main: {
      minHeight: '100vh',
      padding: '2rem 0rem'
    },
    container: {
        padding: "0rem 0rem"
    }
}));

const Main = (props) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <main className={classes.main}>
                <Container maxWidth="false" className={classes.container}>
                    <Paper elevation={0}>
                        <Box m={4} height="100%">
                            {props.children}
                        </Box>
                    </Paper>
                </Container>
            </main>
        </React.Fragment>
    )
}

export default Main;