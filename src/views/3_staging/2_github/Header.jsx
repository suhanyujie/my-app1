import React, { Component } from 'react';
import axios from 'axios';

export default class Header extends Component {
  search = () => {
    console.log(this);
    const {
      keywordEle: { value: keyword },
    } = this.refs;
    console.log('keyword', keyword);
    if (keyword.length === 0) {
      return;
    }
    axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
      (res) => {
        console.log('success: ', res.data);
      },
      (err) => {
        console.log('error: ', err);
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
          height: '168px',
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
