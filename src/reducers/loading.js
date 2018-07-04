import { POST_PRELOAD , POST_POSTLOAD} from "../action";
import Immutable from 'immutable';

const initialState = false;

const loading = (state = initialState, action) => {
	state = Immutable.fromJS(state);
	console.log('LOADING', state);
	switch (action.type) {
		case POST_PRELOAD:
			return state = true;

		case POST_POSTLOAD:
			return state = false;
		default:
		
		return state
	}
}

export default loading