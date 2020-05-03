import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { Divider } from '@material-ui/core';
import Highlight from '../components/Highlight';

export default function Index() {
  return (
    <Layout>
      <Hero />
      {/* <Divider light/> */}
      <Highlight />
      {/* <Divider light/> */}
    </Layout>
  );
}
