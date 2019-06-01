/*
 *
 * SignIn reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, SIGNIN_SUCCESS, SIGNIN_REQUEST } from './constants';

export const initialState = {
  user: [],
};

/* eslint-disable default-case, no-param-reassign */
const signInReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case SIGNIN_REQUEST:
        break;
      case SIGNIN_SUCCESS:
        console.log(action);
        draft.user = action.payload.data;
        break;
    }
  });

export default signInReducer;
