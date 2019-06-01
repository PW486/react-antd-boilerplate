/**
 *
 * SignUp
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Form, Input, Icon, Button } from 'antd';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { defaultAction } from './actions';
import makeSelectSignUp from './selectors';
import reducer from './reducer';
import saga from './saga';

const handleSubmit = e => {
  e.preventDefault();
};

export function SignUp({ onLoadAction }) {
  useInjectReducer({ key: 'signUp', reducer });
  useInjectSaga({ key: 'signUp', saga });

  return (
    <React.Fragment>
      <Helmet>
        <title>SignUp</title>
        <meta name="description" content="Description of SignUp" />
      </Helmet>
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
      <Button onClick={onLoadAction}>butttton</Button>
    </React.Fragment>
  );
}

SignUp.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onLoadAction: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  signUp: makeSelectSignUp(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onLoadAction: () => dispatch(defaultAction()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SignUp);
