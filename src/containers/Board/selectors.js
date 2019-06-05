import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectBoardDomain = state => state.board || initialState;

const makeSelectPostList = () => createSelector(selectBoardDomain, substate => substate.postList);
const makeSelectModalVisible = () => createSelector(selectBoardDomain, substate => substate.modalVisible);
const makeSelectModalLoading = () => createSelector(selectBoardDomain, substate => substate.modalLoading);

export {
  selectBoardDomain,
  makeSelectPostList,
  makeSelectModalVisible,
  makeSelectModalLoading,
};
