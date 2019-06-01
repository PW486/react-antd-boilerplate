/*
 *
 * SignUp reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION } from './constants';

export const initialState = {
  username: '',
  posts: [],
};

/* eslint-disable default-case, no-param-reassign */
const signUpReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        draft.posts.push('123');
        break;
      case 'DEFAULT_ACTION_SUCCESS':
        draft.posts = action.posts.data;
        break;
    }
  });

export default signUpReducer;
