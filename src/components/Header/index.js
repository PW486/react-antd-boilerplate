import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import { Layout, Icon } from 'antd';
import jwtDecode from 'jwt-decode'

import { makeSelectLoggedIn, makeSelectUser } from 'containers/App/selectors';

export function Header(props) {
  const { user } = props;

  return (
    <Layout.Header style={{ height: '48px', lineHeight: '48px', padding: '0 30px' }}>
      <Link to="/">
        <span style={{ lineHeight: '48px', fontWeight: 'bold', fontSize: 'medium' }}>
          <Icon type="layout" /> React Ant Design Boilerplate
        </span>
      </Link>
      <span level={4} style={{ lineHeight: '48px', float: 'right', color: 'rgba(255, 255, 255, 0.65)' }}>
        {JSON.stringify(user)}
      </span>
    </Layout.Header>
  );
}

Header.propTypes = {
  loggedIn: PropTypes.bool,
  user: PropTypes.object,
};

export default connect(
  createStructuredSelector({
    loggedIn: makeSelectLoggedIn(),
    user: makeSelectUser(),
  }),
)(Header);
