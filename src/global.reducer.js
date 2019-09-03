import produce from 'immer';
import jwtDecode from 'jwt-decode';
import { POST_SIGN_IN_SUCCESS } from 'containers/SignIn/signin.constants';

const token = localStorage.getItem('token');
const userState = token ? { user: jwtDecode(token) } : {};
export const initialState = {
  ...userState,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case POST_SIGN_IN_SUCCESS:
        const newToken = action.payload.data.access_token;
        localStorage.setItem('token', newToken);
        draft.user = jwtDecode(newToken);
        break;
    }
  });

export default appReducer;
