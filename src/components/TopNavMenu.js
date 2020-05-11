import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/styles';

const useStyles = (theme) => ({
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
        // marginRight: theme.spacing(2),
      }
});

class TopNavMenu extends React.Component {

    constructor(props){
        super(props);
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    handleMenuClick = (e) => {
        e.preventDefault();
        console.log('clicked: ' + this);
    }
    // console.log(this.props);
    // const { classes } = this.props;
    // console.log(classes.navButtonBar);
    render(){
        return (
            <div>
                <div className={this.props.classes.navButtonBar}>
                    <Button color="primary" className={this.props.classes.button}>
                        About
                    </Button>
                    <Button color="primary" className={this.props.classes.button}>
                        Products
                    </Button>
                    <Button color="primary" className={this.props.classes.button}>
                        Where to buy?
                    </Button>
                </div>
                <div className={this.props.classes.hamburgerMenu}>
                    <IconButton edge="end" 
                        onClick={this.handleMenuClick}
                        className={this.props.classes.menuButton} 
                        color="inherit" 
                        aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </div>
            </div>
        );
    }
}

export default withStyles(useStyles)(TopNavMenu);