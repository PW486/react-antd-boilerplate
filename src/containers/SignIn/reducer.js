/*
 *
 * SignIn reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, SIGNIN_SUCCESS, SIGNIN_REQUEST, CHANGE_EMAIL, CHANGE_PASSWORD } from './constants';

export const initialState = {
  email: '',
  password: '',
};

/* eslint-disable default-case, no-param-reassign */
const signInReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case SIGNIN_REQUEST:
        break;
      case CHANGE_EMAIL:
        draft.email = action.payload;
        break;
      case CHANGE_PASSWORD:
        draft.password = action.payload;
        break;
    }
  });

export default signInReducer;
