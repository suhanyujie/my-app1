import { Component } from 'react';

class GetSnapShotBeforeUpdate extends Component {
  state = { newsList: [] };

  componentDidMount() {
    let { newsList } = this.state;
    this.timer1 = setInterval(() => {
      if (newsList.length > 10) {
        clearInterval(this.timer1);
        return;
      }
      newsList = ['news-' + newsList.length + 1, ...newsList];
      this.setState({ newsList });
    }, 1000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('@1002: ', this.refs.listBox.scrollTop);
    return this.refs.listBox.scrollHeight;
  }

  componentDidUpdate(prevProps, prevState, snapshotValue) {
    console.log('@1001: ', prevProps, prevState, snapshotValue);
    this.refs.listBox.scrollTop =
      this.refs.listBox.scrollHeight - snapshotValue;
  }

  render() {
    return (
      <>
        <div
          style={{
            width: '100px',
            height: '100px',
            background: 'blue',
            overflow: 'auto',
          }}
          ref="listBox"
        >
          {this.state.newsList.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
        </div>
      </>
    );
  }
}

export default GetSnapShotBeforeUpdate;
