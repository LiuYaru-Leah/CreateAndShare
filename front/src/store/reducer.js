import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as detailReducer } from '../pages/detail/store';
import { reducer as loginReducer } from '../pages/login/store';
import { reducer as buyReducer } from '../pages/buy/store';
import { reducer as writeReducer } from '../pages/write/store';
import { reducer as centerReducer } from '../pages/center/store';
import { reducer as bookdetailReduce } from '../pages/bookdetail/store';
const reducer = combineReducers({
	header: headerReducer,
	home: homeReducer,
	detail: detailReducer,
	login: loginReducer,
	buy:buyReducer,
	write: writeReducer,
	center: centerReducer,
	bookdetail: bookdetailReduce
});

export default reducer;
