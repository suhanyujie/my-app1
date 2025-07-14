import React, { Component } from 'react';

export default class TodoItem extends Component {
  state = {
    isMouseEnter: false,
  };

  handleChange = (event) => {
    const { updateTodoStatus } = this.props;
    const { target } = event;
    let isDone = false;
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

  render() {
    const { item } = this.props;
    const { isMouseEnter } = this.state;
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
            defaultChecked={item.status === 2}
            onChange={this.handleChange}
          />
          <label htmlFor={item.id}>{item.content}</label>
          <button style={{ display: isMouseEnter ? 'block' : 'none' }}>
            删除
          </button>
        </li>
      </div>
    );
  }
}
