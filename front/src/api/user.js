import request from '../util/request';
export function login(data) {
  return request({
    url: '/api/user/login',
    method: 'post',
    data,
  });
}
export function register(data) {
  return request({
    url: '/api/user/register',
    method: 'post',
    data: data,
  });
}

// export function logout() {
//   return request({
//     url: '/api/logout',
//     method: 'post',
//   });
// }
