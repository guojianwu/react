import { createStore,combineReducers } from 'redux'
import count from './count'
import list from './list'
const store = createStore(combineReducers({count,list}));

export default store;