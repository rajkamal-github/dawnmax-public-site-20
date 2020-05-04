import React from 'react';
import { graphql, StaticQuery } from "gatsby";
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
    logo : {
        [theme.breakpoints.down('xs')]:{
            // display: 'none',
            height: '1.5rem',
            width: '4rem',   
        },
        height: '5rem',
        width: '7rem',
        padding: '0 1rem'
    }
});

const LogoComponent = (props) => {
    // console.log(props);
    const { classes } = props;
    return (
        <img src={props.data.file.publicURL} className={classes.logo} alt="Site logo"/>
    )
};

// LogoComponent.propTypes = {
//     classes: PropTypes.object.isRequired
// }


const logoQuery = graphql`
  query {
        file(name: {eq: "dawnmax-logo"}) {
        relativePath
        name
        relativeDirectory
        publicURL
    }
}
`;

const Logo = (props) => (
    <StaticQuery
      query={logoQuery}
      render={data => (
        <LogoComponent data={data} {...props}/>
      )}
    />
  );

export default withStyles(styles)(Logo);