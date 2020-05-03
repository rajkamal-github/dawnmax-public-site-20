import React from 'react';
import Typography from '@material-ui/core/Typography';
import ProTip from '../components/ProTip';
import Link from '../components/Link';
import Layout from '../components/Layout';

export default function Index() {
  return (
    <Layout>
      <Typography variant="h4" component="h1" gutterBottom>
        Gatsby v4-beta example
      </Typography>
      <Link to="/about" color="secondary">
        Go to the about page
      </Link>
      <ProTip />
    </Layout>
  );
}
