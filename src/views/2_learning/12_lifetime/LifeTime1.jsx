import { Component } from 'react';
import { unmountComponentAtNode } from 'react-dom';

// ref: https://github.com/dselegent/Learning-Notes/blob/master/react/04%20%E3%80%90%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E3%80%91.md
class LifeTime1 extends Component {
  state = {
    opacity: 1,
  };

  doUnmount = () => {
    clearInterval(this.timer1);
    unmountComponentAtNode(document.getElementById('root'));
  };

  // 组件即将卸载
  componentWillUnmount() {
    clearInterval(this.timer1);
  }

  // 不修改 state 数据，直接强制更新 ui
  forceUpdate1001 = () => {
    this.forceUpdate();
  };

  // 组件挂载后
  componentDidMount() {
    this.timer1 = setInterval(() => {
      let opacity = this.state.opacity;
      opacity -= 0.1;
      if (opacity <= 0) {
        opacity = 1;
      }
      this.setState({ opacity });
    }, 200);
  }

  render() {
    return (
      <>
        <h2>LifeTime1</h2>
        <h3 style={{ opacity: this.state.opacity }}>react 难学 怎么办？</h3>
        <button onClick={this.doUnmount}>加强学习，卸载组件</button>
        <button onClick={this.forceUpdate1001}>
          不修改任何 state 数据，强制更新 ui
        </button>
      </>
    );
  }
}

export default LifeTime1;
