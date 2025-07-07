import { Component } from 'react';

class LifeTime2Child extends Component {
  render() {
    return (
      <>
        <div
          style={{ width: '160px', height: '160px', border: '1px solid red' }}
        >
          <h3>LifeTime2Child</h3>
          <div> carName: {this.props.carName}</div>
        </div>
      </>
    );
  }
}

class LifeTime2 extends Component {
  state = {};

  changeCar = () => {
    this.setState({
      car: '奔驰',
    });
  };

  render() {
    return (
      <>
        <div
          style={{ width: '300px', height: '300px', border: '1px solid red' }}
        >
          <h2>LifeTime2：父组件触发子组件哥更新</h2>
          <LifeTime2Child carName={this.state.car} />
          <button onClick={this.changeCar}>换车</button>
        </div>
      </>
    );
  }
}

export default LifeTime2;
