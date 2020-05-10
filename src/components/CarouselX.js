import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { graphql, StaticQuery } from "gatsby";


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '0rem 0rem',
        minWidth: '100%',
    },
    media: {
        height: '80vh',
        objectFit: 'none',
        objectPosition: '50% 50%'
    }
}));

const CarouselComponent = (props) => {
    const classes = useStyles();
    // console.log(props);
 
    return (
        <Carousel className={classes.root} autoPlay={true} indicators={false} animation="fade" interval="2000">
            {
                props.data.allFile.nodes.map( (element, index) => {
                    return (
                        <Card className={classes.root} key={index}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={element.publicURL}
                                title="Contemplative Reptile"
                                />
                                {/* <CardContent>
                                    <Typography gutterBottom variant="h6" component="h6">
                                        We provide Industry- focussed services for public and private clients.
                                    </Typography>
                                </CardContent> */}
                            </CardActionArea>
                        </Card>
                    )
                })
            }
        </Carousel>
    )
}

const logoQuery = graphql`
  query {
    allFile (filter: {
        dir: {
          regex: "/images/hero$/"
        }
      }) {
        nodes {
          absolutePath
          relativePath
          publicURL
          id
          name
          relativeDirectory
          dir
        }
      }
    }
`;


const CarouselX = (props) => (
    <StaticQuery
      query={logoQuery}
      render={data => (
        <CarouselComponent data={data} {...props}/>
      )}
    />
  );
  
export default CarouselX;