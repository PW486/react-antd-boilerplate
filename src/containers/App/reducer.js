/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { SIGNIN_SUCCESS } from '../SignIn/constants';

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
      case SIGNIN_SUCCESS:
        console.log(action);
        draft.loggedIn = true;
        draft.user = action.payload.data;
        localStorage.setItem('user', JSON.stringify(action.payload.data));
        break;
    }
  });

export default appReducer;
