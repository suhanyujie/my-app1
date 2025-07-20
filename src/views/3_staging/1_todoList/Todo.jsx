import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoHeader from './TodoHeader.jsx';
import TodoList from './TodoList.jsx';
import TodoFooter from './TodoFooter.jsx';

export default class Todo extends Component {
  // 状态在哪里，操作状态的方法 就在哪里
  state = {
    todos: [
      { id: '1', content: '学习react', status: 1 },
      { id: '2', content: '学习vue', status: 1 },
      { id: '3', content: '学习angular', status: 1 },
    ],
  };

  addNewNote = (newNote) => {
    this.setState({
      todos: [newNote, ...this.state.todos],
    });
  };

  updateTodoStatus = (id, status) => {
    const { todos } = this.state;
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        return { ...item, status };
      }
      return item;
    });
    this.setState({
      todos: newTodos,
    });
  };

  deleteTodo = (id) => {
    if (window.confirm('确定删除吗？')) {
      const { todos } = this.state;
      const newTodos = todos.filter((todo) => {
        return todo.id !== id;
      });
      this.setState({
        todos: newTodos,
      });
    }
  };

  clearFinishedTodos = () => {
    console.log('clearFinishedTodos');
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => {
      return todo.status === 1;
    });
    this.setState({ todos: newTodos });
  };

  checkIsFinishedAll = () => {
    const { todos } = this.state;
    let doneCnt = todos.reduce((prev, todo) => {
      return prev + (todo.status === 1 ? 0 : 1);
    }, 0);
    let total = todos.length;
    return doneCnt === total;
  };

  selectAll = (isAllDone) => {
    const { todos } = this.state;
    const newTodos = todos.map((todo) => {
      return { ...todo, status: isAllDone ? 2 : 1 };
    });
    this.setState({ todos: newTodos });
  };

  render() {
    const { todos } = this.state;
    return (
      <>
        <div
          className="todo-container"
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '600px',
            margin: '0 auto',
          }}
        >
          <h1>todo</h1>
          <TodoHeader addNewNote={this.addNewNote} />
          <TodoList
            todos={todos}
            updateTodoStatus={this.updateTodoStatus}
            deleteTodo={this.deleteTodo}
          />
          <TodoFooter
            todos={todos}
            clearFinishedTodos={this.clearFinishedTodos}
            checkIsFinishedAll={this.checkIsFinishedAll}
            selectAll={this.selectAll}
          />
        </div>
      </>
    );
  }
}
