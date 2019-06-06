import { takeLatest, call, put, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { POST_SIGN_IN_REQUEST } from './constants';
import { postSignInAPI } from './api';
import { postSignInSuccess, postSignInFailure } from './actions';
import { makeSelectEmail, makeSelectPassword } from './selectors';

export function* postSignInSaga() {
  const email = yield select(makeSelectEmail());
  const password = yield select(makeSelectPassword());

  try {
    const user = yield call(postSignInAPI, { email, password });
    yield put(postSignInSuccess(user));
    yield put(push('/'));
  } catch (error) {
    yield put(postSignInFailure(error));
  }
}

export default function* signInSaga() {
  yield takeLatest(POST_SIGN_IN_REQUEST, postSignInSaga);
}
