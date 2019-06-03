/*
 *
 * Board reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, POST_GET_ALL_SUCCESS } from './constants';

export const initialState = {
  postList: [],
};

/* eslint-disable default-case, no-param-reassign */
const boardReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case POST_GET_ALL_SUCCESS:
        console.log(action);
        draft.postList = action.payload.data;
        break;
    }
  });

export default boardReducer;
