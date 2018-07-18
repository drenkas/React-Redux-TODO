import { POST_FETCH, POST_CLEAR, POST_ADD, POST_DELETE, POST_EDIT,  POST_PREEDIT} from "../utils/types";
import {List, Map} from 'immutable';

const initialState = List([]);

const postEditing = (post, action) => {
	if (post.get("id") !== action.payload){
		return post
	}
	return post.merge({
		text: action.text,
		loading: false,
		isFetching: false
	});
}

const posts = (state = initialState, action) => {
	switch (action.type) {
		case POST_ADD:
			if (Array.isArray(action.payload)) {
				state = state.merge(
					action.payload.map(post => {
						return{
						...post,
							loading: false,
							isFetching: false
						}
					})
				)
				return state;
			}
			if (!action.payload.id) {
				action.payload.id = new Date().getTime();
			}
			return state.push(Map({
				...action.payload, 
				loading: false,
				isFetching: false
			}));
		case POST_DELETE:
			let found = state.findIndex((value, index, array) => {
				if (value.get('id') === action.payload) {
					return true;
				}
				return false;
			});
			return state.delete(found);
		
		case POST_PREEDIT:
			let complete = state.map(d => {
				if (d.get("id") !== action.id){return d};
				return d.merge({
					loading: true,
					isFetching: true
				});
			});
			return state.merge(complete);
		
		case POST_EDIT:
			let change = state.map(d => postEditing(d, action));
			return state.merge(change);
		case POST_FETCH:
			let isFetch = state.map(d => {
				if (d.get("id") !== action.id){return d}
				return d.merge({isFetching: true});
			});
			return state.merge(isFetch);
		case POST_CLEAR:
			return state.clear();
		default:
		return state
	}
}
	
	export default posts