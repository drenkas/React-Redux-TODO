import { POST_FETCH, POST_ADD, POST_DELETE, POST_EDIT,  POST_PREEDIT} from "../utils/types";
import {List, Map} from 'immutable';

const initialState = List([]);

const postEditing = (post, action) => {
	if (post.get("id") !== action.payload){
		return post
	}
	return post.merge(Map({text: action.text, loading: false, isFetching: false}));
}

const posts = (state = initialState, action) => {
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
			var found = state.findIndex((value, index, array) => {
				if (value.get('id') === action.payload) {
					return true;
				}
				return false;
			});
			return state.delete(found);
		
		case POST_PREEDIT:
			let complete = state.map(d => {
				if (d.get("id") !== action.id){return d};
				return d.merge(Map({loading: true, isFetching: true}));
			});
			return state.merge(complete);
		
		case POST_EDIT:
			let change = state.map(d => postEditing(d, action));
			return state.merge(change);
		case POST_FETCH:
			let isFetch = state.map(d => {
				if (d.get('id') !== action.id){return d}
				return d.merge(Map({isFetching: true}));
			});
			return state.merge(isFetch);
		default:
		return state
	}
}
	
	export default posts