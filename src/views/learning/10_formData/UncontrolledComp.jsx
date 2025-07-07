import { Component } from 'react';

class UncontrolledComp extends Component {
  state = {};

  handleSubmit = (param) => {
    console.log(param);
    console.log(
      `username:${this.usernameEle.value}, pwd: ${this.pwdEle.value}`
    );
  };
  saveUsername = (event) => {
    this.setState({ username: event.target.value });
    console.log(event.target.value);
  };
  savePwd = (event) => {
    this.setState({ pwd: event.target.value });
    console.log(event.target.value);
  };

  render() {
    return (
      <>
        <h2>UncontrolledComp</h2>
        <form
          action="https://www.bing.com"
          onSubmit={this.handleSubmit}
          target="__blank"
        >
          username:
          <input
            ref={(c) => {
              this.usernameEle = c;
            }}
            onChange={this.saveUsername}
            type="text"
            name="username"
          />
          pwd:{' '}
          <input
            ref={(c) => (this.pwdEle = c)}
            type="text"
            onChange={this.savePwd}
            name="pwd"
          />
          <button>login</button>
        </form>
      </>
    );
  }
}

export default UncontrolledComp;
