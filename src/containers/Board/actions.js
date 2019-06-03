/*
 *
 * Board actions
 *
 */

import { DEFAULT_ACTION, POST_GET_ALL_REQUEST, POST_GET_ALL_SUCCESS } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function postGetAllRequest() {
  return {
    type: POST_GET_ALL_REQUEST
  };
}

export function postGetAllSuccess(payload) {
  return {
    type: POST_GET_ALL_SUCCESS,
    payload
  };
}
