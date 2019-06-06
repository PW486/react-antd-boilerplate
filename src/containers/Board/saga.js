import { takeLatest, call, put, select } from 'redux-saga/effects';
import { getPostsSuccess, getPostsFailure, postPostsFailure, postPostsSuccess, getPostsAction } from './actions';
import { GET_POSTS_REQUEST, POST_POSTS_REQUEST } from './constants';
import { getPostsAPI, postPostsAPI } from './api';
import { makeSelectTitle, makeSelectText, makeSelectPhoto } from './selectors';

export function* getPostsSaga() {
  try {
    const postList = yield call(getPostsAPI);
    yield put(getPostsSuccess(postList));
  } catch (error) {
    yield put(getPostsFailure(error));
  }
}

export function* postPostsSaga() {
  const title = yield select(makeSelectTitle());
  const text = yield select(makeSelectText());
  const photoList = yield select(makeSelectPhoto());
  const photo = photoList[0];

  try {
    yield call(postPostsAPI, { title, text, photo });
    yield put(postPostsSuccess());
    yield put(getPostsAction());
  } catch (error) {
    yield put(postPostsFailure(error));
  }
}

export default function* boardSaga() {
  yield takeLatest(GET_POSTS_REQUEST, getPostsSaga);
  yield takeLatest(POST_POSTS_REQUEST, postPostsSaga);
}
