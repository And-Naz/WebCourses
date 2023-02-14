import { SET_HOME_TEXT } from "../actionType";

export default (state = {}, { type, payload }) => {
	switch (type) {
		case SET_HOME_TEXT:
			return {
				...state,
				text: payload.text
			}
		default:
			return state;
	}
}