import { takeLatest, call, put, select } from 'redux-saga/effects';

import { SIGNIN_REQUEST } from './constants';
import { signIn } from './api';
import { signInSuccess } from './actions';

export function* postSignIn(action) {
  const user = yield call(signIn, action.payload);
  console.log(user);

  yield put(signInSuccess(user));
}

// Individual exports for testing
export default function* signInSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(SIGNIN_REQUEST, postSignIn);
}
