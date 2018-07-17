import { POST_FETCH, POST_ADD, POST_DELETE, POST_EDIT,  POST_PREEDIT} from "../utils/types";
import Immutable from 'immutable';

const initialState = [];

const postEditing = (post = {}, action) => {
	if (post.id !== action.payload){
		return post
	}
	return {...post, text: action.text, loading: false, isFetching: false};
}

const posts = (state = initialState, action) => {
	state = Immutable.fromJS(state);
	switch (action.type) {
		case POST_ADD:
			if (Array.isArray(action.payload)) {
				state = state.merge(action.payload)
				return state;
			}
			if (!action.payload.id) {
				action.payload.id = new Date().getTime();
			}
			return state.push(action.payload);
		case POST_DELETE:
			var found = state.toJS().findIndex((value, index, array) => {
				if (value.id === action.payload) {
					return true;
				}
				return false;
			});
			return state.delete(found);
		
		case POST_PREEDIT:
			let complete = state.toJS().map(d => {
				if (d.id !== action.id){return d}
				return {...d, loading: true, isFetching: true};
			});
			return state.merge(complete);
		
		case POST_EDIT:
			let change = state.toJS().map(d => postEditing(d, action));
			return state.merge(change);
		case POST_FETCH:
			let isFetch = state.toJS().map(d => {
				if (d.id !== action.id){return d}
				return {...d,  isFetching: true};
			});
			return state.merge(isFetch);
		default:
		return state
	}
}
	
	export default posts