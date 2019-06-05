import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Button, Table, Modal } from 'antd';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectPostList, makeSelectModalVisible, makeSelectModalLoading } from './selectors';
import { getPostsAction, handleModalShowAction, handleModalCancelAction, postPostsAction } from './actions';
import reducer from './reducer';
import saga from './saga';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Text',
    dataIndex: 'text',
    key: 'text',
  },
  {
    title: 'Photo',
    dataIndex: 'photo',
    key: 'photo',
  },
  {
    title: 'Created At',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
  {
    title: 'Updated At',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
  },
];

class Board extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Board</title>
          <meta name="description" content="Description of Board" />
        </Helmet>
        <div style={{ marginBottom: 16 }}>
          <Button type="primary" onClick={this.props.handleModalShow}>Write</Button>
        </div>
        <Modal
          title="Write a Post"
          visible={this.props.modalVisible}
          onOk={this.props.postPosts}
          confirmLoading={this.props.modalLoading}
          onCancel={this.props.handleModalCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <Table dataSource={this.props.postList} columns={columns} />
      </React.Fragment>
    );
  }
}

Board.propTypes = {
  postList: PropTypes.array,
  modalVisible: PropTypes.bool,
  modalLoading: PropTypes.bool,
  getPosts: PropTypes.func,
  postPosts: PropTypes.func,
  handleModalShow: PropTypes.func,
  handleModalCancel: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  postList: makeSelectPostList(),
  modalVisible: makeSelectModalVisible(),
  modalLoading: makeSelectModalLoading(),
});

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPostsAction()),
  postPosts: () => dispatch(postPostsAction()),
  handleModalShow: () => dispatch(handleModalShowAction()),
  handleModalCancel: () => dispatch(handleModalCancelAction()),
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
