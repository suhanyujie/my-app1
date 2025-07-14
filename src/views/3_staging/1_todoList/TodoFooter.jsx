import React, { Component } from 'react';

export default class TodoFooter extends Component {
  render() {
    const { todos } = this.props;
    return (
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button>清空已完成</button>
      </div>
    );
  }
}
