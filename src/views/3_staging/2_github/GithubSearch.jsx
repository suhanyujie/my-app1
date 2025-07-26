import React, { Component } from 'react';
import Header from './Header';
import ResList from './ResList';

export default class GithubSearch extends Component {
  state = {
    isFirst: true,
    isLoading: false,
    userList: [],
    err: '',
  };

  getUserList = (list) => {
    this.setState({ userList: list });
  };

  setAppState = (state) => {
    this.setState(state);
  };

  render() {
    const { userList, isFirst, isLoading, err } = this.state;
    return (
      <div
        className="github-search"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <Header
          setAppState={this.setAppState}
          getUserList={this.getUserList}
          userList={userList}
          isFirst={isFirst}
          isLoading={isLoading}
          err={err}
        />
        <ResList
          userList={userList}
          isFirst={isFirst}
          isLoading={isLoading}
          err={err}
        />
      </div>
    );
  }
}
