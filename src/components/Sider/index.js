import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Icon, Menu } from 'antd';

function Sider() {
  return (
    <Layout.Sider>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1">
          <Link to="/">
            <Icon type="home" />
            <span>HomePage</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/signin">
            <Icon type="desktop" />
            <span>Sign In</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/notfound">
            <Icon type="pie-chart" />
            <span>NotFound</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
}

export default Sider;
