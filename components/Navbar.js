import React from 'react';
import Link from 'next/link';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Navbar = ({ data: { error, loading } }) => {
  if (loading) return <div />;

  return (
    <nav>
      {error ? 'Not Authenticated!' : 'Authenticated'}
      <ul>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link href={href}>
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const CurrentUserQuery = gql`
  query CurrentUser {
    currentUser {
      id
      username
      email
    }
  }
`;

export default graphql(CurrentUserQuery)(Navbar);
