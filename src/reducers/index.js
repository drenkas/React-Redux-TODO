import {combineReducers} from 'redux-immutable';
import posts from './posts'
import loading from './loading'


const allReducers = combineReducers({
	posts,
	loading
});

console.log('MORE REDUCERS!!!!!!!!!!!' ,allReducers);

export default allReducers;