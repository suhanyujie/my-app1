import React, { Component } from 'react';

export default class ResList extends Component {
  render() {
    const { userList, isFirst, isLoading, err } = this.props;
    return (
      <div
        className="reslist"
        style={{
          width: '500px',
          height: '500px',
          border: '1px solid blue',
          display: 'flex',
          flexWrap: 'wrap',
          overflow: 'scroll',
        }}
      >
        {isFirst ? (
          <div>请输入搜索内容</div>
        ) : isLoading ? (
          <div>加载中...</div>
        ) : err ? (
          <div> 搜索发生异常：{err} </div>
        ) : (
          userList.map((userObj) => {
            return (
              <a
                key={userObj.id}
                href={userObj.html_url}
                target="_blank"
                className="item"
                style={{
                  display: 'flex',
                  width: '159px',
                  height: '159px',
                  border: '1px solid #cc1',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  style={{
                    width: '50px',
                    height: '50px',
                    alignItems: 'center',
                  }}
                  src={userObj.avatar_url}
                  alt="headImage"
                />
                <span className="username">{userObj.login}</span>
              </a>
            );
          })
        )}
      </div>
    );
  }
}
