import produce from 'immer';
import jwtDecode from 'jwt-decode';
import { POST_SIGN_IN_SUCCESS } from '../SignIn/constants';

const token = localStorage.getItem('token');
const userState = token ? { user: jwtDecode(token) } : {};
export const initialState = {
  ...userState
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case POST_SIGN_IN_SUCCESS:
        localStorage.setItem('token', action.payload.data.access_token);
        draft.user = jwtDecode(token);
        break;
    }
  });

export default appReducer;
