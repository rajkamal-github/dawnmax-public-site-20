import React from 'react';
import Layout from '../components/Layout';
import CarouselX from '../components/CarouselX';
// import { Divider } from '@material-ui/core';
import Highlight from '../components/Highlight';
import CardXList from '../components/CardXList';
import Mission from '../components/Mission';

export default function Index() {
  return (
    <Layout>
      <CarouselX />
      <Highlight />
      <Mission />
      <CardXList />
    </Layout>
  );
}
