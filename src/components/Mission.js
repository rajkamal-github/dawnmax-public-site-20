import React from 'react';
import { withStyles } from '@material-ui/styles';
import Heading from './Heading';
import { Paper, Grid, Box, Typography } from '@material-ui/core';

const styles = (theme) => ({
    root: {
        padding: '2rem 8rem',
        [theme.breakpoints.down('xs')]:{
            padding: '0.25rem 2rem',
        },
        flexGrow: 1,
        backgroundColor: 'rgba(163, 161, 139, 1)'
        // width:'50%',
    },
    header:{
        padding: '1rem 0rem'
    },
    missionStatementPaper: {
        backgroundColor: 'rgba(163, 161, 139, 1)',
        padding: '2rem',
        color: '#fff',
        boxShadow: 'none',
    },
    missionStatement: {
        fontWeight: 'bold',
    },
    missionStatementDetailPaper:{
        backgroundColor: 'rgba(163, 161, 139, 1)',
        padding: '2rem',
        color: '#fff',
        boxShadow: 'none',
    },
    missionStatementDetail:{
        fontWeight: 'normal',
    }
});

const Mission = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
            >
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.missionStatementPaper}>
                        <Typography variant="h2" gutterBottom className={classes.missionStatement}>
                            Our Mission is to Become The Best Service Company in The Industry.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.missionStatementDetailPaper}>
                        <Typography variant="h6" gutterBottom className={classes.missionStatementDetail}>
                            It is due to our quality-oriented approach and prompt delivery of the products, we have gained the confidence of various clients spread across the nation. Moreover, we also offer customized solution to our clients as per their specific requirements and demands. In addition to this, there are various other factors that have made us the first choice of our clients. Customization facility  I  Timely delivery  I  Competitive prices  I  Excellent customer responsiveness  I  Unending pursuit of product, process and performance optimization.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(styles)(Mission);

