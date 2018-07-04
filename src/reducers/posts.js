import { POST_ADD, POST_DELETE, POST_EDIT,  POST_PREEDIT} from "../action";
import Immutable from 'immutable';

const initialState = [];

const postEditing = (post = {}, action) => {
	if (post.id !== action.payload){
		return post
	}
	console.log('REDUCER_EDIT TEXT', action.text);
	console.log('REDUCER_EDIT STATE', post);
	console.log('REDUCER_EDIT upSTATE', {...post, text: action.text});
	return {...post, text: action.text, loading: false};
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
		
		case POST_PREEDIT:
		console.log('complete EEEEEEDIT', state);
			let complete = state.toJS().map(d => {
				if (d.id !== action.payload){return d}
				return {...d, loading: true};
			});
			console.log('complete EEEEEEDIT', complete);
			console.log('FINAL complete EEEEEEDIT', state.merge(complete))
			return state.merge(complete);
		
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