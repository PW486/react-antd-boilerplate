import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Icon, Menu } from 'antd';

function Sider(props) {
  return (
    <Layout.Sider>
      <Menu theme="dark" selectedKeys={[props.location.pathname]} mode="inline">
        <Menu.Item key="/">
          <Link to="/">
            <Icon type="home" />
            <span>HomePage</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/signin">
          <Link to="/signin">
            <Icon type="desktop" />
            <span>Sign In</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/notfound">
          <Link to="/notfound">
            <Icon type="pie-chart" />
            <span>NotFound</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
}

export default withRouter(props => <Sider {...props} />);
