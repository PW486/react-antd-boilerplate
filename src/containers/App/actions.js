import { SUCCESS_MESSAGE, ERROR_MESSAGE } from './constants';

export const sucessMessageAction = (payload) => ({ type: SUCCESS_MESSAGE, payload });
export const errorMessageAction = (payload) => ({ type: ERROR_MESSAGE, payload });
