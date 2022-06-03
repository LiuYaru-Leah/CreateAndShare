import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  login: false,
  userInfo:{}
});
// eslint-disable-next-line
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_LOGIN:
      return state.set('login', action.value);
    case constants.LOGOUT:
      return state.set('login', action.value);
    case constants.UPDATE_USERINFO:
      return state.set('userInfo', action.value);
    default:
      return state;
  }
};
