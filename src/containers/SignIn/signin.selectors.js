import { createSelector } from 'reselect';
import { initialState } from './signin.reducer';

const selectSignInDomain = state => state.signin || initialState;

const makeSelectEmail = () =>
  createSelector(
    selectSignInDomain,
    substate => substate.singInForm.email,
  );
const makeSelectPassword = () =>
  createSelector(
    selectSignInDomain,
    substate => substate.singInForm.password,
  );

export { selectSignInDomain, makeSelectEmail, makeSelectPassword };
