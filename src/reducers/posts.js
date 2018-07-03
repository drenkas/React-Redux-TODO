import { POST_ADD, POST_DELETE, POST_EDIT} from "../action";

const postEditing = (state = {}, action) => {
	if (state.id !== action.payload){
		return state
	}
	console.log('REDUCER_EDIT TEXT', action.text);
	console.log('REDUCER_EDIT STATE', state);
	console.log('REDUCER_EDIT upSTATE', {...state, text: action.text});
	return {...state, text: action.text};
}

const posts = (state = [], action) => {
	switch (action.type) {
		case POST_ADD:
			/* console.log('REDUCER_ADD spread', 
				...action.payload
			);
			console.log('REDUCER_ADD non-spread', 
				action.payload
			); */
			if (Array.isArray(action.payload)) {
				return [...state, ...action.payload]
			}
			if (!action.payload.id) { 
				action.payload.id = new Date().getTime(); 
			}
			return [
				...state,
				action.payload
			]
		case POST_DELETE:
			console.log('REDUCER_DELETE non-spread', 
				action.payload, 'STATE', state
			);
			let newState = state.filter(todo => todo.id !== action.payload)
			console.log('REDUCER_DELETE newState', newState);
			return [
				...newState
			];
		case POST_EDIT:
			return state.map(d => postEditing(d, action));
		default:
		console.log('REDUCER', state);
		return state
	}// asaf
	}
	
	export default posts