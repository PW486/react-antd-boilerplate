import produce from 'immer';
import { ON_CHANGE_EMAIL, ON_CHANGE_PASSWORD } from './signin.constants';

export const initialState = {
  singInForm: {
    email: '',
    password: '',
  },
};

/* eslint-disable default-case, no-param-reassign */
const signInReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ON_CHANGE_EMAIL:
        draft.singInForm.email = action.payload;
        break;
      case ON_CHANGE_PASSWORD:
        draft.singInForm.password = action.payload;
        break;
    }
  });

export default signInReducer;
