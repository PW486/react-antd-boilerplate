import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Button, Table, Modal, Input, Icon, Upload, Avatar } from 'antd';
import urljoin from 'url-join';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectPostList,
  makeSelectModalVisible,
  makeSelectModalLoading,
  makeSelectTitle,
  makeSelectText,
  makeSelectPhoto,
} from './selectors';
import {
  getPostsAction,
  handleModalShowAction,
  handleModalCancelAction,
  postPostsAction,
  onChangeTitleAction,
  onChangeTextAction,
  onChangeAddPhotoAction,
  onChangeDelPhotoAction,
} from './actions';
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
    render: text => <pre style={{ marginBottom: 0, maxHeight: 100 }}>{text}</pre>,
  },
  {
    title: 'Photo',
    dataIndex: 'photo',
    key: 'photo',
    render: photo =>
      photo ? (
        <Avatar src={`${urljoin(process.env.REACT_APP_BASE_URL, photo)}`} shape="square" />
      ) : (
          <Avatar icon="file-image" shape="square" />
        ),
  },
  {
    title: 'Created At',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: time => <span>{time}</span>,
  },
  {
    title: 'Updated At',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
    render: time => <span>{time}</span>,
  },
];

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
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={props.handleModalShow}>
          Write
        </Button>
      </div>
      <Modal
        title="Write a Post"
        visible={props.modalVisible}
        onOk={props.postPosts}
        confirmLoading={props.modalLoading}
        onCancel={props.handleModalCancel}
      >
        <div style={{ marginBottom: 16 }}>
          <Input placeholder="Title" onChange={props.onChangeTitle} value={props.title} />
        </div>
        <div style={{ marginBottom: 16 }}>
          <Input.TextArea
            rows={4}
            placeholder="Write some text..."
            onChange={props.onChangeText}
            value={props.text}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <Upload
            onRemove={props.onChangeDelPhoto}
            beforeUpload={props.onChangeAddPhoto}
            fileList={props.photo}
            accept="image/*"
          >
            <Button>
              <Icon type="upload" /> Select a Photo
            </Button>
          </Upload>
        </div>
      </Modal>
      <Table dataSource={props.postList} columns={columns} />
    </>
  );
}

Board.propTypes = {
  postList: PropTypes.array,
  modalVisible: PropTypes.bool,
  modalLoading: PropTypes.bool,
  title: PropTypes.string,
  text: PropTypes.string,
  photo: PropTypes.array,
  getPosts: PropTypes.func,
  postPosts: PropTypes.func,
  handleModalShow: PropTypes.func,
  handleModalCancel: PropTypes.func,
  onChangeTitle: PropTypes.func,
  onChangeText: PropTypes.func,
  onChangeAddPhoto: PropTypes.func,
  onChangeDelPhoto: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  postList: makeSelectPostList(),
  modalVisible: makeSelectModalVisible(),
  modalLoading: makeSelectModalLoading(),
  title: makeSelectTitle(),
  text: makeSelectText(),
  photo: makeSelectPhoto(),
});

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPostsAction()),
  postPosts: () => dispatch(postPostsAction()),
  handleModalShow: () => dispatch(handleModalShowAction()),
  handleModalCancel: () => dispatch(handleModalCancelAction()),
  onChangeTitle: e => dispatch(onChangeTitleAction(e.target.value)),
  onChangeText: e => dispatch(onChangeTextAction(e.target.value)),
  onChangeAddPhoto: file => {
    dispatch(onChangeAddPhotoAction(file));
    return false;
  },
  onChangeDelPhoto: () => dispatch(onChangeDelPhotoAction()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Board);
