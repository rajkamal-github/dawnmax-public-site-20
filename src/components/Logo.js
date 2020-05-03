import React from 'react';
import { graphql, StaticQuery } from "gatsby";
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
    logo : {
        height: '5rem',
        width: '7rem',
        padding: '0 1rem'
    }
});

const LogoComponent = (props) => {
    console.log(props);
    const { classes } = props;
    return (
        <img src={props.data.file.publicURL} className={classes.logo}/>
    )
};

// LogoComponent.propTypes = {
//     classes: PropTypes.object.isRequired
// }


const logoQuery = graphql`
  query {
        file(relativePath: {eq: "dawnmax-logo.png"}) {
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