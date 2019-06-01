import { takeLatest, call, put, select } from 'redux-saga/effects';

import { DEFAULT_ACTION } from './constants';
import { defaultAction } from './api';

export function* getPosts() {
  // const posts = yield call(request, )
  const posts = yield call(defaultAction);
  console.log(posts.data);
  // Instructing middleware to dispatch corresponding action.
  yield put({
    type: 'DEFAULT_ACTION_SUCCESS',
    posts,
  });
}

// Individual exports for testing
export default function* signUpSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(DEFAULT_ACTION, getPosts);
}
