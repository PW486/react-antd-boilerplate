import request from 'utils/request';

export function signIn(payload) {
  return request.post('v1/signin', payload);
}
