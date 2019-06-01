import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Icon } from 'antd';

function Header() {
  return (
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
  );
}

export default Header;
