import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

import SignUp from 'containers/SignUp';
import SignIn from 'containers/SignIn';
import Board from 'containers/Board';
import NotFound from 'containers/NotFound';
import Header from 'components/Header';
import Sider from 'components/Sider';
import PrivateRoute from 'components/PrivateRoute';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Helmet titleTemplate="%s - React Antd Boilerplate" defaultTitle="React Antd Boilerplate">
        <meta name="description" content="A React Antd Boilerplate application" />
      </Helmet>
      <Header />
      <Layout>
        <Sider />
        <Layout>
          <Layout.Content style={{ margin: '0 16px' }}>
            <Switch>
              <Route exact path="/" component={SignUp} />
              <PrivateRoute path="/signup" component={SignUp} />
              <Route path="/signin" component={SignIn} />
              <Route path="" component={NotFound} />
            </Switch>
          </Layout.Content>
          <Layout.Footer style={{ textAlign: 'center' }}>DONGGEON LIM ©2019</Layout.Footer>
        </Layout>
      </Layout>
      <GlobalStyle />
    </Layout>
  );
}
