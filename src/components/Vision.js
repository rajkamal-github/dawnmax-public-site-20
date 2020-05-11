import React from 'react';
import { withStyles } from '@material-ui/styles';
import Heading from '../components/Heading';

const styles = (theme) => ({
    root: {
        padding: '2rem 8rem',
        [theme.breakpoints.down('xs')]:{
            padding: '0.25rem 2rem',
        },
    },
    header:{
        padding: '1rem 0rem'
    }
});

const Vision = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Heading headerText='Our Vision' />
        </div>
    )
}

export default withStyles(styles)(Vision);

