import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Logo from './Logo';
import Button from '@material-ui/core/Button';

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
      backgroundColor: '#45484D',
      color: 'white',
      padding: '.5rem' 
  },
  buttonTalktoExpert: {
    backgroundColor: '#F69B2F',
    color: '#45484D'
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
          <Button variant="contained" color="primary" className={classes.buttonTalktoExpert}>
            Talk to an expert?
          </Button>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="primary">
              <NotificationsIcon  />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
