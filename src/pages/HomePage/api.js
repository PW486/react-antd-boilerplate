import axios from 'axios';

export function loadPosts() {
  // `axios` function returns promise, you can use any ajax lib, which can
  // return promise, or wrap in promise ajax call
  return axios.get('https://api.github.com/users/PW486/repos?type=all&sort=updated');
}
