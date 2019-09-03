import request from 'utils/request';

export function postSignInAPI(payload) {
  return request.post('v1/signin', payload);
}
