import React, { Component } from 'react';
import axios from 'axios';

export default class Header extends Component {
  search = () => {
    const { setAppState } = this.props;
    const {
      keywordEle: { value: keyword },
    } = this.refs;
    console.log('keyword', keyword);
    if (keyword.length === 0) {
      return;
    }
    setAppState({ isLoading: true, isFirst: false });

    axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
      (res) => {
        // console.log('res: ', res.data);
        setAppState({ isLoading: false, userList: res.data.items });
      },
      (err) => {
        console.log('error: ', err);
        setAppState({ isLoading: false, err: err.message });
      }
    );
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '500px',
          height: '100px',
          border: '1px solid #ccc',
        }}
      >
        <div style={{ display: 'flex', height: '50px', lineHeight: '50px' }}>
          <input
            ref="keywordEle"
            type="text"
            placeholder="请输入搜索内容"
            style={{
              width: '200px',
              height: '48px',
              border: '1px solid #ccc',
              padding: '0 10px',
            }}
          />
          <button onClick={this.search}>搜索</button>
        </div>
      </div>
    );
  }
}
