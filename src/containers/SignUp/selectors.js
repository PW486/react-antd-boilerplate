import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the signUp state domain
 */

const selectSignUpDomain = state => state.signUp || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SignUp
 */

const makeSelectSignUp = () =>
  createSelector(
    selectSignUpDomain,
    substate => substate,
  );

export default makeSelectSignUp;
export { selectSignUpDomain };
