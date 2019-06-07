import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Button, Table, Modal, Input, Icon, Upload, Avatar } from 'antd';
import urljoin from 'url-join';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
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
          <Button type="primary" onClick={this.props.handleModalShow}>
            Write
          </Button>
        </div>
        <Modal
          title="Write a Post"
          visible={this.props.modalVisible}
          onOk={this.props.postPosts}
          confirmLoading={this.props.modalLoading}
          onCancel={this.props.handleModalCancel}
        >
          <div style={{ marginBottom: 16 }}>
            <Input placeholder="Title" onChange={this.props.onChangeTitle} value={this.props.title} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <Input.TextArea
              rows={4}
              placeholder="Write some text..."
              onChange={this.props.onChangeText}
              value={this.props.text}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <Upload
              onRemove={this.props.onChangeDelPhoto}
              beforeUpload={this.props.onChangeAddPhoto}
              fileList={this.props.photo}
              accept="image/*"
            >
              <Button>
                <Icon type="upload" /> Select a Photo
              </Button>
            </Upload>
          </div>
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
const withReducer = injectReducer({ key: 'board', reducer });
const withSaga = injectSaga({ key: 'board', saga });

export default compose(
  withConnect,
  withReducer,
  withSaga,
  memo,
)(Board);
