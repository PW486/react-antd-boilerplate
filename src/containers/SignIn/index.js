import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Form, Input, Icon, Button } from 'antd';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectSignIn, makeSelectEmail, makeSelectPassword } from './selectors';
import { signInRequest, changeEmail, changePassword } from './actions';
import reducer from './reducer';
import saga from './saga';

const handleSubmit = e => {
  e.preventDefault();
};

class SignIn extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>SignIn</title>
          <meta name="description" content="Description of SignIn" />
        </Helmet>
        <Form onSubmit={this.props.handleSubmit} className="login-form">
          <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
              onChange={this.props.onChangeEmail}
              value={this.props.email}
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
              onChange={this.props.onChangePassword}
              value={this.props.password}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
        <Button onClick={this.props.signInRequest}>butttton</Button>
      </React.Fragment>
    );
  }
}

SignIn.propTypes = {
  signInRequest: PropTypes.func,
  onChangeEmail: PropTypes.func,
  onChangePassword: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  signIn: makeSelectSignIn(),
  email: makeSelectEmail(),
  password: makeSelectPassword(),
});

const mapDispatchToProps = dispatch => ({
  signInRequest: () => dispatch(signInRequest()),
  onChangeEmail: evt => dispatch(changeEmail(evt.target.value)),
  onChangePassword: evt => dispatch(changePassword(evt.target.value)),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'signIn', reducer });
const withSaga = injectSaga({ key: 'signIn', saga });

export default compose(
  withConnect,
  withReducer,
  withSaga,
  memo,
)(SignIn);
