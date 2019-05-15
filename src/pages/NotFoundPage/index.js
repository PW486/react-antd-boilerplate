import React from 'react';
import { Alert } from 'antd';

export default function NotFound() {
  return (
    <Alert
      message="Error"
      description="Page not found."
      type="error"
      showIcon
    />
  );
}
