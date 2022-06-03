import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	articleList: []
});


const addArticleList = (state, action) => {
	return state.merge({
		'articleList': state.get('articleList').concat(action.list),
	});
};

// eslint-disable-next-line
export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.ADD_ARTICLE_LIST:
			return addArticleList(state, action);
		default:
			return state;
	}
}