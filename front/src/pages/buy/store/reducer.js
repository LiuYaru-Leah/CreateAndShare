import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	topicList: [],
	bookList: [],
	recommendList: [],
	articlePage: 1,
	showScroll: false,
	starState: false,
	bookdetail:[]
});

const changeHomeData = (state, action) => {
	return state.merge({
		topicList: fromJS(action.topicList),
		bookList: fromJS(action.bookList),
		recommendList: fromJS(action.recommendList)
	});
};
const changeBookData = (state, action) => {
	return state.merge({
		bookdetail: fromJS(action.bookdetail)
	});
};

const addArticleList = (state, action) => {
	return state.merge({
		'bookList': state.get('bookList').concat(action.list),
		'articlePage': action.nextPage
	});
};


// eslint-disable-next-line
export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.CHANGE_HOME_DATA:
			return changeHomeData(state, action);
		case constants.ADD_ARTICLE_LIST:
			return addArticleList(state, action);
		case constants.TOGGLE_SCROLL_TOP:
			return state.set('showScroll', action.show);
		case constants.CHANGE_STAR_STATE:
			return state.set('starState',action.value);
		case constants.CHANGE_BOOK_DATA:
			return changeBookData(state,action);
		default:
			return state;
	}
}