import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import Header from 'components/Header';
import Sider from 'components/Sider';
import PrivateRoute from 'components/PrivateRoute';
import mainRoutes from 'routes/mainRoutes';

export default function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Helmet
        titleTemplate="%s - Create React Ant Design Boilerplate"
        defaultTitle="Create React Ant Design Boilerplate"
      >
        <meta name="description" content="A Create React Ant Design Boilerplate application" />
      </Helmet>
      <Header />
      <Layout>
        <Sider />
        <Layout>
          <Layout.Content style={{ margin: '16px' }}>
            <Switch>{mainRoutes.map(route => (route.auth ? <PrivateRoute {...route} /> : <Route {...route} />))}</Switch>
          </Layout.Content>
          <Layout.Footer style={{ textAlign: 'center' }}>Create React Ant Design Boilerplate</Layout.Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}
