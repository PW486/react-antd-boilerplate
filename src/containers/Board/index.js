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
import { makeSelectBoard, makeSelectPostList } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { postGetAllRequest } from './actions';
import { Button } from 'antd';

export function Board({ postGetAllRequest, postList }) {
  useInjectReducer({ key: 'board', reducer });
  useInjectSaga({ key: 'board', saga });

  return (
    <div>
      <Helmet>
        <title>Board</title>
        <meta name="description" content="Description of Board" />
      </Helmet>
      {JSON.stringify(postList)}
      <Button onClick={postGetAllRequest}>temp</Button>
    </div>
  );
}

Board.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  board: makeSelectBoard(),
  postList: makeSelectPostList(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    postGetAllRequest: () => dispatch(postGetAllRequest()),
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
