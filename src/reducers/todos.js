import {combineReducers} from 'redux-immutable';
import posts from './posts'
import loading from './loading'
import error from './error'


const todos = combineReducers({
	posts,
	loading,
	error
});


export default todos;