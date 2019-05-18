import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

import HomePage from 'pages/HomePage';
import FeaturePage from 'pages/FeaturePage';
import NotFoundPage from 'pages/NotFoundPage';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Helmet titleTemplate="%s - React Antd Boilerplate" defaultTitle="React Antd Boilerplate">
        <meta name="description" content="A React Antd Boilerplate application" />
      </Helmet>
      <Layout.Header style={{ height: '48px', lineHeight: '48px', padding: '0 30px' }}>
        <Link to="/">
          <span style={{ lineHeight: '48px', fontWeight: 'bold', fontSize: 'medium' }}>
            <Icon type="layout" /> React Ant Design Boilerplate
          </span>
        </Link>
        <span level={4} style={{ lineHeight: '48px', float: 'right', color: 'rgba(255, 255, 255, 0.65)' }}>
          {"{ id: 1, permissions: ['admin'] }"}
        </span>
      </Layout.Header>
      <Layout>
        <Layout.Sider>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Link to="/">
                <Icon type="home" />
                <span>HomePage</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/features">
                <Icon type="desktop" />
                <span>Features</span>
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
        <Layout>
          <Layout.Content style={{ margin: '0 16px' }}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/features" component={FeaturePage} />
              <Route path="" component={NotFoundPage} />
            </Switch>
          </Layout.Content>
          <Layout.Footer style={{ textAlign: 'center' }}>DONGGEON LIM ©2019</Layout.Footer>
        </Layout>
      </Layout>
      <GlobalStyle />
    </Layout>
  );
}
