import React, { Component } from 'react';

export default class TodoFooter extends Component {
  handleClearFinishedTodos = () => {
    const { clearFinishedTodos } = this.props;
    return () => {
      clearFinishedTodos();
    };
  };

  localSelectAll = (event) => {
    const { selectAll } = this.props;
    let curIsAllDone = event.target.checked;
    selectAll(curIsAllDone);
  };

  render() {
    const { todos } = this.props;
    let doneCnt = todos.reduce((prev, todo) => {
      return prev + (todo.status === 1 ? 0 : 1);
    }, 0);
    let total = todos.length;
    let curIsAllDone = doneCnt === total && total > 0;

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
        <button onClick={this.handleClearFinishedTodos()}>清空已完成</button>
      </div>
    );
  }
}
