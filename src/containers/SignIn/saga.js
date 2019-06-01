import { takeLatest, call, put, select } from 'redux-saga/effects';

import { SIGNIN_REQUEST } from './constants';
import { signIn } from './api';
import { signInSuccess } from './actions';
import { makeSelectEmail, makeSelectPassword } from './selectors';

export function* postSignIn() {
  const email = yield select(makeSelectEmail());
  const password = yield select(makeSelectPassword());

  try {
    const user = yield call(signIn, { email, password });
    console.log(user);
    yield put(signInSuccess(user));
  }
  catch (error) {
    yield put({ type: 'SIGNIN_FAILURE', error })
  }
}

// Individual exports for testing
export default function* signInSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(SIGNIN_REQUEST, postSignIn);
}
