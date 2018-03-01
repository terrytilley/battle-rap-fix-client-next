import React from 'react';
import withData from '../lib/withData';

import Head from '../components/head';
import Navbar from '../components/Navbar';
import UserList from '../components/UserList';

const Home = () => (
  <div>
    <Head title="Home" />
    <Navbar />

    <h1>Home Page</h1>
    <UserList />
  </div>
);

export default withData(Home);
