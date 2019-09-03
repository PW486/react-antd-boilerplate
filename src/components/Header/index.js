import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { Layout, Icon } from 'antd';

import { makeSelectUser } from 'global.selectors';

function Header(props) {
  return (
    <Layout.Header style={{ height: '48px', lineHeight: '48px', padding: '0 30px' }}>
      <Link to="/">
        <span style={{ lineHeight: '48px', fontWeight: 'bold', fontSize: 'medium' }}>
          <Icon type="layout" /> Create React Ant Design Boilerplate
        </span>
      </Link>
      <span level={4} style={{ lineHeight: '48px', float: 'right', color: 'rgba(255, 255, 255, 0.65)' }}>
        <Icon type="user" /> {JSON.stringify(props.user)}
      </span>
    </Layout.Header>
  );
}

Header.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

const withConnect = connect(
  mapStateToProps,
);

export default compose(
  withConnect,
  memo,
)(Header);
