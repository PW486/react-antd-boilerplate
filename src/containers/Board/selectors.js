import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the board state domain
 */

const selectBoardDomain = state => state.board || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Board
 */

const makeSelectBoard = () =>
  createSelector(
    selectBoardDomain,
    substate => substate,
  );

const makeSelectPostList = () =>
  createSelector(
    selectBoardDomain,
    substate => substate.postList,
  );

export { selectBoardDomain, makeSelectBoard, makeSelectPostList };
