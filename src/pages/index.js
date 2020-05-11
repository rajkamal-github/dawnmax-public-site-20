import React from 'react';
import Layout from '../components/Layout';
import CarouselX from '../components/CarouselX';
// import { Divider } from '@material-ui/core';
import Highlight from '../components/Highlight';
import CardXList from '../components/CardXList';
// import Vision from '../components/Vision';

export default function Index() {
  return (
    <Layout>
      <CarouselX />
      <Highlight />
      {/* <Vision /> */}
      <CardXList />
    </Layout>
  );
}
