//create a reducer to transfer the data from store and origin data
import * as constants from './constants';
//fromJS change a JS object to an immutable object
import { fromJS } from 'immutable';

const defaultState = fromJS({
    //default data
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
});

// the content of reducer is the function
//state: original data; return new state
// eslint-disable-next-line
export default(state = defaultState, action) => {
    switch(action.type){
        case constants.SEARCH_FOCUS:
            return state.set('focused', true);
        case constants.SEARCH_BLUR:
            return state.set('focused', false);
        case constants.CHANGE_LIST:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            })
        case constants.MOUSE_ENTER:
            return state.set('mouseIn',true);
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn',false);
        case constants.CHANGE_PAGE:
            return state.set('page', action.page);
        default:
            return state;
    }
}