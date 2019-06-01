/**
 *
 * SignIn
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
import makeSelectSignIn from './selectors';
import { signInRequest } from './actions';
import reducer from './reducer';
import saga from './saga';

const handleSubmit = e => {
  e.preventDefault();
};

export function SignIn({ signInRequest }) {
  useInjectReducer({ key: 'signIn', reducer });
  useInjectSaga({ key: 'signIn', saga });

  return (
    <React.Fragment>
      <Helmet>
        <title>SignIn</title>
        <meta name="description" content="Description of SignIn" />
      </Helmet>
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Email"
          // onChange={}
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
      <Button onClick={signInRequest}>butttton</Button>
    </React.Fragment>
  );
}

SignIn.propTypes = {
  dispatch: PropTypes.func.isRequired,
  signInRequest: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  signIn: makeSelectSignIn(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    signInRequest: () => dispatch(signInRequest()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SignIn);
