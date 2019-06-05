import produce from 'immer';
import { GET_POSTS_SUCCESS, HANDLE_MODAL_SHOW, HANDLE_MODAL_CANCEL, POST_POSTS_REQUEST, POST_POSTS_SUCCESS, POST_POSTS_FAILURE } from './constants';

export const initialState = {
  postList: [],
  modalVisible: false,
  modalLoading: false,
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
      case HANDLE_MODAL_CANCEL:
        draft.modalLoading = false;
        draft.modalVisible = false;
        break;
      case POST_POSTS_FAILURE:
        draft.modalLoading = false;
        break;
      case HANDLE_MODAL_SHOW:
        draft.modalVisible = true;
        break;
    }
  });

export default boardReducer;
