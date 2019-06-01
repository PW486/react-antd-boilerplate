/*
 *
 * SignIn actions
 *
 */

import { DEFAULT_ACTION, SIGNIN_REQUEST, SIGNIN_SUCCESS } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function signInRequest(payload) {
  return {
    type: SIGNIN_REQUEST,
    payload
  };
}

export function signInSuccess(payload) {
  return {
    type: SIGNIN_SUCCESS,
    payload
  };
}

// https://medium.com/@FourwingsY/redux-redux-saga-로-async-다루기-b7b9a9110356
