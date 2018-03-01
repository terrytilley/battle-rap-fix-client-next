import React from 'react';
import Head from '../components/head';
import withData from '../lib/withData';
import Navbar from '../components/Navbar';

const About = () => (
  <div>
    <Head title="About" />
    <Navbar />

    <h1>About Page</h1>
  </div>
);

export default withData(About);
