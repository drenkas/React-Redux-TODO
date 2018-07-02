import {combineReducers} from 'redux';
import posts from './posts'


const allReducers = combineReducers({
	posts
});

export default allReducers;