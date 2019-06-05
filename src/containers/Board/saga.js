import { getPostsSuccess, getPostsFailure, postPostsFailure, postPostsSuccess, getPostsAction } from "./actions";
import { takeLatest, call, put, select } from 'redux-saga/effects';
import { GET_POSTS_REQUEST, POST_POSTS_REQUEST } from "./constants";
import { getPostsAPI, postPostsAPI } from "./api";

export function* getPostsSaga() {
  try {
    const postList = yield call(getPostsAPI);
    yield put(getPostsSuccess(postList));
  }
  catch (error) {
    yield put(getPostsFailure(error));
  }
}

export function* postPostsSaga() {
  try {
    yield call(postPostsAPI, { title : "kieek", text: "kieek" });
    yield put(postPostsSuccess());
    yield put(getPostsAction());
  }
  catch (error) {
    yield put(postPostsFailure(error));
  }
}

export default function* boardSaga() {
  yield takeLatest(GET_POSTS_REQUEST, getPostsSaga);
  yield takeLatest(POST_POSTS_REQUEST, postPostsSaga);
}
