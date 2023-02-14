import { SET_CONTACTS_USERS } from "../actionType"

export default (state = {}, { type, payload }) => {
	switch (type) {
		case SET_CONTACTS_USERS:
			return {
				...state,
				users: payload.users
			}
		default:
			return state;
	}
}