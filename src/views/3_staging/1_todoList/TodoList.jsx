import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  // 对当前组件的 props 进行校验
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodoStatus: PropTypes.func.isRequired,
  };

  render() {
    const { todos, updateTodoStatus } = this.props;
    return (
      <div style={{ marginTop: '18px' }}>
        <ul style={{ listStylePosition: 'inside' }} className="todolist">
          {todos.map((item) => {
            // return <li key={item.id}>{item.content}</li>;
            return (
              <TodoItem
                key={item.id}
                item={item}
                updateTodoStatus={updateTodoStatus}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
