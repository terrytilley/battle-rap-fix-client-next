import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import withData from '../lib/withData';

import Head from '../components/head';
import Navbar from '../components/Navbar';

const Home = ({ data: { allUsers, allLeagues } }) => (
  <div>
    <Head title="Home" />
    <Navbar />

    <h1>Usernames</h1>
    <ul>{allUsers.map(u => <li key={u.id}>{u.username}</li>)}</ul>

    <h1>Leagues</h1>
    <ul>{allLeagues.map(l => <li key={l.id}>{l.name}</li>)}</ul>
  </div>
);

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
