import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
//import {persistStore, persistReducer} from 'redux-persist'
//import storage from 'redux-persist/lib/storage'


// const persistConfig = {
//     key: 'root',
//     storage: storage,
// }


// const myPersistReducer = persistReducer(persistConfig, reducer)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(
	applyMiddleware(thunk)
));


// export const persistor = persistStore(store)

export default store;