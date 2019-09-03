import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Button } from 'antd';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { getPostsAction, handleModalShowAction } from './board.actions';
import reducer from './board.reducer';
import saga from './board.saga';

import WritePostModal from './WritePostModal';
import PostTable from './PostTable';

const key = 'board';

function Board(props) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    props.getPosts();
  }, []);

  return (
    <>
      <Helmet>
        <title>Board</title>
        <meta name="description" content="Description of Board" />
      </Helmet>
      <WritePostModal />
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={props.handleModalShow}>
          Write
        </Button>
      </div>
      <PostTable />
    </>
  );
}

Board.propTypes = {
  getPosts: PropTypes.func,
  handleModalShow: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPostsAction()),
  handleModalShow: () => dispatch(handleModalShowAction()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Board);
