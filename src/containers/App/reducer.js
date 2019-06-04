import produce from 'immer';
import { message } from 'antd';
import { POST_SIGN_IN_SUCCESS } from '../SignIn/constants';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from './constants';
import jwtDecode from 'jwt-decode'

const token = localStorage.getItem('token');
const userState = token ? { user: jwtDecode(token) } : {};
export const initialState = {
  ...userState
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SUCCESS_MESSAGE:
        console.log(action);
        message.success('This is a message of success');
        break;
      case ERROR_MESSAGE:
        console.log(action);
        message.error(action.payload.response.data.message);
        break;
      case POST_SIGN_IN_SUCCESS:
        console.log(action);
        draft.user = jwtDecode(token);
        localStorage.setItem('token', action.payload.data.access_token);
        break;
    }
  });

export default appReducer;
