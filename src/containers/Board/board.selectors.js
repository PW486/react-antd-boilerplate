import { createSelector } from 'reselect';
import { initialState } from './board.reducer';

const selectBoardDomain = state => state.board || initialState;

const makeSelectPostList = () =>
  createSelector(
    selectBoardDomain,
    substate => substate.postList,
  );

const makeSelectModalVisible = () =>
  createSelector(
    selectBoardDomain,
    substate => substate.modalVisible,
  );
const makeSelectModalLoading = () =>
  createSelector(
    selectBoardDomain,
    substate => substate.modalLoading,
  );

const makeSelectTitle = () =>
  createSelector(
    selectBoardDomain,
    substate => substate.postForm.title,
  );
const makeSelectText = () =>
  createSelector(
    selectBoardDomain,
    substate => substate.postForm.text,
  );
const makeSelectPhoto = () =>
  createSelector(
    selectBoardDomain,
    substate => substate.postForm.photo,
  );

export {
  selectBoardDomain,
  makeSelectPostList,
  makeSelectModalVisible,
  makeSelectModalLoading,
  makeSelectTitle,
  makeSelectText,
  makeSelectPhoto,
};
