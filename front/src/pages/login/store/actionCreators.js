// import axios from 'axios';
import * as constants from './constants';

export const changeLogin = () => ({
  type: constants.CHANGE_LOGIN,
  value: true,
});

export const logout = () => ({
  type: constants.LOGOUT,
  value: false,
});

export const updateUserInfo = (value) => ({
  type: constants.UPDATE_USERINFO,
  value,
});
// export const login = (accout, password) => {
//   return (dispatch) => {
//     axios
//       .get('/api/login.json?account=' + accout + '&password=' + password)
//       .then((res) => {
//         const result = res.data.data;
//         if (result) {
//           dispatch(changeLogin());
//         } else {
//           alert('Login Failed');
//         }
//       });
//   };
// };
