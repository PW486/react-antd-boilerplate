import produce from 'immer';
import {
  GET_POSTS_SUCCESS,
  HANDLE_MODAL_SHOW,
  HANDLE_MODAL_CANCEL,
  POST_POSTS_REQUEST,
  POST_POSTS_SUCCESS,
  POST_POSTS_FAILURE,
  ON_CHANGE_TEXT,
  ON_CHANGE_TITLE,
  ON_CHANGE_ADD_PHOTO,
  ON_CHANGE_DEL_PHOTO,
} from './board.constants';

export const initialState = {
  postList: [],
  modalVisible: false,
  modalLoading: false,
  postForm: {
    title: '',
    text: '',
    photo: [],
  },
};

/* eslint-disable default-case, no-param-reassign */
const boardReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_POSTS_SUCCESS:
        draft.postList = action.payload.data;
        break;
      case POST_POSTS_REQUEST:
        draft.modalLoading = true;
        break;
      case POST_POSTS_SUCCESS:
        draft.modalLoading = false;
        draft.modalVisible = false;
        draft.postForm = {
          title: '',
          text: '',
          photo: [],
        };
        break;
      case POST_POSTS_FAILURE:
        draft.modalLoading = false;
        break;
      case HANDLE_MODAL_SHOW:
        draft.modalVisible = true;
        break;
      case HANDLE_MODAL_CANCEL:
        draft.modalLoading = false;
        draft.modalVisible = false;
        break;
      case ON_CHANGE_TITLE:
        draft.postForm.title = action.payload;
        break;
      case ON_CHANGE_TEXT:
        draft.postForm.text = action.payload;
        break;
      case ON_CHANGE_ADD_PHOTO:
        draft.postForm.photo = [action.payload];
        break;
      case ON_CHANGE_DEL_PHOTO:
        draft.postForm.photo = [];
        break;
    }
  });

export default boardReducer;
