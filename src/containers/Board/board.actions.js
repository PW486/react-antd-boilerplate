import {
  GET_POSTS_REQUEST,
  GET_POSTS_FAILURE,
  GET_POSTS_SUCCESS,
  POST_POSTS_REQUEST,
  POST_POSTS_SUCCESS,
  POST_POSTS_FAILURE,
  HANDLE_MODAL_SHOW,
  HANDLE_MODAL_CANCEL,
  ON_CHANGE_TITLE,
  ON_CHANGE_TEXT,
  ON_CHANGE_ADD_PHOTO,
  ON_CHANGE_DEL_PHOTO,
} from './board.constants';

export const getPostsAction = payload => ({ type: GET_POSTS_REQUEST, payload });
export const getPostsSuccess = payload => ({ type: GET_POSTS_SUCCESS, payload });
export const getPostsFailure = payload => ({ type: GET_POSTS_FAILURE, payload });

export const postPostsAction = payload => ({ type: POST_POSTS_REQUEST, payload });
export const postPostsSuccess = payload => ({ type: POST_POSTS_SUCCESS, payload });
export const postPostsFailure = payload => ({ type: POST_POSTS_FAILURE, payload });

export const handleModalShowAction = payload => ({ type: HANDLE_MODAL_SHOW, payload });
export const handleModalCancelAction = payload => ({ type: HANDLE_MODAL_CANCEL, payload });

export const onChangeTitleAction = payload => ({ type: ON_CHANGE_TITLE, payload });
export const onChangeTextAction = payload => ({ type: ON_CHANGE_TEXT, payload });
export const onChangeAddPhotoAction = payload => ({ type: ON_CHANGE_ADD_PHOTO, payload });
export const onChangeDelPhotoAction = payload => ({ type: ON_CHANGE_DEL_PHOTO, payload });
