import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectSignInDomain = state => state.signIn || initialState;

const makeSelectEmail = () =>
  createSelector(
    selectSignInDomain,
    substate => substate.userForm.email,
  );
const makeSelectPassword = () =>
  createSelector(
    selectSignInDomain,
    substate => substate.userForm.password,
  );

export { selectSignInDomain, makeSelectEmail, makeSelectPassword };
