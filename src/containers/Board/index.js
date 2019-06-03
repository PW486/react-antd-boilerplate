import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Button } from 'antd';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectBoard, makeSelectPostList } from './selectors';
import { postGetAllRequest } from './actions';
import reducer from './reducer';
import saga from './saga';

class Board extends React.Component {
  componentDidMount() {
    this.props.postGetAllRequest();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Board</title>
          <meta name="description" content="Description of Board" />
        </Helmet>
        {JSON.stringify(this.props.postList)}
        <Button onClick={this.props.postGetAllRequest}>temp</Button>
      </div>
    );
  }
}

Board.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  board: makeSelectBoard(),
  postList: makeSelectPostList(),
});

const mapDispatchToProps = dispatch => ({
  postGetAllRequest: () => dispatch(postGetAllRequest()),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'board', reducer });
const withSaga = injectSaga({ key: 'board', saga });

export default compose(
  withConnect,
  withReducer,
  withSaga,
  memo,
)(Board);
