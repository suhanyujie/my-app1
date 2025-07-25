import React, { Component } from 'react';

export default class ResList extends Component {
  render() {
    return (
      <div
        className="reslist"
        style={{
          width: '500px',
          height: '500px',
          border: '1px solid blue',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        <div
          className="item"
          style={{
            display: 'flex',
            width: '159px',
            height: '159px',
            border: '1px solid #cc1',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            style={{ width: '50px', height: '50px', alignItems: 'center' }}
            src="https://images.icon-icons.com/1736/PNG/512/4043232-avatar-batman-comics-hero_113278.png"
            alt="headImage"
          />
          <span className="username">name 1001</span>
        </div>
      </div>
    );
  }
}
