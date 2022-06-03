import { fromJS } from "immutable";
import * as constants from './constants';

const defaultState = fromJS({
    login:false,
    article:{},
})

export default(state = defaultState,action)=>{
    switch(action.type){
        case constants.NEW_ARTICLE:
        return state.set('article',action.value);
        default:
            return state;
    }

}