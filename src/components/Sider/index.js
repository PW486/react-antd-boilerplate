import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Icon, Menu } from 'antd';

import routes from 'routes';
import { makeSelectUser } from 'containers/App/selectors';

/* eslint-disable indent */
function Sider(props) {
  return (
    <Layout.Sider>
      <Menu theme="dark" selectedKeys={[props.location.pathname]} mode="inline">
        {routes.map(route =>
          !route.auth ||
          (!route.permission && props.user) ||
          (props.user && props.user.permissions.includes(route.permission)) ? (
            <Menu.Item key={route.path || '/notfound'}>
              <Link to={route.path || '/notfound'}>
                <Icon type={route.icon} />
                <span>{route.name}</span>
              </Link>
            </Menu.Item>
          ) : (
            <React.Fragment />
          ),
        )}
      </Menu>
    </Layout.Sider>
  );
}

Sider.propTypes = {
  user: PropTypes.object,
  location: PropTypes.object,
};

export default connect(
  createStructuredSelector({
    user: makeSelectUser(),
  }),
)(withRouter(props => <Sider {...props} />));
