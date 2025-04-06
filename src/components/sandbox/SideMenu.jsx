import React, { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import './sidemenu.css';
import axios from 'axios';
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function SideMenu(props) {
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
      ],
    },
  ];
  const [collapsed, setCollapsed] = useState(false);
  const [menu, setMenu] = useState([]);
  const [curPermissions, setCurPermissions] = useState([]);
  const menuIconMap = {
    '/user/add': <UserOutlined />,
    '/user/list': <UserOutlined />,
  };
  useEffect(() => {
    axios.get('http://localhost:7001/menus?_embed=menuChildren').then((res) => {
      console.log(res.data);
      // 转换数据格式
      const newMenu = res.data.map((item) => {
        let tmpIcon = menuIconMap[item.path] ?? <UserOutlined />;
        let tmpItem = {
          key: item.path,
          icon: tmpIcon,
          label: item.name,
        };
        if (item.menuChildren?.length > 0) {
          tmpItem.children = item.menuChildren?.map((child) => ({
            key: child.path,
            label: child.name,
          }));
        }

        return tmpItem;
      });
      setMenu(newMenu);
    });
    axios.get('http://localhost:7001/roles/1').then((res) => {
      console.log(res.data);
      setCurPermissions(res.data.rights);
    });
  }, []);
  const checkPagePermission = (item) => {
    return curPermissions && curPermissions.includes(item.key);
  };

  const selectKeys = [props.location.pathname];
  const openKeys = ['/' + selectKeys[0].split('/')[1]];
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div style={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
        <div className="left-logo">内容管理系统</div>
        <div style={{ flex: 1, overflow: 'auto' }}>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={selectKeys}
            defaultOpenKeys={openKeys}
            items={menu}
            onClick={(item) => {
              props.history.push(item.key);
            }}
          />
        </div>
      </div>
    </Sider>
  );
}

const WrappedSideMenu = withRouter(SideMenu); // Assign a name to the wrapped component
export default WrappedSideMenu; // Export the named component
