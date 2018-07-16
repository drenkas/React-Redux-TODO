import { POST_PRELOAD , POST_POSTLOAD} from "../utils/types";
import Immutable from 'immutable';

const initialState = {value: false};

const loading = (state = initialState, action) => {
	state = Immutable.fromJS(state);
	switch (action.type) {
		case POST_PRELOAD:
			return state.merge({
				value: true
			});

		case POST_POSTLOAD:
			return state.merge({
				value: false
			});
		default:
		
		return state
	}
}

export default loading