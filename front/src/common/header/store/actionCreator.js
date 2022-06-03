// help to create action for index.js of header
import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeList = (data) =>({
    type: constants.CHANGE_LIST,
    //change the data to the immutable object
    data: fromJS(data),
    totalPage: Math.ceil(data.length/5),
});

export const searchFocus = ()=>({
    type: constants.SEARCH_FOCUS
});

export const searchBlur = ()=>({
    type: constants.SEARCH_BLUR
});

export const mouseEnter = ()=>({
    type: constants.MOUSE_ENTER
});

export const mouseLeave = ()=>({
    type: constants.MOUSE_LEAVE
});

export const changePage = (page)=>({
    type: constants.CHANGE_PAGE,
    page
});

//redux-thunk can return a function
export const getList = () => {
    return (dispatch)=>{
        axios.get('/data/headerList.json').then((res)=>{
            const data = res.data;
            dispatch(changeList(data.data));
        }).catch(()=>{
            console.log("error");
        })
    }
};