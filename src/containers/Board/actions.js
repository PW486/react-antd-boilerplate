import { GET_POSTS_REQUEST, GET_POSTS_FAILURE, GET_POSTS_SUCCESS, POST_POSTS_REQUEST, POST_POSTS_SUCCESS, POST_POSTS_FAILURE, HANDLE_MODAL_SHOW, HANDLE_MODAL_CANCEL } from './constants';

export const getPostsAction = (payload) => ({ type: GET_POSTS_REQUEST, payload });
export const getPostsSuccess = (payload) => ({ type: GET_POSTS_SUCCESS, payload });
export const getPostsFailure = (payload) => ({ type: GET_POSTS_FAILURE, payload });

export const postPostsAction = (payload) => ({ type: POST_POSTS_REQUEST, payload });
export const postPostsSuccess = (payload) => ({ type: POST_POSTS_SUCCESS, payload });
export const postPostsFailure = (payload) => ({ type: POST_POSTS_FAILURE, payload });

export const handleModalShowAction = (payload) => ({ type: HANDLE_MODAL_SHOW, payload });
export const handleModalCancelAction = (payload) => ({ type: HANDLE_MODAL_CANCEL, payload });
