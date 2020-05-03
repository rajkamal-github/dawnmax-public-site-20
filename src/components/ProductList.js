import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Product from './Product';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '1rem 5rem',
        flexGrow: 1,
      },
      productHeader:{
          padding: '1rem 0rem'
      }
}));

const tileData = [
    {
        img: 'https://www.dallasglassandauto.com/wp-content/uploads/2017/02/smart-glass.jpg',
        title: 'The Road Less Traveled',
        author: 'Scott Peck'
    },
    {
        img: 'https://via.placeholder.com/450',
        title: 'The Road Less Traveled',
        author: 'Scott Peck'
    },
    {
        img: 'https://via.placeholder.com/450',
        title: 'The Road Less Traveled',
        author: 'Scott Peck'
    },
    {
        img: 'https://via.placeholder.com/450',
        title: 'The Road Less Traveled',
        author: 'Scott Peck'
    },
    {
        img: 'https://via.placeholder.com/450',
        title: 'The Road Less Traveled',
        author: 'Scott Peck'
    },
    {
        img: 'https://via.placeholder.com/450',
        title: 'The Road Less Traveled',
        author: 'Scott Peck'
    },
    {
        img: 'https://via.placeholder.com/450',
        title: 'The Road Less Traveled',
        author: 'Scott Peck'
    },
    {
        img: 'https://via.placeholder.com/450',
        title: 'The Road Less Traveled',
        author: 'Scott Peck'
    },
    {
        img: 'https://via.placeholder.com/450',
        title: 'The Road Less Traveled',
        author: 'Scott Peck'
    },
    {
        img: 'https://via.placeholder.com/450',
        title: 'The Road Less Traveled',
        author: 'Scott Peck'
    },
    {
        img: 'https://via.placeholder.com/450',
        title: 'The Road Less Traveled',
        author: 'Scott Peck'
    }
];

export default function ProductList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h5" gutterBottom className={classes.productHeader}>
                Our Products
            </Typography>
            <Grid container spacing={3}>
                {
                    tileData.map((element, index)=> {
                        return (
                            <Grid item xs key={index}>
                                <Product {...element}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    );
}