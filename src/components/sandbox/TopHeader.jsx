import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  DownOutlined,
  SettingOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import { Layout, theme, Dropdown, Space, Avatar, Button } from 'antd';

export default function TopHeader() {
  const { Header } = Layout;
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items = [
    {
      label: (
        <a target="_blank" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
      key: '0',
    },
    {
      label: (
        <span>
          <SettingOutlined style={{ marginRight: '10px' }} />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            2nd menu item
          </a>
        </span>
      ),
      key: '1',
    },
    {
      label: (
        <span>
          <a href="https://www.aliyun.com">退出</a>
        </span>
      ),
      key: '2',
    },
  ];
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Header style={{ padding: 0, background: colorBgContainer }}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        />

        <div
          style={{
            marginRight: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <div style={{ marginRight: '24px' }}>欢迎 admin 回来</div>
          <Dropdown menu={{ items }} style={{ marginLeft: 10 }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <Avatar
                  style={{ backgroundColor: '#87d068' }}
                  icon={<UserOutlined />}
                />
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </Header>
    </>
  );
}

TopHeader.propTypes = {
  children: PropTypes.node.isRequired,
};
