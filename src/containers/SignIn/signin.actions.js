import {
  POST_SIGN_IN_REQUEST,
  POST_SIGN_IN_SUCCESS,
  POST_SIGN_IN_FAILURE,
  ON_CHANGE_EMAIL,
  ON_CHANGE_PASSWORD,
} from './signin.constants';

export const postSignInAction = payload => ({ type: POST_SIGN_IN_REQUEST, payload });
export const postSignInSuccess = payload => ({ type: POST_SIGN_IN_SUCCESS, payload });
export const postSignInFailure = payload => ({ type: POST_SIGN_IN_FAILURE, payload });

export const onChangeEmailAction = payload => ({ type: ON_CHANGE_EMAIL, payload });
export const onChangePasswordAction = payload => ({ type: ON_CHANGE_PASSWORD, payload });
