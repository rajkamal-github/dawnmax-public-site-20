import React from 'react';
import { withStyles } from '@material-ui/styles';
import Heading from '../components/Heading';
import { Paper, Grid, Box } from '@material-ui/core';

const styles = (theme) => ({
    root: {
        padding: '2rem 8rem',
        [theme.breakpoints.down('xs')]:{
            padding: '0.25rem 2rem',
        },
        flexGrow: 1,
        // width:'50%',
    },
    header:{
        padding: '1rem 0rem'
    },
    image: {
        // width: '25vw',
        overflow: 'hidden',
        height: 'auto'
    },
    box: {
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        width: '50%',
    }
});

const Vision = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Box display='flex' className={classes.box}>
                <Box>
                    <p>
                        Below are our points to back up our vision
                    </p>
                    <ul>
                        <li>Point no 1</li>
                        <li>Point no 2</li>
                        <li>Point no 3</li>
                        <li>Point no 4</li>
                        <li>Point no 5</li>
                    </ul>
                </Box>
                <Box>
                    <img src='https://www.tostem.com/wp-content/uploads/vision-1-1.png' alt='Preengineered windows' className={classes.image}/>                    
                </Box>
            </Box>
            {/* <Grid container>
                <Grid item xs={12} sm={12}>
                    <Heading headerText='Our Vision' />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper>
                        
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <div>
                    </div>
                </Grid>
            </Grid> */}
        </div>
    )
}

export default withStyles(styles)(Vision);

