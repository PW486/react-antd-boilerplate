import React from 'react';
import { Alert } from 'antd';

function NotFound() {
  return <Alert message="404 Error" description="Page Not Found." type="error" showIcon />;
}

export default NotFound;
