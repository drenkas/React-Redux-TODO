import { ERROR } from "../action";
import Immutable from 'immutable';

const initialState = {
	value: false,
	message: ""
};

const error = (state = initialState, action) => {
	state = Immutable.fromJS(state);
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