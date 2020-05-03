import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        // padding: '1rem 5rem',
        width: '20vw',
      },
      media: {
        height: 140,
      },
}));

export default function Product(props) {
    const classes = useStyles();
    console.log(props);

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={props.img}
                title={props.title}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Be fearless. Have the courage to take risks. Go where there are no guarantees. Get out of your comfort zone even if it means being uncomfortable.
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}