import React, { Component } from 'react';

export default class TodoFooter extends Component {
  handleClearFinishedTodos = () => {
    const { clearFinishedTodos } = this.props;
    console.log('handleClearFinishedTodos');
    return () => {
      console.log('clearFinishedTodos-1001');
      clearFinishedTodos();
    };
  };

  localSelectAll = (event) => {
    const { todos, selectAll } = this.props;
    let doneCnt = todos.reduce((prev, todo) => {
      return prev + (todo.status === 1 ? 0 : 1);
    }, 0);
    let total = todos.length;
    let curIsAllDone = doneCnt === total;
    event.target.checked = !curIsAllDone;
    selectAll(event.target.checked);
    console.log('handleChanged event:', event);
  };

  render() {
    const { todos } = this.props;
    let doneCnt = todos.reduce((prev, todo) => {
      return prev + (todo.status === 1 ? 0 : 1);
    }, 0);
    let total = todos.length;
    let curIsAllDone = doneCnt === total;
    console.log('doneCnt,total:', doneCnt, total, doneCnt === total);

    return (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <input
            type="checkbox"
            checked={curIsAllDone}
            onChange={this.localSelectAll}
          />
          <span>
            {doneCnt} / {total}
          </span>
        </div>
        <button onClick={this.handleClearFinishedTodos}>清空已完成</button>
      </div>
    );
  }
}
