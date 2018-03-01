import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const UserList = ({ data: { loading, allUsers } }) => {
  if (loading) return <div />;

  return <ul>{allUsers.map(u => <li key={u.id}>{u.username}</li>)}</ul>;
};

const query = gql`
  query allUsers {
    allUsers {
      id
      username
    }
  }
`;

export default graphql(query)(UserList);
