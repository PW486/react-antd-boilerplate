import { postGetAllSuccess } from "./actions";
import { takeLatest, call, put, select } from 'redux-saga/effects';
import { POST_GET_ALL_REQUEST } from "./constants";
import { postGetAllAPI } from "./api";

export function* postGetAll() {
  try {
    const postList = yield call(postGetAllAPI);
    yield put(postGetAllSuccess(postList));
  }
  catch (error) {
    yield put({ type: 'POST_GET_ALL_FAILURE', error })
  }
}

// Individual exports for testing
export default function* boardSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(POST_GET_ALL_REQUEST, postGetAll);
}
