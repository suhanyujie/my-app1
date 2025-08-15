import React, { Component } from 'react';
import Header from './Header';
import ResList from './ResList';

export default class GithubSearch extends Component {
  render() {
    return (
      <div
        className="github-search"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <Header />
        <ResList />
      </div>
    );
  }
}
