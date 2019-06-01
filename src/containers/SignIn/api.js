import request from 'utils/request';

export function signIn(payload) {
  console.log(payload);
  // `axios` function returns promise, you can use any ajax lib, which can
  // return promise, or wrap in promise ajax call
  return request.get('https://api.github.com/users/PW486/repos?type=all&sort=updated');
}
