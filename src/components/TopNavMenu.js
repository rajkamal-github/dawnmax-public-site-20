import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        // padding: '1rem 5rem',
        // width: '20vw',
      },
      navButtonBar: {
        [theme.breakpoints.down('xs')]:{
            display: 'none'    
        }
      },
      button: {
        margin: '.5rem .5rem',
        // backgroundColor: '#45484D'
        // backgroundColor: 'none',
        // background: 'transparent',
        // border: 'none',
        color: '#45484D',
        // boxShadow: 'none'
      },
      buttonHover:{
          backgroundColor: '#45484D',
          color: '#fff'
      },
      hamburgerMenu:{
        [theme.breakpoints.up('sm')]:{
            display: 'none'    
        }
      },
      menuButton: {
        marginRight: theme.spacing(2),
      }
}));

export default function TopNavMenu(props) {
    const classes = useStyles();
    console.log(props);

    return (
        <div>
            <div className={classes.navButtonBar}>
            <Button color="primary" className={classes.button}>
                Home
            </Button>
            <Button color="primary" className={classes.button}>
                Services
            </Button>
            <Button color="primary" className={classes.button}>
                About Us
            </Button>
            <Button color="primary" className={classes.button}>
                Testimonials
            </Button>
            <Button color="primary" className={classes.button}>
                Talk to an expert?
            </Button>
            </div>
            <div className={classes.hamburgerMenu}>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
            </div>
        </div>
    );
}