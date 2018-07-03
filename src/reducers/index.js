import {combineReducers} from 'redux';
import posts from './posts'


const allReducers = combineReducers({
	posts
});

console.log('MORE REDUCERS!!!!!!!!!!!' ,allReducers);

export default allReducers;