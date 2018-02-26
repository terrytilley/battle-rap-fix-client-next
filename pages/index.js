import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import withData from '../lib/withData';

import Head from '../components/head';
import Navbar from '../components/Navbar';

const Home = ({ data: { loading, allUsers, allLeagues } }) => {
  if (loading) return <strong>LOADING...</strong>;

  return (
    <div>
      <Head title="Home" />
      <Navbar />

      <h2>Usernames</h2>
      <ul>{allUsers.map(u => <li key={u.id}>{u.username}</li>)}</ul>

      <h2>Leagues</h2>
      <ul>{allLeagues.map(l => <li key={l.id}>{l.name}</li>)}</ul>
    </div>
  );
};

Home.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

const query = gql`
  {
    allUsers {
      id
      username
    }
    allLeagues {
      id
      name
    }
  }
`;

const GraphQL = graphql(query)(Home);

export default withData(GraphQL);
