import { ERROR } from "../utils/types";
import { Map } from 'immutable';

const initialState = Map({
	value: false,
	message: {}
});

const error = (state = initialState, action) => {
	switch (action.type) {
		case ERROR:
			return state.merge({
				value: true,
				message: action.payload
			});

		default:
			return state
	}
}

export default error