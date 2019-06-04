import produce from 'immer';
import { ON_CHANGE_EMAIL, ON_CHANGE_PASSWORD } from './constants';

export const initialState = {
  userForm: {
    email: '',
    password: '',
  },
};

/* eslint-disable default-case, no-param-reassign */
const signInReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ON_CHANGE_EMAIL:
        draft.userForm.email = action.payload;
        break;
      case ON_CHANGE_PASSWORD:
        draft.userForm.password = action.payload;
        break;
    }
  });

export default signInReducer;
