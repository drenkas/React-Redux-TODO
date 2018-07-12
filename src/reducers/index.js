import {combineReducers} from 'redux';
import todos from './todos'


const allReducers = combineReducers({
	todos
});

export default allReducers;