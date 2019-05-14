import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { DatePicker } from 'antd';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import HomePage from 'pages/HomePage/Loadable';
import FeaturePage from 'pages/FeaturePage/Loadable';
import NotFoundPage from 'pages/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import 'antd/dist/antd.css';
import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Layout.Sider collapsible >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
        </Menu>
      </Layout.Sider>
      <Layout>
        <Layout.Header style={{ background: '#fff', padding: 0 }} />
        <Layout.Content style={{ margin: '0 16px' }}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/features" component={FeaturePage} />
            <Route path="" component={NotFoundPage} />
          </Switch>
        </Layout.Content>
        <Layout.Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Layout.Footer>
      </Layout>
      <GlobalStyle />
    </Layout>
  );
}
