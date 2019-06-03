import produce from 'immer';
import { message } from 'antd';
import { SIGNIN_SUCCESS } from '../SignIn/constants';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from './constants';

let user = JSON.parse(localStorage.getItem('user'));
const userState = user ? { loggedIn: true, user } : {};
// The initial state of the App
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
        message.error('This is a message of error');
        break;
      case SIGNIN_SUCCESS:
        console.log(action);
        draft.loggedIn = true;
        draft.user = action.payload.data;
        localStorage.setItem('user', JSON.stringify(action.payload.data));
        break;
    }
  });

export default appReducer;
