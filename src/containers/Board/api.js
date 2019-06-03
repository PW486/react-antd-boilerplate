import request from 'utils/request';

export function postGetAllAPI() {
  return request.get('posts');
}
