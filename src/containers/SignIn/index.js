import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Input, Icon, Button } from 'antd';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectEmail, makeSelectPassword } from './selectors';
import { postSignInAction, onChangeEmailAction, onChangePasswordAction } from './actions';
import reducer from './reducer';
import saga from './saga';

function SignIn(props) {
  return (
    <React.Fragment>
      <Helmet>
        <title>SignIn</title>
        <meta name="description" content="Description of SignIn" />
      </Helmet>
      <div style={{ marginBottom: 16 }}>
        <Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Email"
          size="large"
          onChange={props.onChangeEmail}
          onPressEnter={props.postSignIn}
          value={props.email}
        />
      </div>
      <div style={{ marginBottom: 16 }}>
        <Input.Password
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Password"
          size="large"
          onChange={props.onChangePassword}
          onPressEnter={props.postSignIn}
          value={props.password}
        />
      </div>
      <Button type="primary" onClick={props.postSignIn}>
        Sign In
      </Button>
    </React.Fragment>
  );
}

SignIn.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  postSignIn: PropTypes.func,
  onChangeEmail: PropTypes.func,
  onChangePassword: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  email: makeSelectEmail(),
  password: makeSelectPassword(),
});

const mapDispatchToProps = dispatch => ({
  postSignIn: () => dispatch(postSignInAction()),
  onChangeEmail: e => dispatch(onChangeEmailAction(e.target.value)),
  onChangePassword: e => dispatch(onChangePasswordAction(e.target.value)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withReducer = injectReducer({ key: 'signIn', reducer });
const withSaga = injectSaga({ key: 'signIn', saga });

export default compose(
  withConnect,
  withReducer,
  withSaga,
  memo,
)(SignIn);
