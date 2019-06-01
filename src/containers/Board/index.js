/**
 *
 * Board
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectBoard from './selectors';
import reducer from './reducer';
import saga from './saga';

export function Board() {
  useInjectReducer({ key: 'board', reducer });
  useInjectSaga({ key: 'board', saga });

  return (
    <div>
      <Helmet>
        <title>Board</title>
        <meta name="description" content="Description of Board" />
      </Helmet>
    </div>
  );
}

Board.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  board: makeSelectBoard(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Board);
