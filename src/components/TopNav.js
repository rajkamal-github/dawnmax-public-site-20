import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from './Logo';
import Button from '@material-ui/core/Button';
import FacebookIcon from './FacebookIcon';
import TwitterIcon from './TwitterIcon';
import LinkedInIcon from './LinkedInIcon';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
      backgroundColor: '#F9BD3B',
      color: '#45484D',
      padding: '.5rem 2rem' 
  },
  button: {
    // backgroundColor: '#F69B2F',
    // color: '#45484D'
    margin: '.25rem .25rem',
    backgroundColor: '#45484D'
  }
}));

export default function TopNav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.appbar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Logo />
          <Typography variant="h6" className={classes.title}>
            DAWNMAX
          </Typography>
          <Button variant="contained" color="primary" className={classes.button}>
            Home
          </Button>
          <Button variant="contained" color="primary" className={classes.button}>
            Services
          </Button>
          <Button variant="contained" color="primary" className={classes.button}>
            About Us
          </Button>
          <Button variant="contained" color="primary" className={classes.button}>
            Talk to an expert?
          </Button>
          {/* <IconButton color="inherit">
            <Badge badgeContent={4} color="primary">
              <NotificationsIcon  />
            </Badge>
          </IconButton> */}
          <Button>
            <FacebookIcon />
          </Button>
          <Button>
            <TwitterIcon />
          </Button>
          <Button>
            <LinkedInIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
