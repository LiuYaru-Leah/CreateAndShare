import * as constants from './constants';

export const  newArticle=(value)=>({
    type: constants.NEW_ARTICLE,
    value,
})