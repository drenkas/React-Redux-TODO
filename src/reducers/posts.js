import { POST_ADD, POST_DELETE, POST_EDIT, POST_PREADD, POST_PREDELETE, POST_PREEDIT, POST_PRELOAD} from "../action";
import Immutable from 'immutable';

const initialState = [];

const postEditing = (state = {}, action) => {
	if (state.id !== action.payload){
		return state
	}
	console.log('REDUCER_EDIT TEXT', action.text);
	console.log('REDUCER_EDIT STATE', state);
	console.log('REDUCER_EDIT upSTATE', {...state, text: action.text});
	return {...state, text: action.text};
}

const posts = (state = initialState, action) => {
	state = Immutable.fromJS(state);
	switch (action.type) {
		case POST_ADD:
			if (Array.isArray(action.payload)) {
				
				state = state.merge(action.payload)
				console.log('REDUCER_ADD STATE', state.toJS);
				return state;
			}
			if (!action.payload.id) { 
				
				action.payload.id = new Date().getTime();
				console.error('GET_TIME', action.payload.id); 
			}
			return state.push(action.payload);
		case POST_DELETE:
			var found = state.toJS().findIndex(function(value, index, array) {
				if (value.id === action.payload) {
				  return index;
				}
				return false;
			});
			console.log('FOUND', found);
			return state.delete(found);
			
		case POST_EDIT:
			let change = state.toJS().map(d => postEditing(d, action));
			console.log('CHANGE EEEEEEDIT', change);
			console.log('FINAL CHANGE EEEEEEDIT', state.merge(change))
			return state.merge(change);
		default:
		console.log('REDUCER', state);
		return state
	}
}
	
	export default posts