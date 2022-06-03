import { fromJS } from 'immutable';
import * as constants from './constants';


const defaultState = fromJS({
	title: "",
	content: "",
  });
  
  const changeBOOKDetail = (state, action) =>
	state.merge({
	  title: fromJS(action.title),
	  content: fromJS(action.content),
	});
  
  const reducer = (state = defaultState, action) => {
	switch (action.type) {
	  case constants.CHANGE_BOOK_DETAIL:
		return changeBOOKDetail(state, action);
	  default:
		return state;
	}
  };
  
  export default reducer;
  
  