import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoHeader extends Component {
  // 对当前组件的 props 进行校验
  static propTypes = {
    addNewNote: PropTypes.func.isRequired,
  };

  createNewNote = (noteContent) => {
    const { addNewNote } = this.props;
    let newNote = {
      id: this.getNewId(),
      content: noteContent,
      status: 1,
    };
    addNewNote(newNote);
  };

  handleKeyUp = (event) => {
    let { target, keyCode } = event;
    if (keyCode === 13) {
      if (target.value.trim() === '') {
        alert('输入的内容不能为空');
        return;
      }
      this.createNewNote(target.value);
      target.value = '';
    }
  };

  getNewId = () => {
    return window.crypto.randomUUID();
  };

  render() {
    return (
      <div style={{}}>
        <input
          type="text"
          placeholder="请输入待办事项"
          style={{
            display: 'block',
            width: '580px',
            height: '60px',
            fontSize: '20px',
            padding: '0 10px',
            boxShadow: '0 0 10px #ccc',
            borderRadius: '3px',
          }}
          onChange={this.setInputVal}
          onKeyUp={this.handleKeyUp}
        />
      </div>
    );
  }
}
