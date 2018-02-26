import React from 'react';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import Head from '../components/head';
import withData from '../lib/withData';
import Navbar from '../components/Navbar';

const About = ({ data: { loading, currentUser, error } }) => {
  if (loading) return <strong>LOADING...</strong>;

  if (currentUser) {
    return (
      <div>
        <Head title="About" />
        <Navbar />

        <h1>{currentUser.username}</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Head title="About" />
        <Navbar />

        <h1>About Page</h1>
        <h2>ERROR!!!</h2>
      </div>
    );
  }

  return (
    <div>
      <Head title="About" />
      <Navbar />

      <h1>About Page</h1>
    </div>
  );
};

About.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

const query = gql`
  {
    currentUser {
      id
      username
      email
    }
  }
`;

export default withData(graphql(query)(About));
