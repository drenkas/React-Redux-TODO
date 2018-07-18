import { POST_PRELOAD , POST_POSTLOAD} from "../utils/types";
import {Map} from 'immutable';

const initialState = Map({value: false});

const loading = (state = initialState, action) => {
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