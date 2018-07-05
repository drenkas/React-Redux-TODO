import {combineReducers} from 'redux';
import todos from './todos'


const allReducers = combineReducers({
	todos
});

console.log('MORE REDUCERS!!!!!!!!!!!' ,allReducers);

export default allReducers;