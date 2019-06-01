/*
 *
 * SignIn actions
 *
 */

import { DEFAULT_ACTION, SIGNIN_REQUEST, SIGNIN_SUCCESS, CHANGE_EMAIL, CHANGE_PASSWORD } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function signInRequest() {
  return {
    type: SIGNIN_REQUEST
  };
}

export function signInSuccess(payload) {
  return {
    type: SIGNIN_SUCCESS,
    payload
  };
}

export function changeEmail(payload) {
  return {
    type: CHANGE_EMAIL,
    payload
  };
}

export function changePassword(payload) {
  return {
    type: CHANGE_PASSWORD,
    payload
  };
}



// https://medium.com/@FourwingsY/redux-redux-saga-로-async-다루기-b7b9a9110356
