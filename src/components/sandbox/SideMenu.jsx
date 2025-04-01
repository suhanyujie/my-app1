import React, { useState } from 'react';
import {
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import './sidemenu.css';

export default function SideMenu() {
  const { Sider } = Layout;
  const items = [
    {
      key: '/user',
      icon: <UserOutlined />,
      label: '用户管理',
      children: [
        {
          key: '/user/list',
          label: '用户列表',
        },
        {
          key: '/user/add',
          label: '创建用户',
        },
      ],
    },
  ];
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="left-logo">内容管理系统</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={items}
        />
      </Sider>
    </div>
  );
}
