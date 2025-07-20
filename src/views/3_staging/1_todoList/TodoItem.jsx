import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends Component {
  static propTypes = {
    deleteTodo: PropTypes.func.isRequired,
  };

  state = {
    isMouseEnter: false,
  };

  handleChange = (event) => {
    const { updateTodoStatus } = this.props;
    const { target } = event;
    let isDone = 1;
    let dataId = target.id;
    if (target.checked) {
      isDone = 2;
    } else {
      isDone = 1;
    }
    updateTodoStatus(dataId, isDone);
  };

  handleMouse = (isEnter) => {
    return () => {
      this.setState({
        isMouseEnter: isEnter,
      });
    };
  };

  handleDelete = (id) => {
    const { deleteTodo } = this.props;
    return () => {
      deleteTodo(id);
    };
  };

  render() {
    const { item } = this.props;
    const { isMouseEnter } = this.state;
    console.log('todoItem render...item:', item);
    return (
      <div>
        <li
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
          onMouseEnter={this.handleMouse(true)}
          onMouseLeave={this.handleMouse(false)}
        >
          <input
            type="checkbox"
            id={item.id}
            checked={item.status === 2}
            onChange={this.handleChange}
          />
          <label htmlFor={item.id}>{item.content}</label>
          <button
            style={{ display: isMouseEnter ? 'block' : 'none' }}
            onClick={this.handleDelete(item.id)}
          >
            删除
          </button>
        </li>
      </div>
    );
  }
}
