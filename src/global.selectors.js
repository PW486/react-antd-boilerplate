import { createSelector } from 'reselect';
import { initialState } from './global.reducer';

const selectGlobal = state => state.global || initialState;
const selectRouter = state => state.router;

const makeSelectUser = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.user,
  );
const makeSelectUserId = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.user.id,
  );
const makeSelectUserPermissions = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.user.permissions,
  );

export { selectGlobal, selectRouter, makeSelectUser, makeSelectUserId, makeSelectUserPermissions };
