import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

const changHomeData = (result) => ({
	type: constants.CHANGE_HOME_DATA,
	topicList: result.topicList,
	bookList: result.bookList,
	recommendList: result.recommendList
});

const addHomeList = (list, nextPage) => ({
	type: constants.ADD_ARTICLE_LIST,
	list: fromJS(list),
	nextPage
});
const changBookData = (result) => ({
	type: constants.CHANGE_BOOK_DATA,
	bookdetail:result.bookdetail
});

export const getHomeInfo = () => {
	return (dispatch) => {
		axios.get('/data/book.json').then((res) => {
			const result = res.data.data;
			dispatch(changHomeData(result));
		});
	}
}
export const getBookInfo = () => {
	return (dispatch) => {
		axios.get('/data/bookdetail.json').then((res) => {
			const result = res.data.data;
			dispatch(changBookData(result));
		});
	}
}

export const getMoreList = (page) => {
	return (dispatch) => {
		axios.get('/data/bookList.json?page=' + page).then((res) => {
			const result = res.data.data;
			dispatch(addHomeList(result, page + 1));
		});
	}
}
export const changeStarState = (star) => ({
	type:constants.CHANGE_STAR_STATE,
	value:!star
})

export const toggleTopShow = (show) => ({
	type: constants.TOGGLE_SCROLL_TOP,
	show
})